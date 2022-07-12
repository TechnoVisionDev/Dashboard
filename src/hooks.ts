import { discord, user } from "$lib/data"
import type { Handle } from "@sveltejs/kit"
import type { APIUser } from "discord-api-types/v10"
import { get as getStore } from "svelte/store"

export const handle: Handle = async ({ event, resolve }) => {
	// returns a discord user if JWT was valid
	let discordUser = await discord<APIUser>("/users/@me", getStore(user)?.accessToken)
	console.log("initial discord call", discordUser)

	if (!discordUser || !discordUser.id) {
		const { accessToken, refreshToken } = await fetch(
			`${event.url.protocol}//${event.url.host}/api/auth/refresh?refresh_token=${
				getStore(user)?.refreshToken
			}`
		).then((r) => r.json())

		discordUser = await discord<APIUser>("/users/@me", accessToken)
		console.log("discord call after refresh", discordUser)

		user.set(
			discordUser && discordUser.id
				? {
						accessToken,
						refreshToken,
						discordUser,
				  }
				: undefined
		)
	}

	return await resolve(event)
}
