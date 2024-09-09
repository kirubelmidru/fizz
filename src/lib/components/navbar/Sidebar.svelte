<script>
import MenuButton from "$lib/components/buttons/MenuButton.svelte";
import { fade } from "svelte/transition";
import { cubicInOut } from "svelte/easing";

let tabs = [
    {name: "Our Company", link: "#company"},
    {name: "Brands", link: "#brands"},
    {name: "Recommendations", link: "#recommendations"}
];
</script>
<div transition:fade={{ delay: 100, duration: 300, easing: cubicInOut }} 
    class="fixed w-full h-full bg-chinese-black z-50">
    <div class="px-12 py-6 flex flex-row justify-between">
	<a href="/">
	    <h2 class="text-6xl text-white italic">fizz</h2>
	</a>
	<div class="flex">
	    <button type="button" on:click>
		<svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		    <path d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" 
			stroke="#ffffff" 
			stroke-width="3" 
			stroke-linecap="sharp" 
			stroke-linejoin="round"/>
		</svg>
	    </button>
	</div>
    </div>
    <div class="py-48 px-20 flex flex-row justify-end">
	<div class="flex flex-col gap-8 text-end">
	{#each tabs as tab}
	    <MenuButton name={tab.name} link={tab.link}/>
	{/each}
	</div>
    </div>
</div>
