<script lang="ts">
    import type { Skills } from "$lib/types/directus";
    import BlockSkill from "./BlockSkill.svelte";

    export let data: Skills;
</script>

<div class="bg-base-200 py-4">
    <div class="flex flex-row justify-center">
        <h2 class="text-5xl">{data.translations[0].title}</h2>
    </div>
    <div class="flex flex-row flex-wrap justify-center gap-8 py-4 bg-base-200">
        {#each data.skill as skill}
            <BlockSkill {skill} />
        {/each}
    </div>
</div>
