<script>
import Background from "$lib/images/bg-back.svg";
import Foreground from "$lib/images/bg-front.svg";
</script>

<div class="absolute top-0 left-0 w-full h-svh bg-white -z-[50]">
    <div class="absolute bottom-0 left-0 w-full h-3/5">
	<img class="absolute bottom-0 left-0 w-full h-full bg-front" alt="" fetchpriority="high" loading="eager" width="1920" height="740" decoding="async" style="color:transparent" src={Foreground}>
	<img class="absolute bottom-0 left-0 w-full h-full bg-back" alt="" fetchpriority="high" loading="eager" width="1920" height="740" decoding="async" style="color:transparent" src={Background}>
    </div>
</div>

<style>
.bg-front {
    transform-origin: bottom;
    animation: scale-front 3.5s cubic-bezier(0.76,0,0.24,1);
}

.bg-back {
    transform-origin: bottom;
    animation: scale-back 3s cubic-bezier(0.76,0,0.24,1);
}

@keyframes scale-back {
0% {
    transform: scaleY(0);
}
100% {
	transform: scaleY(1);
    }
}

@keyframes scale-front {
0% {
    transform: scaleY(0);
}
20% {
    transform: scaleY(0);
}
100% {
    transform: scaleY(1);
}
}
</style>
