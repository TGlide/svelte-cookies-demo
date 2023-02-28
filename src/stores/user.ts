import { page } from '$app/stores';
import { derived } from 'svelte/store';

export const user = derived(page, ($page) => {
	const user = $page.data.user;
	return user;
});
