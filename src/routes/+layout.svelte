<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Analytics from '$lib/Analytics.svelte';

	let { children } = $props();

	const navLinks = [
		{ href: '/blog', label: 'Blog' },
		{ href: '/portfolio', label: 'Portfolio' },
		{ href: '/resume', label: 'Resume' },
		{ href: '/about', label: 'About' }
	];

	function isActive(href: string) {
		return $page.url.pathname === href || $page.url.pathname.startsWith(href + '/');
	}
</script>

<Analytics />

<svelte:head>
	<title>Gary Fuller — Solutions Architect</title>
</svelte:head>

<header class="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/95 backdrop-blur-sm">
	<div class="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
		<a href="/" class="font-serif text-lg font-semibold text-stone-900 hover:text-stone-600 transition-colors">
			Gary Fuller
		</a>
		<nav class="flex items-center gap-8">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-sm font-medium transition-colors {isActive(link.href) ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'}"
				>
					{link.label}
				</a>
			{/each}
			<a
				href="/contact"
				class="text-sm font-medium px-4 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-700 transition-colors"
			>
				Book me
			</a>
		</nav>
	</div>
</header>

<main>
	{@render children()}
</main>

<footer class="border-t border-stone-200 mt-24 bg-white">
	<div class="mx-auto max-w-6xl px-6 py-16">
		<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
			<div>
				<p class="font-serif text-2xl font-semibold text-stone-900 mb-2">Describe your project</p>
				<p class="text-stone-500 text-sm max-w-md">Available for consulting, architecture reviews, and implementation leadership. Let's talk.</p>
			</div>
			<a
				href="/contact"
				class="inline-flex items-center gap-2 text-stone-900 font-medium hover:text-stone-600 transition-colors shrink-0"
			>
				Get in touch
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
			</a>
		</div>
		<div class="mt-16 pt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-stone-400">
			<p>&copy; {new Date().getFullYear()} Gary Fuller. All rights reserved.</p>
			<div class="flex gap-6">
				<a href="https://www.linkedin.com/in/garyfuller2/" target="_blank" rel="noopener noreferrer" class="hover:text-stone-900 transition-colors">LinkedIn</a>
				<a href="mailto:gfuller@fullermotion.com" class="hover:text-stone-900 transition-colors">Email</a>
			</div>
		</div>
	</div>
</footer>
