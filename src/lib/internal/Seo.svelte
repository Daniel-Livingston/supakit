<script lang="ts">
	import { Seo } from '@svelteuidev/core';
	import type { SeoProps } from '@svelteuidev/core';

	interface $$Props extends SeoProps {
		titleTemplate?: string;
	}

	export let titleTemplate = '%t% | Supakit';
</script>

<Seo {titleTemplate} {...$$props} />
