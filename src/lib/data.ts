import type { APIUser } from "discord-api-types/v10"
import { localStore } from "$lib/utils"
import { get } from "svelte/store"

export type User = {
	accessToken: string
	refreshToken: string
	discordUser: APIUser
}

export const user = localStore<User | undefined>("user", undefined)

export const discord = async <T = any>(href: string, token = get(user)?.accessToken): Promise<T | undefined> => {
	return token ? await fetch(`https://discord.com/api/v10${href}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}).then((r) => r.json()) : undefined
}