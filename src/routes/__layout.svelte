<script lang="ts">
	import { Navbar } from "$layout"
	import "../app.scss"
	import { SupaAuthHelper } from "@supabase/auth-helpers-svelte"
	import { session } from "$app/stores"
	import { supabase } from "$lib/data"
</script>

<SupaAuthHelper supabaseClient={supabase} {session}>
	<Navbar />

	<slot />
</SupaAuthHelper>