<script lang="ts">
	const projects = [
		{
			title: 'FullerMotion Website (Renovatio)',
			client: 'FullerMotion',
			year: '2025',
			category: 'web',
			description: 'Modern marketing and client platform built with Next.js 15, TypeScript, Supabase, and Resend. Features service showcasing, lead generation via contact forms, client authentication, and training program information.',
			link: 'https://www.fullermotion.com',
			tags: ['Next.js', 'TypeScript', 'Supabase', 'Resend', 'Netlify', 'Bootstrap 5']
		},
		{
			title: 'AI Voice Assistant (Magid)',
			client: 'Magid',
			year: '2023–2024',
			category: 'ai',
			description: 'Business-specific AI-powered voice interactive application allowing users to ask questions and receive natural, human-like responses across predefined topics. Built using the Whisper API.',
			link: null,
			tags: ['Whisper API', 'AI/ML', 'Voice UX', 'JavaScript']
		},
		{
			title: 'Dollar General E-Commerce Platform',
			client: 'Dollar General',
			year: '2021–2022',
			category: 'aem',
			description: 'Developed and maintained the main AEM e-commerce website for Dollar General, including the PopShelf sub-brand. Integrated Adobe Target for personalization and Adobe Launch for tag management.',
			link: 'https://www.dollargeneral.com',
			tags: ['Adobe Experience Manager', 'Adobe Target', 'Adobe Launch', 'ReactJS', 'NodeJS']
		},
		{
			title: 'Wintrust SBA & PPP Vue SPA',
			client: 'Wintrust Financial',
			year: '2019–2021',
			category: 'aem',
			description: 'Developed a highly successful Vue.js single-page application for SBA and PPP loan applications during the COVID-19 period. Showcased at Adobe Summit for its technical execution.',
			link: null,
			tags: ['Vue.js', 'Adobe Experience Manager', 'AEM Core Components', 'Bootstrap']
		}
	];

	const categories = [
		{ id: 'all', label: 'All' },
		{ id: 'aem', label: 'AEM' },
		{ id: 'ai', label: 'AI' },
		{ id: 'web', label: 'Web' }
	];

	let activeCategory = $state('all');

	const filtered = $derived(
		activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory)
	);
</script>

<svelte:head>
	<title>Portfolio — Gary Fuller</title>
	<meta name="description" content="Selected projects by Gary Fuller — enterprise AEM implementations, AI tools, and modern web applications." />
</svelte:head>

<div class="mx-auto max-w-6xl px-6 py-12 md:py-16">
	<p class="section-label mb-4">Portfolio</p>
	<h1 class="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-4">My Latest Projects</h1>
	<p class="text-stone-600 max-w-2xl mb-12">Selected projects spanning enterprise architecture, AI development, and modern web applications.</p>

	<!-- Category filter -->
	<div class="flex flex-wrap gap-2 mb-12">
		{#each categories as cat}
			<button
				type="button"
				onclick={() => (activeCategory = cat.id)}
				class="px-4 py-2 rounded-full text-sm font-medium transition-colors {activeCategory === cat.id
					? 'bg-stone-900 text-white'
					: 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'}"
			>
				{cat.label}
			</button>
		{/each}
	</div>

	<!-- Project grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each filtered as project}
			<article
				class="group p-6 md:p-8 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm transition-all"
			>
				<div class="flex items-start justify-between gap-4 mb-3">
					<span class="text-xs font-medium text-stone-400 uppercase tracking-wider">
						{project.category === 'aem' ? 'AEM' : project.category === 'ai' ? 'AI' : 'Web'} · {project.client}
					</span>
					{#if project.link}
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							class="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors shrink-0"
						>
							Visit site →
						</a>
					{/if}
				</div>
				<h2 class="font-serif text-xl font-semibold text-stone-900 group-hover:text-stone-700 transition-colors">
					{project.title}
				</h2>
				<p class="text-stone-500 text-sm mt-1">{project.year}</p>
				<p class="text-stone-600 leading-relaxed mt-4">{project.description}</p>
				<div class="flex flex-wrap gap-2 mt-6">
					{#each project.tags as tag}
						<span class="px-2.5 py-0.5 bg-stone-100 text-stone-600 text-xs rounded-full">{tag}</span>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</div>
