<script>
import MenuButton from "$lib/components/buttons/MenuButton.svelte";
import { fade } from "svelte/transition";
import { cubicInOut } from "svelte/easing";

let show = false;

let tabs = [
    {name: "Our Company", link: ""},
    {name: "Brands", link: ""},
    {name: "Store", link: ""}
];
</script>

<navbar class="p-8 px-16 flex flex-row justify-between">
    <a href="/">
	<h2 class="text-6xl italic">fizz</h2>
    </a>
    <div class="flex">
	<button type="button" on:click={() => (show = !show)}>
	    <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 16H25M0 9H25" stroke="#000000" stroke-width="3" stroke-linecap="sharp" stroke-linejoin="round"/>
	    </svg>
	</button>
    </div>
</navbar>

{#if show}
    <div  transition:fade={{ delay: 100, duration: 300, easing: cubicInOut }} class="fixed w-full h-full bg-chinese-black z-50" role="dialog" aria-modal="true">
	<div class="p-8 px-16 flex flex-row justify-between">
	    <h2 class="text-6xl text-white italic">fizz</h2>
	    <div class="flex">
		<button type="button" class="" on:click={() => (show = !show)}>
		    <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#ffffff" stroke-width="3" stroke-linecap="sharp" stroke-linejoin="round"/>
		    </svg>
		</button>
	    </div>
	</div>

	<div class="flex justify-end py-48 px-20">
	    <div class="flex flex-col gap-8 text-end">
		{#each tabs as tab}
		    <MenuButton name={tab.name} link={tab.link}/>
		{/each}
	    </div>
	</div>
    </div>
{/if}
