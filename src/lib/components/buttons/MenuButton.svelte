<script>
export let name;
export let link;
</script>

<div class="flex justify-end">
    <a class="text-white text-6xl" href={link}>
	<h3 class="duration-200 delay-100 hover:text-yellow hover:-translate-x-12 ease-in-out">{name}</h3>
    </a>
</div>
