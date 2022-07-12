import { dev } from "$app/env"
import type { RESTPostOAuth2RefreshTokenResult } from "discord-api-types/v10"
import type { RequestHandler } from "./__types/refresh"

export const get: RequestHandler = async ({ url }) => {
	const refresh_token = url.searchParams.get("refresh_token") ?? ""

	const token: RESTPostOAuth2RefreshTokenResult = await fetch("https://discord.com/api/v10/oauth2/token", {
		method: "POST",
		body: new URLSearchParams({
			client_id: import.meta.env.VITE_CLIENT_ID,
			client_secret: import.meta.env.VITE_CLIENT_SECRET,
			grant_type: "refresh_token",
			refresh_token,
		}),
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
	}).then((r) => r.json())

	// redirect user to front page with cookies set
	const access_token_expires_in = new Date(Date.now() + token.expires_in) // 10 minutes
	const refresh_token_expires_in = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
	return {
		headers: {
			"Set-Cookie": [
				`access_token=${token.access_token}; Path=/; HttpOnly; SameSite=${
					dev ? "None" : "Strict"
				}; Expires=${access_token_expires_in}}`,
				`refresh_token=${token.refresh_token}; Path=/; HttpOnly; SameSite=${
					dev ? "None" : "Strict"
				}; Expires=${refresh_token_expires_in}`,
			],
		},
		body: {
			accessToken: token.access_token,
			refreshToken: token.refresh_token,
		},
	}
}
