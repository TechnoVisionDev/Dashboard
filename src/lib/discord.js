import { browser } from "$app/env"
import { MongoClient } from "mongodb"
import { writable as localStore } from "svelte-local-storage-store"
import { get } from "svelte/store"

export const user = localStore("user", undefined);

export const discord = async (token = get(user)?.accessToken) => {
	await fetch(`https://discord.com/api/v10${href}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}).then((r) => r.json())
}

export const mongo = (
	await new MongoClient(import.meta.env.VITE_MONGODB_URI, {
		retryWrites: true,
		w: "majority",
	}).connect()
)
.db("TechnoBot")
.collection("users")

user.subscribe(async ($user) => {
	if ($user && browser) {
		await mongo.findOneAndUpdate({ _id: $user._id }, { $mod: $user }, { upsert: true })
	}
})