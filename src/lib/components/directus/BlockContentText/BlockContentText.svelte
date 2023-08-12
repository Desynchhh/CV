<script lang="ts">
    import type { ContentText } from "$lib/types/directus";

    export let data: ContentText;

    const { title, content } = data.translations[0];
    console.log(data);
</script>

<div class="daisy-hero bg-base-200">
    <div class="daisy-hero-content text-center">
        <div class="max-w-md">
            <h2 class="text-5xl font-bold mb-2">{title}</h2>
            {@html content}
        </div>
    </div>
</div>
