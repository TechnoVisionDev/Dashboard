<script>
	import '../app.css';
    import Navbar from '$lib/components/navbar.svelte';
</script>

<header>
    <Navbar />
</header>
<main>
	<slot />
</main>