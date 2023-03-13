<script lang="ts">
	import { Input, InputWrapper } from '@svelteuidev/core';
	import type { TextInputProps } from '@svelteuidev/core';
	import { EnvelopeClosed } from 'radix-icons-svelte';

	interface $$Props extends TextInputProps {}

	export let value = '';
	export let error = '' as boolean | string | undefined;
	$: invalid = !!error;
</script>

<InputWrapper label="Email" {...$$props}>
	<Input icon={EnvelopeClosed} {invalid} type="email" {...$$props} bind:value />
</InputWrapper>
