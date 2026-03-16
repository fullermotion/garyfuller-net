<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Analytics from '$lib/Analytics.svelte';

	let { children } = $props();

	const navLinks = [
		{ href: '/blog', label: 'Blog' },
		{ href: '/portfolio', label: 'Portfolio' },
		{ href: '/resume', label: 'Resume' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];

	function isActive(href: string) {
		return $page.url.pathname === href || $page.url.pathname.startsWith(href + '/');
	}
</script>

<Analytics />

<svelte:head>
	<title>Gary Fuller — Solutions Architect</title>
</svelte:head>

<header class="border-b border-gray-200">
	<div class="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
		<a href="/" class="text-lg font-semibold tracking-tight text-gray-900 hover:text-gray-600 transition-colors">
			Gary Fuller
		</a>
		<nav class="flex gap-6">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-sm font-medium transition-colors {isActive(link.href) ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}"
				>
					{link.label}
				</a>
			{/each}
		</nav>
	</div>
</header>

<main class="mx-auto max-w-5xl px-6 py-12">
	{@render children()}
</main>

<footer class="border-t border-gray-200 mt-24">
	<div class="mx-auto max-w-5xl px-6 py-8 flex items-center justify-between text-sm text-gray-500">
		<p>&copy; {new Date().getFullYear()} Gary Fuller. All rights reserved.</p>
		<div class="flex gap-4">
			<a href="https://www.linkedin.com/in/garyfuller2/" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 transition-colors">LinkedIn</a>
			<a href="/contact" class="hover:text-gray-900 transition-colors">Contact</a>
		</div>
	</div>
</footer>
