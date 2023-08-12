<script lang="ts">
    import { t } from "$lib/translations";
    import { BlockBanner } from "$lib/components";
    import { PageBuilder } from "$lib/components/directus";

    export let data;
    $: ({ page } = data);
</script>

<svelte:head>
    <title>Mikkel Larsen CV - {$t("common.home")}</title>
</svelte:head>

<main>
    <BlockBanner data={data.page.banner} />
    <PageBuilder blocks={page.blocks} />
    <!-- <pre>
        {JSON.stringify(data, null, 4)}
    </pre> -->
</main>
