<script lang="ts">
	import { external as externalProps } from "$lib/utils"
	import type { IconDefinition } from "@fortawesome/free-brands-svg-icons"
	import Fa from "svelte-fa"

	export let icon: IconDefinition
	export let href: string
	export let external = true
</script>

<a {href} {...external ? externalProps : {}} {...$$restProps}>
	<Fa scale={1.1} {icon} />

	<div class="label">
		<slot />
	</div>
</a>

<style lang="scss">
	a {
		display: flex;
		align-items: center;
		gap: 1ch;
		font-weight: 500;

		@media (width < 800px) {
			.label {
				display: none;
			}
		}
	}
</style>
