<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog — Gary Fuller</title>
	<meta name="description" content="Writing on AEM, enterprise architecture, AI, and technical leadership by Gary Fuller." />
</svelte:head>

<div class="mx-auto max-w-6xl px-6 py-12 md:py-16">
	<p class="section-label mb-4">Blog</p>
	<h1 class="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-4">Writing</h1>
	<p class="text-stone-600 max-w-2xl mb-12">On AEM, enterprise architecture, AI, and the craft of technical leadership.</p>

	{#if data.posts.length === 0}
		<p class="text-stone-500">No posts yet. Check back soon.</p>
	{:else}
		<div class="space-y-12">
			{#each data.posts as post}
				<article class="group border-b border-stone-200 pb-12 last:border-0">
					<time class="section-label">{post.date}</time>
					<h2 class="font-serif text-xl font-semibold text-stone-900 mt-2 mb-2">
						<a href="/blog/{post.slug}" class="hover:text-stone-600 transition-colors">{post.title}</a>
					</h2>
					{#if post.summary}
						<p class="text-stone-600 leading-relaxed mb-4">{post.summary}</p>
					{/if}
					{#if post.tags.length > 0}
						<div class="flex flex-wrap gap-2">
							{#each post.tags as tag}
								<span class="px-2.5 py-0.5 bg-stone-100 text-stone-500 text-xs rounded-full">{tag}</span>
							{/each}
						</div>
					{/if}
				</article>
			{/each}
		</div>
	{/if}
</div>
