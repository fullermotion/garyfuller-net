<svelte:head>
	<title>Portfolio — Gary Fuller</title>
	<meta name="description" content="Selected projects by Gary Fuller — enterprise AEM implementations, AI tools, and modern web applications." />
</svelte:head>

<div class="max-w-3xl">
	<h1 class="text-3xl font-bold text-gray-900 mb-4">Portfolio</h1>
	<p class="text-gray-600 mb-12">Selected projects spanning enterprise architecture, AI development, and modern web applications.</p>

	<div class="space-y-12">

		<article class="border-b border-gray-100 pb-12">
			<div class="flex items-start justify-between mb-3">
				<div>
					<h2 class="text-xl font-semibold text-gray-900">FullerMotion Website (Renovatio)</h2>
					<p class="text-sm text-gray-500 mt-0.5">FullerMotion · 2025</p>
				</div>
				<a href="https://www.fullermotion.com" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-500 hover:text-gray-900 transition-colors ml-4 whitespace-nowrap">
					Visit site →
				</a>
			</div>
			<p class="text-gray-700 leading-relaxed mb-4">
				Modern marketing and client platform built with Next.js 15, TypeScript, Supabase, and Resend. Features service showcasing, lead generation via contact forms, client authentication, and training program information. Deployed on Netlify with image optimization pipelines and security headers.
			</p>
			<div class="flex flex-wrap gap-2">
				{#each ['Next.js', 'TypeScript', 'Supabase', 'Resend', 'Netlify', 'Bootstrap 5'] as tag}
					<span class="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">{tag}</span>
				{/each}
			</div>
		</article>

		<article class="border-b border-gray-100 pb-12">
			<div class="flex items-start justify-between mb-3">
				<div>
					<h2 class="text-xl font-semibold text-gray-900">AI Voice Assistant (Magid)</h2>
					<p class="text-sm text-gray-500 mt-0.5">Magid · 2023–2024</p>
				</div>
			</div>
			<p class="text-gray-700 leading-relaxed mb-4">
				Business-specific AI-powered voice interactive application allowing users to ask questions and receive natural, human-like responses across predefined topics. Built using the Whisper API, similar in concept to Alexa or Siri but tailored to business environments.
			</p>
			<div class="flex flex-wrap gap-2">
				{#each ['Whisper API', 'AI/ML', 'Voice UX', 'JavaScript'] as tag}
					<span class="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">{tag}</span>
				{/each}
			</div>
		</article>

		<article class="border-b border-gray-100 pb-12">
			<div class="flex items-start justify-between mb-3">
				<div>
					<h2 class="text-xl font-semibold text-gray-900">Dollar General E-Commerce Platform</h2>
					<p class="text-sm text-gray-500 mt-0.5">Dollar General · 2021–2022</p>
				</div>
				<a href="https://www.dollargeneral.com" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-500 hover:text-gray-900 transition-colors ml-4 whitespace-nowrap">
					Visit site →
				</a>
			</div>
			<p class="text-gray-700 leading-relaxed mb-4">
				Developed and maintained the main AEM e-commerce website for Dollar General, including the PopShelf sub-brand. Integrated Adobe Target for personalization and Adobe Launch for tag management, while consulting on technical direction for the Digital Innovation team.
			</p>
			<div class="flex flex-wrap gap-2">
				{#each ['Adobe Experience Manager', 'Adobe Target', 'Adobe Launch', 'ReactJS', 'NodeJS'] as tag}
					<span class="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">{tag}</span>
				{/each}
			</div>
		</article>

		<article>
			<div class="flex items-start justify-between mb-3">
				<div>
					<h2 class="text-xl font-semibold text-gray-900">Wintrust SBA & PPP Vue SPA</h2>
					<p class="text-sm text-gray-500 mt-0.5">Wintrust Financial · 2019–2021</p>
				</div>
			</div>
			<p class="text-gray-700 leading-relaxed mb-4">
				Developed a highly successful Vue.js single-page application for SBA and PPP loan applications during the COVID-19 period. The application was showcased at Adobe Summit for its technical execution and was instrumental in helping Wintrust process applications at scale.
			</p>
			<div class="flex flex-wrap gap-2">
				{#each ['Vue.js', 'Adobe Experience Manager', 'AEM Core Components', 'Bootstrap'] as tag}
					<span class="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">{tag}</span>
				{/each}
			</div>
		</article>

	</div>
</div>
