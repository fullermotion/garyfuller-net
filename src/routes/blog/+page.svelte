<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog — Gary Fuller</title>
	<meta name="description" content="Writing on AEM, enterprise architecture, AI, and technical leadership by Gary Fuller." />
</svelte:head>

<div class="max-w-2xl">
	<h1 class="text-3xl font-bold text-gray-900 mb-4">Blog</h1>
	<p class="text-gray-600 mb-12">Writing on AEM, enterprise architecture, AI, and the craft of technical leadership.</p>

	{#if data.posts.length === 0}
		<p class="text-gray-500">No posts yet. Check back soon.</p>
	{:else}
		<div class="space-y-10">
			{#each data.posts as post}
				<article>
					<time class="text-xs font-medium text-gray-400 uppercase tracking-widest">{post.date}</time>
					<h2 class="text-xl font-semibold text-gray-900 mt-1 mb-2">
						<a href="/blog/{post.slug}" class="hover:text-gray-600 transition-colors">{post.title}</a>
					</h2>
					{#if post.summary}
						<p class="text-gray-600 leading-relaxed mb-3">{post.summary}</p>
					{/if}
					{#if post.tags.length > 0}
						<div class="flex flex-wrap gap-2">
							{#each post.tags as tag}
								<span class="px-2.5 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">{tag}</span>
							{/each}
						</div>
					{/if}
				</article>
			{/each}
		</div>
	{/if}
</div>
