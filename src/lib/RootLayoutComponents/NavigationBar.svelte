<script lang="ts">
    import { t, locales, locale } from "$lib/translations";
    import { slide } from "svelte/transition";
    let showAlert = true;
</script>

<div class="daisy-navbar bg-primary text-primary-content">
    <div class="flex-1">
        <a href="/" class="pl-2 normal-case text-xl font-bold">Mikkel Larsen</a>
    </div>
    <div class="flex-none">
        <ul class="daisy-menu daisy-menu-horizontal px-1 z-20">
            <!-- <li>
                <details>
                    <summary>
                        {$t("common.aboutMe")}
                    </summary>
                    <ul class="p-2 bg-base-100">
                        <li><a href="/#intro-background">Mikkel</a></li>
                        <li>
                            <a href="/#education"
                                >{$t("common.jobAndEducation")}</a
                            >
                        </li>
                    </ul>
                </details>
            </li>
            <li><a href="/">{$t("common.projects")}</a></li>
            <span class="divider relative mx-2" /> -->
            <li>
                <label class="daisy-swap daisy-swap-rotate">
                    <!-- this hidden checkbox controls the state -->
                    <input
                        data-toggle-theme="dark,light"
                        data-act-class="ACTIVECLASS_CURRENTLYNOTINUSE"
                        type="checkbox"
                        checked
                    />

                    <!-- sun icon -->
                    <svg
                        class="daisy-swap-on fill-current w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        ><path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                        /></svg
                    >

                    <!-- moon icon -->
                    <svg
                        class="daisy-swap-off fill-current w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        ><path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                        /></svg
                    >
                </label>
            </li>
            <li class="justify-center items-center">
                <form method="POST" action="/?/switchLang" class="m-0 p-0">
                    <select
                        name="switchLang"
                        class="daisy-select w-full max-w-xs daisy-select-sm"
                        on:change={({ currentTarget }) =>
                            currentTarget.form?.submit()}
                    >
                        {#each $locales as l}
                            <option value={l} selected={l === $locale}
                                >{l}</option
                            >
                        {/each}
                    </select>
                </form>
            </li>
        </ul>
    </div>
</div>

{#if showAlert}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="daisy-alert daisy-alert-warning rounded-none"
        on:click={() => (showAlert = false)}
        out:slide={{ duration: 500, axis: "y" }}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            /></svg
        >
        <div>
            <p>{$t("common.alert1")}</p>
            <p>{$t("common.alert2")}</p>
            <p><i>{$t("common.clickToDismiss")}</i></p>
        </div>
    </div>
{/if}

<style>
    .divider::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
        @apply border-x-neutral-content border-solid border-x;
    }
</style>
