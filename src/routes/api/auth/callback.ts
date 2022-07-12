import type { RequestHandler } from "./__types/callback";

export const get: RequestHandler = async ({ url }) => {
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

	return {
		headers: {
			Location: "/servers",
		},
		status: 302,
	}
}