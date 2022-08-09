<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit"

	export const load: Load = ({ session }) => {
		if (!session.user) {
			return {
				status: 403,
				error: "Please log in to access your dashboard."
			}
		}

		return {}
	}
</script>

<slot></slot>

