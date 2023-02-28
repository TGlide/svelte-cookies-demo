import type { Actions } from '@sveltejs/kit';
import { setSession } from '$lib/session.server';

export const actions: Actions = {
	async setUser({ request, cookies }) {
		const formData = await request.formData();
		const user = formData.get('user');

		if (typeof user === 'string' || user === null) {
			setSession(cookies, user);
		}
	}
};
