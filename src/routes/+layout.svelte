<script lang="ts">
    import "../app.css";
    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'
    import { locales, locale } from "$lib/translations";

    onMount(() => {
        themeChange(false)
    });
</script>


<div class="daisy-navbar light:bg-primary bg-primary text-primary-content">
    <div class="flex-1">
        <a href="/" class="daisy-btn daisy-btn-ghost normal-case text-xl">Mikkel Larsen</a>
    </div>
    <div class="flex-none">
        <ul class="daisy-menu daisy-menu-horizontal px-1">
            <li><a href="/">Link</a></li>
            <li>
                <details>
                    <summary>
                        Parent
                    </summary>
                    <ul class="p-2 bg-base-100">
                        <li><a href="/">Link 1</a></li>
                        <li><a href="/">Link 2</a></li>
                    </ul>
                </details>
            </li>
            <li>
                <div class="inline-grid grid-cols-2 gap-0 bg-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 m-1 col-start-1 row-start-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 m-1 col-start-2 row-start-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <input data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" type="checkbox" class="daisy-toggle bg-transparent col-start-1 row-start-1 col-span-2 [--b1:219_14%_80%] checked:[--b1:215_28%_17%]" checked />
                </div>
            </li>
            <li class="justify-center items-center">
                <form method="POST" action="/?/switchLang" class="m-0 p-0">
                    <select name="switchLang" class="daisy-select daisy-select-info w-full max-w-xs daisy-select-sm" on:change={({ currentTarget }) => currentTarget.form?.submit()}>
                        {#each $locales as l}
                            <option value={l} selected={l === $locale}>{l}</option>
                        {/each}
                    </select>
                </form>
            </li>
        </ul>
    </div>
</div>

<slot />