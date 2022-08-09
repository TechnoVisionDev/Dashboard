<script lang="ts">
	import { Footer } from "$layout"
	import { discord } from "$lib/data"
	import { session } from "$app/stores"
	import { USER_GUILDS } from "@biscuitland/api-types"
</script>

<svelte:head>
	<title>TechnoBot - Server Selector</title>
	<meta name="servers" content="Select a discord server to add TechnoBot" />
</svelte:head>

<h1>Servers</h1>

{#await discord($session, USER_GUILDS()) then guilds}
	{#each guilds as guild (guild.id)}
		<p>{guild.name}</p>
	{/each}
{:catch err}
	{err}
{/await}

<div class="footer-wrapper">
	<Footer />
</div>

<style lang="scss">
	.footer-wrapper {
		margin-top: 35rem;
	}
</style>
