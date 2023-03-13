<script lang="ts">
	import { Input, InputWrapper, UnstyledButton } from '@svelteuidev/core';
	import type { TextInputProps } from '@svelteuidev/core';
	import { EyeNone, EyeOpen } from 'radix-icons-svelte';

	interface $$Props extends TextInputProps {}

	export let value = '';
	export let error = '' as boolean | string | undefined;
	$: invalid = !!error;

	let showPassword = false;
	$: type = showPassword ? 'text' : 'password';
</script>

<InputWrapper label="Password" {...$$props}>
	<Input {invalid} {type} {...$$props} bind:value>
		<UnstyledButton
			slot="rightSection"
			type="button"
			on:click={() => (showPassword = !showPassword)}
		>
			{#if showPassword}
				<EyeOpen />
			{:else}
				<EyeNone />
			{/if}
		</UnstyledButton>
	</Input>
</InputWrapper>
