<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit"

	export const load: Load = ({ error, status }) => ({
		props: {
			error, status
		}
	})
</script>

<script lang="ts">
	export let error: Error
	export let status: number
</script>

<main>
	<h1>{status}</h1>
	<pre>{error.message}</pre>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-block-size: calc(100% - 60px);

		h1 {
			font-size: 4rem
		}

		pre {
			font-size: 1.5rem;
		}
	}
</style>