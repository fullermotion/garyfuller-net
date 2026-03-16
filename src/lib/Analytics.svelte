<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { env } from '$env/dynamic/public';

	const gaId = env.PUBLIC_GA_MEASUREMENT_ID;

	$effect(() => {
		if (browser && gaId) {
			// @ts-ignore
			window.gtag?.('config', gaId, {
				page_path: $page.url.pathname
			});
		}
	});
</script>

<svelte:head>
	{#if gaId}
		<script async src="https://www.googletagmanager.com/gtag/js?id={gaId}"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() { dataLayer.push(arguments); }
			gtag('js', new Date());
		</script>
	{/if}
</svelte:head>
