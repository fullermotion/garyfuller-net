<script lang="ts">
	let { data } = $props();

	// Group the current page's posts by year
	const postsByYear = $derived(
		data.posts.reduce(
			(groups: { year: string; posts: typeof data.posts }[], post) => {
				const year = post.date ? post.date.slice(0, 4) : 'Unknown';
				const existing = groups.find((g) => g.year === year);
				if (existing) {
					existing.posts.push(post);
				} else {
					groups.push({ year, posts: [post] });
				}
				return groups;
			},
			[]
		)
	);
</script>

<svelte:head>
	<title>Blog — Gary Fuller</title>
	<meta name="description" content="Writing on AEM, enterprise architecture, AI, and technical leadership by Gary Fuller." />
	{#if data.page > 1}
		<link rel="prev" href="/blog?page={data.page - 1}" />
	{/if}
	{#if data.page < data.totalPages}
		<link rel="next" href="/blog?page={data.page + 1}" />
	{/if}
</svelte:head>

<div class="mx-auto max-w-6xl px-6 py-12 md:py-16">
	<p class="section-label mb-4">Blog</p>
	<h1 class="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-4">Writing</h1>
	<p class="text-stone-600 max-w-2xl mb-12">On AEM, enterprise architecture, AI, and the craft of technical leadership.</p>

	{#if data.posts.length === 0}
		<p class="text-stone-500">No posts yet. Check back soon.</p>
	{:else}
		{#each postsByYear as group}
			<div class="mb-12">
				<h2 class="font-serif text-2xl font-semibold text-stone-400 mb-8 pb-3 border-b border-stone-200">{group.year}</h2>
				<div class="space-y-10">
					{#each group.posts as post}
						<article class="group">
							<time class="section-label text-sm">{post.date}</time>
							<h3 class="font-serif text-xl font-semibold text-stone-900 mt-2 mb-2">
								<a href="/blog/{post.slug}" class="hover:text-stone-600 transition-colors">{post.title}</a>
							</h3>
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
			</div>
		{/each}

		{#if data.totalPages > 1}
			<div class="flex items-center justify-between pt-8 border-t border-stone-200 mt-4">
				<div class="text-sm text-stone-400">
					Page {data.page} of {data.totalPages}
				</div>
				<div class="flex gap-3">
					{#if data.page > 1}
						<a
							href="/blog?page={data.page - 1}"
							class="px-4 py-2 text-sm font-medium text-stone-600 border border-stone-300 rounded hover:bg-stone-50 transition-colors"
						>
							← Newer
						</a>
					{/if}
					{#if data.page < data.totalPages}
						<a
							href="/blog?page={data.page + 1}"
							class="px-4 py-2 text-sm font-medium text-stone-600 border border-stone-300 rounded hover:bg-stone-50 transition-colors"
						>
							Older →
						</a>
					{/if}
				</div>
			</div>
		{/if}
	{/if}
</div>
