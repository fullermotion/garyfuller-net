<script lang="ts">
	import { enhance } from '$app/forms';

	let { form } = $props();
	let submitting = $state(false);
</script>

<svelte:head>
	<title>Contact — Gary Fuller</title>
	<meta name="description" content="Get in touch with Gary Fuller — available for consulting, speaking, and collaboration." />
</svelte:head>

<div class="max-w-xl">
	<h1 class="text-3xl font-bold text-gray-900 mb-4">Contact</h1>
	<p class="text-gray-600 mb-10">Available for consulting, speaking engagements, and collaboration. Fill out the form and I'll get back to you.</p>

	{#if form?.success}
		<div class="rounded-lg bg-green-50 border border-green-200 p-6">
			<p class="text-green-800 font-medium">Message sent — thanks for reaching out. I'll be in touch soon.</p>
		</div>
	{:else}
		{#if form?.error}
			<div class="rounded-lg bg-red-50 border border-red-200 p-4 mb-6">
				<p class="text-red-700 text-sm">{form.error}</p>
			</div>
		{/if}

		<form
			method="POST"
			use:enhance={() => {
				submitting = true;
				return async ({ update }) => {
					await update();
					submitting = false;
				};
			}}
			class="space-y-6"
		>
			<div>
				<label for="name" class="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={form?.name ?? ''}
					required
					class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
					placeholder="Your name"
				/>
			</div>

			<div>
				<label for="email" class="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					value={form?.email ?? ''}
					required
					class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
					placeholder="you@example.com"
				/>
			</div>

			<div>
				<label for="message" class="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
				<textarea
					id="message"
					name="message"
					rows="5"
					required
					class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm resize-none"
					placeholder="What's on your mind?"
				>{form?.message ?? ''}</textarea>
			</div>

			<button
				type="submit"
				disabled={submitting}
				class="w-full px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{submitting ? 'Sending…' : 'Send message'}
			</button>
		</form>
	{/if}
</div>
