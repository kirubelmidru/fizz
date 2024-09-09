<script>
import inView from "$lib/scripts/inView.js";

import { fade } from 'svelte/transition';

let animated = false;
</script>

<div
    use:inView={{ threshold: 0.5 }}
    on:enter={() => animated = true}>
    {#if animated}
	<p class="text-4xl font-bold" transition:fade={{ delay: 250, duration: 300 }}>Endulge in your happiness</p>
    {/if}
</div>
