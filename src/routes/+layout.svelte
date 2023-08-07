<script lang="ts">
    import "../app.css";
    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'
    import { NavigationBar, Footer } from "$lib/RootLayoutComponents";
    
    onMount(() => {
        themeChange(false);
    });
</script>

<main class="container my-0 mx-auto">
    
    <NavigationBar />
    <slot />
    <Footer />
</main>
