<script lang="ts">
    import { t } from '$lib/translations';
    import { Banner, Introduction, EduExperience } from '$lib/components';

    export let data;
    $: ({content} = data);

    console.log(data);
</script>

<svelte:head>
<title>Mikkel Larsen CV - {$t("common.home")}</title>
</svelte:head>

<main>
    <Banner />
    <section class="tester">
        {#each content.data as introSection}
        <div id="intro-background" class="daisy-hero min-h-fit">
            <div class="daisy-hero-content flex-col lg:flex-row-reverse">
                <img src={`http://0.0.0.0:8055/assets/${introSection.image}`} class="max-w-sm rounded-lg shadow-2xl" alt="Mikkel"/>
                <div>
                    <h1 class="text-5xl font-bold">{introSection.translations[0].title}</h1>
                    {@html introSection.translations[0].content}
                </div>
            </div>
        </div>
        {/each}
    </section>
    <Introduction />
    <EduExperience />
    <!-- <div class="bg-base-200">
        <div class="grid grid-cols-2 bg-base-200 gap-2 items-center max-w-xs px-8">
            <p>Java</p>
            <progress class="grid- daisy-progress daisy-progress-info w-56" value="0" max="100"></progress>
            <p>.NET</p>
            <progress class="daisy-progress daisy-progress-info w-56" value="10" max="100"></progress>
            <p>Rust</p>
            <progress class="daisy-progress daisy-progress-info w-56" value="40" max="100"></progress>
            <p>Python</p>
            <progress class="daisy-progress daisy-progress-info w-56" value="70" max="100"></progress>
            <p>JS/TS</p>
            <progress class="daisy-progress daisy-progress-info w-56" value="100" max="100"></progress>
        </div>
    </div> -->
</main>
