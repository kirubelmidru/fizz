<script>
import Sidebar from "$lib/components/navbar/Sidebar.svelte";


let show = false;
</script>

<nav class="absolute top-0 w-full z-50">
    <div class="px-12 py-6 flex flex-row justify-between">
	<a href="/">
	    <h2 class="text-6xl italic">fizz</h2>
	</a>
	<button type="button" on:click={() => (show = !show)}>
	    <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 16H25M0 9H25" stroke="#000000" stroke-width="3" stroke-linecap="sharp" stroke-linejoin="round"/>
	    </svg>
	</button>
    </div>
</nav>
{#if show}
    <Sidebar on:click={()=> show = !show}/>
{/if}
