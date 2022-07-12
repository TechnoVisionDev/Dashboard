<script lang="ts">
	import { Footer } from "$layout"
	import { user } from "$lib/data"
</script>

<svelte:head>
	<title>TechnoBot - Server Selector</title>
	<meta name="servers" content="Select a discord server to add TechnoBot" />
</svelte:head>

<h1>Servers</h1>

{#if $user}
	<pre>
		{JSON.stringify($user, null, 2)}
	</pre>
{:else}
	<p>$user is undefined</p>
{/if}

<div class="footer-wrapper">
	<Footer />
</div>

<style lang="scss">
	.footer-wrapper {
		margin-top: 35rem;
	}
</style>
