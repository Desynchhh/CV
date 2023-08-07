<script lang="ts">
    import "../app.css";
    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'
    import { NavigationBar, Footer } from "$lib/RootLayoutComponents";
    
    onMount(() => {
        themeChange(false)
        // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        //     anchor.addEventListener('click', function (e) {
        //         e.preventDefault();
        //         if(anchor) {

        //             document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({
        //                 behavior: 'smooth'
        //             });
        //         }
        //     });
        // });
    });
</script>

<main class="container my-0 mx-auto">
    
    <NavigationBar />
    <slot />
    <Footer />
</main>
