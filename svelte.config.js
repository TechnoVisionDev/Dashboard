import adapter from "@sveltejs/adapter-vercel"
import preprocess from "svelte-preprocess"
import autoprefixer from "autoprefixer"
import cssnano from "cssnano"
import mediaMinMax from "postcss-media-minmax"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: {
			plugins: [autoprefixer(), cssnano(), mediaMinMax()],
		},
	}),
	kit: {
		adapter: adapter({ split: true }),
		alias: {
			$layout: "src/layout",
		},
	},
}

export default config
