<script lang="ts">
	import { IconLink } from "$lib"
	import { user } from "$lib/data"
	import { faDiscord, faPatreon } from "@fortawesome/free-brands-svg-icons"
	import { faBook, faHome, faPlus } from "@fortawesome/free-solid-svg-icons"
	import Fa from "svelte-fa"
</script>

<nav>
	<ul class="links">
		<li>
			<a href="/" class="home">
				<span class="home-icon"><Fa icon={faHome} scale={1.2} /></span>
				<span class="home-label">TechnoBot</span>
			</a>
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

	{#if $user}
		<a class="login-button" href="/api/auth/signout">
			<img
				src="https://cdn.discordapp.com/avatars/{$user.discordUser.id}/{$user.discordUser
					.avatar}.png"
				alt="{$user.discordUser.username}'s avatar"
			/>
			Logout
		</a>
	{:else}
		<a class="login-button" href="/api/auth">Login</a>
	{/if}
</nav>

<style lang="scss">
	nav {
		background: linear-gradient(90deg, #5779ff, #57a5ff);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: 1rem;

		z-index: 1000;
		max-block-size: calc(100% - 15px);
	}

	.links {
		display: flex;
		align-items: center;
		gap: 1rem;

		li {
			display: inline-block;
			font-size: 0.85rem;

			.home {
				font-size: 1.1rem;
				font-weight: 500;
				padding-inline-end: 2rem;

				.home-icon {
					display: none;
				}

				@media (width < 800px) {
					.home-label {
						display: none;
					}

					.home-icon {
						display: inline-block;
					}
				}
			}
		}
	}

	.login-button {
		display: flex;
		align-items: center;
		gap: 1ch;

		font-weight: 300;
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
