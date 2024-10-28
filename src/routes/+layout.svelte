<script lang="ts">
	import { user } from '$lib/stores.svelte';
	import '../app.css';
	import Header from '../components/Header.svelte';

	let { children } = $props();
</script>

<Header userLogged={user.logged} />
{@render children()}
