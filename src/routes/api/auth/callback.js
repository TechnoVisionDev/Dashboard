import { user } from "$lib/discord"
import { dev } from "$app/env"

export const get = async ({ url }) => {
	const code = url.searchParams.get("code") ?? "";

	const data = new URLSearchParams({
		client_id: import.meta.env.VITE_DISCORD_OAUTH_CLIENT_ID,
		client_secret: import.meta.env.VITE_DISCORD_OAUTH_SECRET,
		code: code,
		grant_type: "authorization_code",
		redirect_uri: url.protocol + "//" + url.host + "/api/auth/callback",
	});

	const token = await fetch(
		"https://discord.com/api/v10/oauth2/token",
		{
			method: "POST",
			body: data,
			headers: new Headers({
				"Content-Type": "application/x-www-form-urlencoded",
			}),
		}
	).then((r) => r.json());

	user.set(token.access_token);

	// redirect user to front page with cookies set
	const access_token_expires_in = new Date(Date.now() + token.expires_in); // 10 minutes
	const refresh_token_expires_in = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
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
			Location: "/servers",
		},
		status: 302,
	}
}