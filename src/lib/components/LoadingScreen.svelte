<script>
import { fade } from 'svelte/transition';
import { quadInOut } from 'svelte/easing';
</script>

<div class="w-screen h-screen flex overflow-hidden bg-chinese-black z-[999]" out:fade>
    <div class="wave w-screen h-screen"/>
</div>

<style>

.wave {
    position: relative;
    opacity: 0;
    border: #FFF 20px solid;
    border-radius: 100%;
    -moz-animation-name: ripple 2s linear infinite 2s;
    -webkit-animation: ripple 2s linear infinite 2s;
    animation: ripple 2s linear infinite 2s;
}

@keyframes ripple {
    from {
	opacity: 1;
	transform: scale(0);
    }
    to {
	transform: scale(0.2);
	border-width: 1px;
	opacity: 0;
    }
}
</style>
