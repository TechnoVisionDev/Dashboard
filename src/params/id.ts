import type { ParamMatcher } from "@sveltejs/kit"

export const match: ParamMatcher = (param) =>
	/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(param)