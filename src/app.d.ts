import type { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: ReturnType<typeof createSupabaseServerClient>;
			getSession: () => Promise<
				ReturnType<ReturnType<typeof createSupabaseServerClient>['auth']['getSession']>
			>['data']['session'];
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
