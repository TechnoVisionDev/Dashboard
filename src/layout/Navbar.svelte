<script lang="ts">
	import { IconLink } from "$lib"
	import { faDiscord, faPatreon } from "@fortawesome/free-brands-svg-icons"
	import { faBook, faPlus } from "@fortawesome/free-solid-svg-icons"
	import { supabase } from "$lib/data"
	import { session } from "$app/stores"

	const signIn = async () => {
		await supabase.auth.signIn({
			provider: "discord"
		})
	}

	const signOut = async () => {
		await supabase.auth.signOut()
	}
</script>

<header>
	<nav>
		<ul class="links">
			<li>
				<a href="/" class="home">TechnoBot</a>
			</li>
			<li>
				<IconLink href={import.meta.env.VITE_DISCORD_BOT_INVITE} icon={faPlus}>Invite</IconLink>
			</li>
			<li>
				<IconLink href="https://discord.gg/2TKJqfUQas" icon={faDiscord}>Support</IconLink>
			</li>
			<li>
				<IconLink href="https://www.patreon.com/TechnoVision" icon={faPatreon}>Premium</IconLink>
			</li>
			<li>
				<IconLink href="https://github.com/TechnoVisionDev/TechnoBot" icon={faBook}>Source</IconLink>
			</li>
		</ul>

		{#if $session.user}
			<a class="login-button" href="/api/auth/logout">
				<img
					src={$session.user.user_metadata.picture}
					alt="{$session.user.app_metadata.full_name}'s avatar"
				/>
				Logout
			</a>
		{:else}
			<button class="login-button" on:click={signIn}>Login</button>
		{/if}
	</nav>
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		max-block-size: 60px;
		z-index: 999;

		nav {
			background: linear-gradient(90deg, #5779ff, #57a5ff);
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-inline: 1rem;
		}
	}

	.links {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding-inline-start: 1rem;

		li {
			display: inline-block;

			.home {
				font-size: 1.5rem;
				font-weight: 500;
				padding-inline-end: 1rem;
			}
		}
	}

	.login-button {
		display: flex;
		align-items: center;
		gap: 1ch;

		background-color: transparent;
		border: 2px solid #fefefe;
		border-radius: 1rem;
		text-align: center;
		padding: 1ch;

		img {
			inline-size: 1.5rem;
			border-radius: 50%;
			border: 2px solid #fefefe;
		}

		&:hover {
			background: linear-gradient(90deg, #5779ff, #57a5ff);
			cursor: pointer;
		}
	}
</style>
