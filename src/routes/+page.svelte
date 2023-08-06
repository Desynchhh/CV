<script lang="ts">
    import { t } from '$lib/translations';
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    // export let data;
    
    let ready = false;
    
    onMount(() => {
        ready = true;
    });
</script>

<svelte:head>
<title>Mikkel Larsen CV - {$t("common.home")}</title>
</svelte:head>

<main>
    <div class="daisy-carousel w-full">
        <div class="daisy-carousel-item relative w-full">
            <img src="/banner_image.jpg" class="w-full" alt="banner" />
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
    
    <div class="daisy-hero min-h-screen bg-base-200">
        <div class="daisy-hero-content flex-col lg:flex-row-reverse">
            <img src="/profile_photo.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="Mikkel"/>
            <div>
                <h1 class="text-5xl font-bold">Box Office News!</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="daisy-btn daisy-btn-primary">Get Started</button>
            </div>
        </div>
    </div>
    
</main>
