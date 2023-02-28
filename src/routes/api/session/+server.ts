import { getSession, setSession } from '$lib/session.server';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST = (async ({ cookies, request }) => {
	const data = await request.json();
	const user = data.user;

	if (typeof user === 'string' || user === null) {
		console.log('user', user);
		setSession(cookies, user);
	}

	return json({ ok: true, user: getSession(cookies) });
}) satisfies RequestHandler;
