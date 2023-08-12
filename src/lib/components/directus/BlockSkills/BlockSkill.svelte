<script lang="ts">
    import type { Skill } from "$lib/types/directus";

    export let skill: Skill;
</script>

<div
    class="daisy-card daisy-card-bordered border-{skill.color} w-[30%] bg-neutral text-neutral-content"
>
    <div class="daisy-card-body items-center text-center">
        <h2 class="daisy-card-title">{skill.translations[0].title}</h2>
        <div class="flex flex-row flex-wrap justify-center gap-2">
            {#each skill.skills as s}
                <div
                    class="daisy-badge daisy-badge-lg daisy-badge-{skill.color}"
                >
                    {s.skill}
                </div>
            {/each}
        </div>
    </div>
</div>
