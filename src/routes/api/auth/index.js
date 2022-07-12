export const get = async ({ url }) => {
	const redirectUrl = new URL("https://discord.com/api/v10/oauth2/authorize");
	redirectUrl.searchParams.set("response_type", "code");
	redirectUrl.searchParams.set("client_id", import.meta.env.VITE_DISCORD_OAUTH_CLIENT_ID);
	redirectUrl.searchParams.set("scope", "identify email guilds");
	redirectUrl.searchParams.set("redirect_uri", url.protocol + "//" + url.host + "/api/auth/callback");
	redirectUrl.searchParams.set("prompt", "consent");

	return {
		headers: {
			Location: redirectUrl.href,
		},
		status: 302,
	}
}