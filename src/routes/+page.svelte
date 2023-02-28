<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { user } from '$stores/user';
	import '$styles/index.css';

	$: userToSet = !$user ? 'admin' : null;

	async function setUserWithAPI() {
		await fetch('/api/session', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ user: userToSet })
		});

		await invalidateAll();
	}
</script>

<div class="flex flex-col items-center gap-4">
	<!-- Form actions work even without JS! -->
	<form method="post" action="?/setUser" use:enhance>
		<input type="hidden" name="user" value={userToSet} />
		<button class="btn w-full" type="submit">{$user ? 'Delete user' : 'Set user'}</button>
	</form>
	<button class="btn w-full" on:click={setUserWithAPI}>
		{$user ? 'Delete user' : 'Set user'} with API route
	</button>
	<a class="btn w-full text-center" href="/other">Navigate to other route</a>
</div>

<style lang="postcss">
	form {
		display: contents;
	}
</style>
