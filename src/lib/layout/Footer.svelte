<script>
    let tabs = [
	{name: "Twitter", link: ""},
	{name: "Instagram", link: ""},
	{name: "Facebook", link: ""}
    ];
</script>

<footer class="p-14 flex justify-between min-h-screen bg-chinese-black">
    <h2 class="text-[300px] -mt-24 text-yellow archia">Carbon</h2>
    <div class="flex flex-col">
	{#each tabs as tab}
	    <a href={tab.link} class="text-xl text-yellow">{tab.name} <i class="-rotate-45 fa-solid fa-arrow-right"></i></a>
	{/each}
    </div>
</footer>
