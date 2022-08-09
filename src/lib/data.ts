import { createSupabaseClient } from "@supabase/auth-helpers-sveltekit"
import { Constants, type DiscordUser, USER } from "@biscuitland/api-types"
import { derived } from "svelte/store"
import { session } from "$app/stores"

export const { supabaseClient: supabase } = createSupabaseClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
)

export const discord = async <T>(session: App.Session, route: string) => {
	const path = Constants.baseEndpoints.BASE_URL + route

	return await fetch(path.endsWith("/") ? path.slice(0, -1) : path, {
		headers: {
			Authorization: `Bearer ${ session.discordToken }`
		}
	}).then(r => r.json()) as T
}

export const user = derived(session, async $session => discord<DiscordUser>($session, USER()))
