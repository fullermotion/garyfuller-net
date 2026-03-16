import { fail } from '@sveltejs/kit';
import { db, initDb } from '$lib/server/db';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';

const resendApiKey = env.RESEND_API_KEY;
const contactEmail = env.CONTACT_EMAIL;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = (data.get('name') as string)?.trim();
		const email = (data.get('email') as string)?.trim();
		const message = (data.get('message') as string)?.trim();

		if (!name || !email || !message) {
			return fail(400, { error: 'All fields are required.', name, email, message });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return fail(400, { error: 'Please enter a valid email address.', name, email, message });
		}

		if (!db || !resend || !contactEmail) {
			return fail(503, {
				error: 'Contact form is not configured. Set TURSO_*, RESEND_API_KEY, and CONTACT_EMAIL in .env.',
				name,
				email,
				message
			});
		}

		try {
			await initDb();
			await db.execute({
				sql: 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
				args: [name, email, message]
			});

			await resend.emails.send({
				from: 'Contact Form <noreply@garyfuller.net>',
				to: contactEmail,
				subject: `New contact from ${name}`,
				html: `
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
					<p><strong>Message:</strong></p>
					<p>${message.replace(/\n/g, '<br>')}</p>
				`
			});

			return { success: true };
		} catch (err) {
			console.error('Contact form error:', err);
			return fail(500, { error: 'Something went wrong. Please try again.', name, email, message });
		}
	}
};
