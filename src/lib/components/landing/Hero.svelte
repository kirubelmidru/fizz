<script>
import inView from "$lib/scripts/inView.js";

import { fade } from 'svelte/transition';

let animated = false;
</script>
<div
    use:inView={{ threshold: 0.5 }}
    on:enter={() => animated = true } class="relative h-screen p-24">
    {#if animated}
	<div transition:fade={{ delay: 250, duration: 300 }} class="flex flex-col">
	    <h1 class="text-center text-[300px] italic">fizz</h1>
	</div>
    {/if}
</div>

