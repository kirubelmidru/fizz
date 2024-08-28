<script>
import "../app.css";

import Footer from "$lib/layout/Footer.svelte";
import Navbar from "$lib/layout/Navbar.svelte";
import LoadingScreen from '$lib/components/LoadingScreen.svelte';

import { onMount } from 'svelte';
import { fade } from 'svelte/transition';
import { quadInOut } from 'svelte/easing';

let loading = true;

onMount(async () => {
    setTimeout(() => {
	loading = false;
    }, 5000);
});
</script>

{#if loading}
    <LoadingScreen/>
{:else}
    <div in:fade={{ duration: 500, easing: quadInOut }} class="flex flex-col">
	<Navbar/>
	<slot/>
	<Footer/>
    </div>
{/if}

