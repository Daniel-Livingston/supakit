<script lang="ts">
	import { Container } from '@svelteuidev/core';
	import { Seo } from '$lib/internal';

	export let data;
	$: ({ session } = data);
</script>

<Seo title="Home" />

<Container>
	<h1>Home</h1>
	<div style="text-align:center">
		{#if session}
			<p>Welcome, {session.user.email}!</p>
		{:else}
			<p>You are not logged in!</p>
		{/if}
	</div>
</Container>

<style>
	h1 {
		text-align: center;
	}
</style>
