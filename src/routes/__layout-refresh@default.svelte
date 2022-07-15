<script lang="ts" context="module">
	import { get as getStore } from "svelte/store"
	import { discord, user } from "$lib/data"

	import type { APIUser, RESTPostOAuth2RefreshTokenResult } from "discord-api-types/v10"
	import type { Load } from "./__types/__layout-refresh@default"

	export const refresh = async (refresh_token: string = "") => {
		const token: RESTPostOAuth2RefreshTokenResult = await fetch(
			"https://discord.com/api/v10/oauth2/token",
			{
				method: "POST",
				body: new URLSearchParams({
					client_id: import.meta.env.VITE_DISCORD_OAUTH_CLIENT_ID,
					client_secret: import.meta.env.VITE_DISCORD_OAUTH_SECRET,
					grant_type: "refresh_token",
					refresh_token,
				}),
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}
		).then((r) => r.json())

		return {
			accessToken: token.access_token,
			refreshToken: token.refresh_token,
		}
	}

	export const load: Load = async ({ url }) => {
		const userObj = getStore(user)

		if (!url.pathname.startsWith("/api/auth/") && userObj) {
			const { accessToken, refreshToken } = await refresh(userObj.refreshToken)

			user.set(accessToken ? {
				accessToken,
				refreshToken,
				discordUser: (await discord<APIUser>("/users/@me", accessToken))!,
			} : undefined)
		}

		return {}
	}
</script>

<slot />
