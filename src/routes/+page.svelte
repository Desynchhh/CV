<script lang="ts">
    import { t } from '$lib/translations';
    import { Banner, Introduction, EduExperience } from '$lib/components';
</script>

<svelte:head>
<title>Mikkel Larsen CV - {$t("common.home")}</title>
</svelte:head>

<main>
    <Banner />
    <Introduction />
    <EduExperience />
</main>
