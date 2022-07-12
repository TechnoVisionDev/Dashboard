import { MongoClient } from "mongodb"

export const mongo = (
	await new MongoClient(import.meta.env.VITE_MONGODB_URI, {
		retryWrites: true,
		w: "majority",
	}).connect()
)
	.db("TechnoBot")
	.collection("users")
