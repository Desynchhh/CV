<script lang="ts">
    import type { EduExperience } from "$lib/types/directus";
    import { t } from "$lib/translations";

    export let data: EduExperience;

    const src = `http://0.0.0.0:8055/assets/${data.image}`;
    const { start_date, end_date } = data;
    const { main_title, title, content } = data.translations[0];

    let startDate = formatDate(start_date);
    let endDate: string = end_date ? formatDate(end_date) : $t("current");

    function formatDate(date: string) {
        const [year, month, _day] = date.split("-");
        // TODO: Dynamic locale
        const monthName = Intl.DateTimeFormat("en", { month: "short" }).format(
            new Date(month)
        );
        return `${year} ${monthName}`;
    }
</script>

<div class="daisy-hero min-h-fit py-6 bg-base-200">
    <div
        class="daisy-hero-content flex-col {data.style === 'image-text'
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
            <span>{@html content}</span>
        </div>
    </div>
</div>
