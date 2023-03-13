<script lang="ts">
	import { Button, Container } from '@svelteuidev/core';
	import { EmailInput, PasswordInput, Seo } from '$lib/internal';

	let email = '';
	let password = '';

	$: emailError = (email.length > 0 && !email.match(/.*@.+\..+/)) as boolean;
</script>

<Seo title="Log In" />

<Container>
	<h1>Log In</h1>

	<form action="">
		<EmailInput error={emailError} placeholder="Your email address" bind:value={email} required />
		<PasswordInput placeholder="Your password" bind:value={password} required />
		<Button>Log In</Button>
	</form>
</Container>

<style>
	h1 {
		text-align: center;
	}

	form > :global(* + *) {
		margin-top: 1rem;
	}
</style>
