<script lang="ts" context="module">
	import { get as getStore } from "svelte/store"
	import { user } from "$lib/data"

	import type { Load } from "./__types/__layout"

	export const load: Load = ({ url }) => {
		return !getStore(user) && url.pathname !== "/"
			? {
					redirect: "/",
					status: 302,
			  }
			: {}
	}
</script>

<script lang="ts">
	import { Navbar } from "$layout"
	import "../app.css"
</script>

<Navbar />

<main>
	<slot />
</main>
