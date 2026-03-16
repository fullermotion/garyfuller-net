<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} — Gary Fuller</title>
</svelte:head>

<article class="max-w-2xl">
	<a href="/blog" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">← Back to blog</a>

	<div class="mt-8 mb-10">
		<time class="text-xs font-medium text-gray-400 uppercase tracking-widest">{data.date}</time>
		<h1 class="text-3xl font-bold text-gray-900 mt-2">{data.title}</h1>
		{#if data.tags.length > 0}
			<div class="flex flex-wrap gap-2 mt-4">
				{#each data.tags as tag}
					<span class="px-2.5 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">{tag}</span>
				{/each}
			</div>
		{/if}
	</div>

	<div class="prose prose-gray max-w-none">
		{@html data.html}
	</div>
</article>
