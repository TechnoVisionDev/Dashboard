<script lang="ts">
	import Fa from "svelte-fa"
	import { faDiscord } from "@fortawesome/free-brands-svg-icons"
	import { Footer, FeatureList, Waves } from "$layout"
	import { external } from "$lib/utils"
	import { session } from "$app/stores"
	import { supabase } from "$lib/data"
</script>

<svelte:head>
	<title>TechnoBot</title>
	<meta name="description" content="TechnoBot landing page" />
</svelte:head>

<main>
	<img class="logo" src="/home/logo.png" alt="TechnoBot logo" />
	<h1 class="large-header">The Ultimate Discord Bot</h1>
	<h1 class="small-header">TechnoBot</h1>
	<div class="buttons">
		<a href={import.meta.env.VITE_DISCORD_BOT_INVITE} {...external}>
			<button class="add-button">
				<div class="icon">
					<Fa icon={faDiscord} />
				</div>
				&nbsp;Add To Discord
			</button>
		</a>
		{#if $session.user}
			<a href="/dashboard/servers">
				<button class="dashboard-button">Dashboard</button>
			</a>
		{:else}
			<button class="dashboard-button" on:click={async () => await supabase.auth.signIn({ provider: "discord" })}>
				Dashboard
			</button>
		{/if}
	</div>
</main>

<Waves />

<FeatureList />

<div class="footer-wrapper">
	<Footer />
</div>

<style lang="scss">
	.logo {
		height: 13rem;
		width: 13rem;
		border: 5px solid #2f353a;
		border-radius: 50%;
		margin: 7rem auto 0 auto;
		position: relative;
		overflow: hidden;
	}

	.large-header,
	.small-header {
		margin-top: 2rem;
		margin-bottom: 2rem;
		text-align: center;
		font-size: 3rem;
		display: inline;
	}

	.small-header {
		display: none;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-top: 1rem;

		> div {
			text-align: center;
		}
	}

	.buttons {
		display: flex;
		justify-content: center;
	}

	.add-button {
		position: relative;
		padding-left: 3rem;
		font-weight: 400;
		font-size: 1.2rem;
		background: linear-gradient(90deg, #5779ff, #57a5ff);
		border: 0;
		border-radius: 8px;
		margin-right: 1rem;
		height: 3.5rem;
		width: 14.5rem;
		cursor: pointer;
	}

	.icon {
		position: absolute;
		left: 8%;
		top: 20%;
		font-size: 32px;
	}

	.dashboard-button {
		background-color: transparent;
		font-weight: 400;
		font-size: 1.2rem;
		border: 4px solid #5779ff;
		border-radius: 8px;
		margin-right: 1rem;
		height: 3.5rem;
		width: 10rem;
		cursor: pointer;
	}

	.add-button:hover,
	.dashboard-button:hover {
		opacity: 80%;
	}

	.footer-wrapper {
		background-color: #2f353a;
	}

	@media screen and (width < 600px) {
		.buttons {
			flex-direction: column;
		}
		.dashboard-button {
			margin-top: 1rem;
			height: 3.5rem;
			width: 14.5rem;
		}
		.large-header {
			display: none;
		}
		.small-header {
			display: inline;
			font-size: 3.5rem;
		}
	}
</style>
