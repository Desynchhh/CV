<script lang="ts">
    import type { Block } from "$lib/types/directus";
    import { BlockCarousel } from "./BlockCarousel";
    import { BlockContentWithImage } from "./BlockContentWithImage";
    import { BlockEduExperience } from "./BlockEduExperience";
    import { BlockContentText } from "./BlockContentText";

    export let blocks: Block[] = [];

    const blockMap = {
        block_content_with_image: BlockContentWithImage,
        block_content_text: BlockContentText,
        block_eduexperience: BlockEduExperience,
        carousel: BlockCarousel,
    };
</script>

{#each blocks as block}
    {#if Object.keys(blockMap).includes(block.collection)}
        <svelte:component this={blockMap[block.collection]} data={block.item} />
    {/if}
{/each}
