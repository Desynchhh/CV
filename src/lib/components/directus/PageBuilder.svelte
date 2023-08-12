<script lang="ts">
    import type { Block } from "$lib/types/directus";
    import { BlockCarousel } from "./BlockCarousel";
    import { BlockContentWithImage } from "./BlockContentWithImage";
    import { BlockEduExperience } from "./BlockEduExperience";

    export let blocks: Block[] = [];

    const blockMap = {
        block_content_with_image: BlockContentWithImage,
        block_eduexperience: BlockEduExperience,
        carousel: BlockCarousel,
    };
</script>

{#each blocks as block}
    {#if Object.keys(blockMap).includes(block.collection)}
        <svelte:component this={blockMap[block.collection]} data={block.item} />
    {/if}
{/each}
