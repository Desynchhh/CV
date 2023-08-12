<script lang="ts">
    import PageBuilder from "../PageBuilder.svelte";

    import type { Carousel } from "$lib/types/directus";

    export let data: Carousel;
</script>

<div class="daisy-carousel w-full">
    {#each data.blocks as block}
        <div id={block.item.id} class="daisy-carousel-item w-full">
            <PageBuilder blocks={[block]} />
        </div>
    {/each}
</div>
<div class="flex justify-center w-full pt-2 pb-4 gap-2 bg-base-200">
    {#each data.blocks as block, i}
        <a
            href={`#${block.item.id}`}
            class="daisy-btn daisy-btn-xs bg-accent hover:bg-accent-focus text-black hover:text-grey-200"
            >{i + 1}</a
        >
    {/each}
</div>
