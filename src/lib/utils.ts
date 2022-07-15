import { browser } from "$app/env"
import { writable, type Writable } from "svelte/store"

export const external = {
	target: "_blank",
	rel: "noopener noreferrer",
}

export const localStore = <T>(key: string, initialValue: T): Writable<T> => {
	const localValue = browser ? JSON.parse(localStorage.getItem(key)!) : initialValue
	const store = writable<T>(browser && localValue ? JSON.parse(localValue) : initialValue)
	
	store.subscribe((v) => {
		if (browser) localStorage.setItem(key, JSON.stringify(v))
	})

	return store
}
