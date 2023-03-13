<script lang="ts">
	import { Button, Container } from '@svelteuidev/core';
	import { EmailInput, PasswordInput, Seo } from '$lib/internal';

	let email = '';
	let password = '';

	$: emailError = (email.length > 0 && !email.match(/.*@.+\..+/)) as boolean;
	$: passwordError =
		password.length > 0 && password.length < 8
			? 'Passwords must be at least 8 characters long.'
			: undefined;
</script>

<Seo title="Sign Up" />

<Container>
	<h1>Sign Up</h1>

	<form action="">
		<EmailInput error={emailError} placeholder="Your email address" bind:value={email} required />
		<PasswordInput
			error={passwordError}
			placeholder="Your password"
			bind:value={password}
			required
		/>
		<Button>Sign Up</Button>
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
