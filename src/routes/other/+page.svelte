<script lang="ts">
	import { user } from '$stores/user';
</script>

<a class="btn" href="/">Navigate to home route</a>
<p>User in client (other route): {$user || 'Not authenticated'}</p>
