<script lang="ts">
    import type { Banner } from "$lib/types/directus";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    export let data: Banner;

    let title = data.translations[0].title;
    let sub_title = data.translations[0].sub_title ?? "";
    let src = `http://cv.directus.budgeze.dk/assets/${data.image}`;

    let ready = false;
    onMount(() => {
        ready = true;
    });
</script>

<div class="daisy-carousel w-full">
    <div class="daisy-carousel-item relative w-full">
        <img {src} class="w-full" alt="banner" />
        <div class="absolute transform -translate-y-1/2 right-1/2 top-1/2">
            <h1 class="text-8xl text-white drop-shadow-md text-center">
                {#if title}
                    {#if ready}
                        <span
                            class="block"
                            transition:fly={{
                                delay: 100,
                                y: 50,
                                duration: 1000,
                            }}>{title}</span
                        >
                        <span
                            class="text-5xl block"
                            transition:fly={{
                                delay: 800,
                                y: 25,
                                duration: 1000,
                            }}>{sub_title}</span
                        >
                    {/if}
                {/if}
            </h1>
        </div>
    </div>
</div>
