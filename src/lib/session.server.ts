import type { Cookies } from '@sveltejs/kit';

export function getSession(cookies: Cookies) {
	return cookies.get('user');
}

export function setSession(cookies: Cookies, user: string | null) {
	if (user === null) {
		console.log('deleting user');
		cookies.delete('user', { path: '/' });
	} else {
		console.log('setting user', user);
		cookies.set('user', user, { path: '/' });
	}
}
