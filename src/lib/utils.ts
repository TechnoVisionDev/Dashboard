import { browser } from "$app/env"
import { writable, type Writable } from "svelte/store"

export const external = {
	target: "_blank",
	rel: "noopener noreferrer",
}

export const localStore = <T>(key: string, initial: T): Writable<T> => {
	const persist = browser ? localStorage.getItem(key) : null
	console.log(persist)
	const data: T = persist ? JSON.parse(persist ?? null) : initial

	//if sub is broken, sets value to current local storage value
	const store: Writable<T> = writable(data, () =>
		store.subscribe((value) => {
			if (browser) localStorage.setItem(key, JSON.stringify(value))
		})
	)

	return store
}
