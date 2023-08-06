<script lang="ts">
    import "../app.css";
    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'
    let currentTheme = "dark";
    
    // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
    onMount(() => {
        themeChange(false)
        // 👆 false parameter is required for svelte
    })
</script>
<div class="m-4 inline-grid grid-cols-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 m-1 col-start-1 row-start-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 m-1 col-start-2 row-start-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
    <input data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" type="checkbox" class="daisy-toggle bg-transparent col-start-1 row-start-1 col-span-2 [--b1:219_14%_80%] checked:[--b1:215_28%_17%]" checked />
</div>


<slot></slot>