<script>
import Background from "$lib/images/bg-back.svg";
import Foreground from "$lib/images/bg-front.svg";
</script>

<div class="absolute top-0 left-0 w-full h-svh bg-white -z-[50]">
    <div class="absolute bottom-0 left-0 w-full h-3/5">
	<img class="absolute bottom-0 left-0 w-full h-full bg-back" alt="" fetchpriority="high" loading="eager" width="1920" height="740" decoding="async" style="color:transparent" src={Background}>
	<img class="absolute bottom-0 left-0 w-full h-full bg-front" alt="" fetchpriority="high" loading="eager" width="1920" height="740" decoding="async" style="color:transparent" src={Foreground}>
    </div>
</div>
