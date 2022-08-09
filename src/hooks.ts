import { getProviderToken, handleAuth } from "@supabase/auth-helpers-sveltekit"
import type { GetSession, Handle } from "@sveltejs/kit"
import { sequence } from "@sveltejs/kit/hooks"

export const handle: Handle = sequence(...handleAuth())

export const getSession: GetSession = async (event) => {
	try {
		const discordToken = getProviderToken(event.request)

		return {
			discordToken,
			...event.locals
		}
	} catch {
		return event.locals
	}
}