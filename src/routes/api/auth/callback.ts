import { discord, user, type User } from "$lib/data"
import type { APIUser, RESTPostOAuth2AccessTokenResult } from "discord-api-types/v10"
import type { RequestHandler } from "./__types/callback"

export const get: RequestHandler = async ({ url }) => {
	const code = url.searchParams.get("code") ?? ""

	const data = new URLSearchParams({
		client_id: import.meta.env.VITE_DISCORD_OAUTH_CLIENT_ID,
		client_secret: import.meta.env.VITE_DISCORD_OAUTH_SECRET,
		code: code,
		grant_type: "authorization_code",
		redirect_uri: url.protocol + "//" + url.host + "/api/auth/callback",
	})

	const token: RESTPostOAuth2AccessTokenResult = await fetch(
		"https://discord.com/api/v10/oauth2/token",
		{
			method: "POST",
			body: data,
			headers: new Headers({
				"Content-Type": "application/x-www-form-urlencoded",
			}),
		}
	).then((r) => r.json())

	const userData: User = {
		accessToken: token.access_token,
		refreshToken: token.refresh_token,
		discordUser: (await discord<APIUser>("/users/@me", token.access_token))!,
	}
	user.set(userData)

	return {
		headers: {
			Location: "/servers",
		},
		status: 302,
	}
}
