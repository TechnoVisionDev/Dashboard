export const get = async () => {
	// redirect to '/' with cleared cookies
	return {
		headers: {
			"Set-Cookie": [
				`access_token=deleted; Path=/; Max-Age=-1`,
				`refresh_token=deleted; Path=/; Max-Age=-1`,
			],
			Location: "/",
		},
		status: 302,
	}
}