<script lang="ts">
	import { enhance } from '$app/forms';

	let { form } = $props();
	let submitting = $state(false);
</script>

<svelte:head>
	<title>Contact — Gary Fuller</title>
	<meta name="description" content="Get in touch with Gary Fuller — available for consulting, speaking, and collaboration." />
</svelte:head>

<div class="mx-auto max-w-6xl px-6 py-12 md:py-16">
	<p class="section-label mb-4">Contact</p>
	<h1 class="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-4">Describe your project</h1>
	<p class="text-stone-600 max-w-xl mb-12">Available for consulting, speaking engagements, and collaboration. Fill out the form and I'll get back to you.</p>

	{#if form?.success}
		<div class="max-w-xl rounded-2xl bg-green-50 border border-green-200 p-8">
			<p class="text-green-800 font-medium">Message sent — thanks for reaching out. I'll be in touch soon.</p>
		</div>
	{:else}
		{#if form?.error}
			<div class="max-w-xl rounded-xl bg-red-50 border border-red-200 p-4 mb-8">
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
			class="max-w-xl space-y-6"
		>
			<div>
				<label for="name" class="block text-sm font-medium text-stone-700 mb-1.5">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={form?.name ?? ''}
					required
					class="w-full px-4 py-3 border border-stone-300 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent text-sm"
					placeholder="Your name"
				/>
			</div>

			<div>
				<label for="email" class="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					value={form?.email ?? ''}
					required
					class="w-full px-4 py-3 border border-stone-300 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent text-sm"
					placeholder="you@example.com"
				/>
			</div>

			<div>
				<label for="message" class="block text-sm font-medium text-stone-700 mb-1.5">Message</label>
				<textarea
					id="message"
					name="message"
					rows="5"
					required
					class="w-full px-4 py-3 border border-stone-300 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent text-sm resize-none"
					placeholder="What's on your mind?"
				>{form?.message ?? ''}</textarea>
			</div>

			<button
				type="submit"
				disabled={submitting}
				class="w-full md:w-auto px-8 py-3 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{submitting ? 'Sending…' : 'Send message'}
			</button>
		</form>
	{/if}

	<!-- Contact details -->
	<div class="mt-16 pt-12 border-t border-stone-200">
		<p class="section-label mb-4">Contact</p>
		<p class="text-stone-700">Wheaton, Illinois</p>
		<a href="mailto:gfuller@fullermotion.com" class="text-stone-900 font-medium hover:text-stone-600">gfuller@fullermotion.com</a>
	</div>
</div>
