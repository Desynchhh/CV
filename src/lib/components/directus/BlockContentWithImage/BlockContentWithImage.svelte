<script lang="ts">
    import type { ContentWithImage } from "$lib/types/directus";

    export let data: ContentWithImage;

    const src = `http://cv.directus.budgeze.dk/assets/${data.image}`;
    const { title, content } = data.translations[0];
</script>

<div class="daisy-hero min-h-fit py-6 bg-base-200">
    <div
        class="daisy-hero-content flex-col gap-12 {data.style === 'image-text'
            ? 'lg:flex-row-reverse'
            : 'lg:flex-row'}"
    >
        <img {src} alt="" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
            <h1 class="text-5xl font-bold">{title}</h1>
            <span>{@html content}</span>
        </div>
    </div>
</div>
