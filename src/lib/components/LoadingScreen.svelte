<script>
import { fade } from 'svelte/transition';
import { quadInOut } from 'svelte/easing';
</script>

<div class="w-screen h-screen flex bg-chinese-black z-[999]" out:fade>
    <div class="inner-wave w-full h-full"/>
    <div class="wave w-full h-full"/>
</div>

<style>
.inner-wave {
    position: absolute;
    transform: scale(0);
    border: #FFF 5px solid;
    border-radius: 100%;
    -moz-animation-name: inner-ripple 2s infinite;
    -webkit-animation: inner-ripple 2s infinite;
    animation: inner-ripple 2s infinite;
}
.wave {
    position: absolute;
    transform: scale(0);
    border-width:#FFF 7px solid;
    border-radius: 100%;
    -moz-animation-name: ripple 2s infinite;
    -webkit-animation: ripple 2s infinite;
    animation: ripple 2s infinite;
}


@keyframes ripple {
    0% {
	opacity: 1;
    }
    100% {
	transform: scale(0.3);
	border-width: 1px;
	opacity: 0;
    }
}

@keyframes inner-ripple {
    0% {
	opacity: 1;
    }
    50% {
	opacity: 0;
    }
    100% {
	opacity: 0;
	transform: scale(0.1);
	border-width: 1px;
    }
}

</style>
