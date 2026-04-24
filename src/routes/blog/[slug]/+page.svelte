<script lang="ts">
	import { page } from '$app/stores';
	let { data } = $props();

	const shareUrl = $derived(`https://garyfuller.net${$page.url.pathname}`);
	const shareTitle = $derived(encodeURIComponent(data.title));
</script>

<svelte:head>
	<title>{data.title} — Gary Fuller</title>
</svelte:head>

<article class="mx-auto max-w-2xl px-6 py-12 md:py-16">
	<a href="/blog" class="text-sm text-stone-500 hover:text-stone-900 transition-colors">← Back to blog</a>

	<div class="mt-8 mb-10">
		<time class="section-label">{data.date}</time>
		<h1 class="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mt-3 mb-6">{data.title}</h1>

		<!-- Author byline -->
		<div class="flex items-center justify-between gap-4 py-4 border-y border-stone-200">
			<div class="flex items-center gap-3">
				<div class="w-22 h-22 rounded-full overflow-hidden border border-stone-200 shrink-0">
					<img
						src="/images/fullermotion_Create_a_line_drawing_portrait_of_Gary_in_the_spir_00a7daff-d9dc-4e4f-af93-aa0ed6532810.png"
						alt="Gary Fuller"
						class="w-full h-full object-cover object-[center_15%] contrast-125 brightness-95"
					/>
				</div>
				<div>
					<p class="text-lg font-semibold text-stone-900">Gary Fuller</p>
					<p class="text-base text-stone-500">Solutions Architect · Enterprise AI Developer</p>
				</div>
			</div>

			<!-- Share icons -->
			<div class="flex items-center gap-3">
				<a
					href="https://www.linkedin.com/sharing/share-offsite/?url={encodeURIComponent(shareUrl)}"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Share on LinkedIn"
					class="text-stone-400 hover:text-stone-900 transition-colors"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
					</svg>
				</a>
				<a
					href="https://twitter.com/intent/tweet?url={encodeURIComponent(shareUrl)}&text={shareTitle}"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Share on X"
					class="text-stone-400 hover:text-stone-900 transition-colors"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
					</svg>
				</a>
				<a
					href="mailto:?subject={shareTitle}&body={encodeURIComponent(shareUrl)}"
					aria-label="Share via email"
					class="text-stone-400 hover:text-stone-900 transition-colors"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
					</svg>
				</a>
			</div>
		</div>

		{#if data.tags.length > 0}
			<div class="flex flex-wrap gap-2 mt-5">
				{#each data.tags as tag}
					<span class="px-2.5 py-0.5 bg-stone-100 text-stone-500 text-xs rounded-full">{tag}</span>
				{/each}
			</div>
		{/if}
	</div>

	<div class="prose prose-stone max-w-none prose-p:text-stone-700 prose-p:leading-relaxed prose-headings:font-serif prose-headings:text-stone-900 prose-a:text-stone-900 prose-a:no-underline hover:prose-a:underline">
		{@html data.html}
	</div>
</article>
