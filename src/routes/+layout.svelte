<script lang="ts">
	import { Navbar } from '$lib/internal';
</script>

<Navbar />
<main>
	<slot />
</main>

<style>
	:global(body) {
		margin: 0;
	}
</style>
