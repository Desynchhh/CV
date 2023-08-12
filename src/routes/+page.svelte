<script lang="ts">
    import { t } from "$lib/translations";
    import { Banner } from "$lib/components";
    import { PageBuilder } from "$lib/components/directus";

    export let data;
    $: ({ page } = data);
</script>

<svelte:head>
    <title>Mikkel Larsen CV - {$t("common.home")}</title>
</svelte:head>

<main>
    <Banner />
    <PageBuilder blocks={page.blocks} />
    <div class="temp flex flex-col justify-center items-center min-h-16">
        <h2 class="text-xl text-center m-16">Nothing to see here...</h2>
    </div>
</main>
