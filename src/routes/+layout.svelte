<script>
import "../app.css";

import Splash from "$lib/components/utils/Splash.svelte";
import Footer from "$lib/components/Footer.svelte";
import Navbar from "$lib/components/navbar/Navbar.svelte";

import { onMount } from 'svelte';
import { fade } from 'svelte/transition';
import { quadInOut } from 'svelte/easing';

let loading = false;
</script>

<Navbar/>
<Splash/>
<main class="flex flex-col text-center">
    <slot/>
</main>
<Footer/>
