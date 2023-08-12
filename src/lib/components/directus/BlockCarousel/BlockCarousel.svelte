<script lang="ts">
    import PageBuilder from "../PageBuilder.svelte";

    import type { Carousel } from "$lib/types/directus";

    export let data: Carousel;
</script>

<div class="daisy-carousel w-full">
    {#each data.blocks as block}
        <div id={block.id} class="daisy-carousel-item w-full">
            <PageBuilder blocks={[block]} />
        </div>
    {/each}
</div>
<div class="flex justify-center w-full py-2 gap-2">
    {#each data.blocks as block, i}
        <a href={`#${block.id}`} class="daisy-btn daisy-btn-xs">{i + 1}</a>
    {/each}
</div>
