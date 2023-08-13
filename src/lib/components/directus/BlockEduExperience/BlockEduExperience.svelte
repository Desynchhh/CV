<script lang="ts">
    import type { EduExperience } from "$lib/types/directus";
    import { t, locale } from "$lib/translations";

    export let data: EduExperience;

    const src = `http://cv.directus.budgeze.dk/assets/${data.image}`;
    const { start_date, end_date } = data;
    const { main_title, title, content } = data.translations[0];

    let startDate = formatDate(start_date);
    let endDate: string = $t("current");
    if (end_date !== "" && end_date) {
        endDate = formatDate(end_date);
    }

    function formatDate(date: string) {
        const [year, month, _day] = date.split("-");
        // TODO: Dynamic locale
        const monthName = Intl.DateTimeFormat($locale, {
            month: "short",
        }).format(new Date(date));
        return `${year} ${monthName}`;
    }
    const styles = "underline text-secondary";
</script>

<div class="daisy-hero min-h-fit py-6 bg-base-200">
    <div
        class="daisy-hero-content flex-col gap-12 {data.style === 'image-text'
            ? 'lg:flex-row-reverse'
            : 'lg:flex-row'}"
    >
        <img {src} alt="" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
            {#if main_title}
                <h2 class="text-5xl font-bold mb-2">{main_title}</h2>
            {/if}
            <h3 class="text-3xl font-bold inline-block">{title}</h3>
            <small class="inline ml-3"><i>{startDate} - {endDate}</i></small>
            {@html content}
        </div>
    </div>
</div>

<style>
</style>
