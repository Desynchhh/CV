<script lang="ts">
    import { t } from '$lib/translations';
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    
    let ready = false;
    
    onMount(() => {
        ready = true;
    });
</script>

<div class="daisy-carousel w-full">
    <div class="daisy-carousel-item relative w-full">
        <img src="/home/banner_image.jpg" class="w-full" alt="banner" />
        <div class="absolute transform -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2">
            <h1 class="text-8xl text-white drop-shadow-md text-center">
                {#if ready}
                <span class="block" in:fly={{delay: 100, y: 50, duration: 1000}}>{$t("common.bannerTitle1")}</span>
                <span class="text-5xl block" in:fly={{delay: 800, y: 25, duration: 1000}}>{$t("common.bannerTitle2")}</span>
                {/if}
            </h1>
        </div>
    </div>
</div>