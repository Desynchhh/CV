<script lang="ts">
    import type { Block } from "$lib/types/directus";
    import { BlockCarousel } from "./BlockCarousel";
    import { BlockContentWithImage } from "./BlockContentWithImage";

    export let blocks: Block[] = [];

    const blockMap = {
        block_content_with_image: BlockContentWithImage,
        carousel: BlockCarousel,
    };
</script>

{#each blocks as block}
    <svelte:component this={blockMap[block.collection]} data={block.item} />
{/each}
