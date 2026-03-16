<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} — Gary Fuller</title>
</svelte:head>

<article class="mx-auto max-w-2xl px-6 py-12 md:py-16">
	<a href="/blog" class="text-sm text-stone-500 hover:text-stone-900 transition-colors">← Back to blog</a>

	<div class="mt-8 mb-10">
		<time class="section-label">{data.date}</time>
		<h1 class="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mt-2">{data.title}</h1>
		{#if data.tags.length > 0}
			<div class="flex flex-wrap gap-2 mt-4">
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
