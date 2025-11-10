<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { getUser } from './auth.remote';
	import { authClient } from '$lib/auth-client';

	let { children } = $props();

	const user = $derived(await getUser());
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if user}
	{@render children()}
{:else}
	<button
		onclick={() => {
			authClient.signIn.social({ provider: 'github' });
		}}
		class="btn">Sign in</button
	>
{/if}
