<script lang="ts">
    import { t } from '$lib/translations';
</script>

<div class="py-8 bg-base-200">
    <div class="daisy-carousel w-full">

        <div id="intro-background" class="daisy-hero min-h-fit daisy-carousel-item">
            <div class="daisy-hero-content flex-col lg:flex-row-reverse">
                <img src="/home/profile_photo.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="Mikkel"/>
                <div>
                    <h1 class="text-5xl font-bold">{$t("common.whoAmI")}</h1>
                    <p class="py-1">{$t("common.intro-background1.1")}</p>
                    <p class="py-1">{$t("common.intro-background2.1")}</p>
                    <p class="py-1">{$t("common.intro-background3.1")}</p>
                    <p class="py-1">{$t("common.intro-background4.1")}</p>
                </div>
            </div>
        </div>

        <div id="intro-life" class="daisy-hero min-h-fit daisy-carousel-item">
            <div class="daisy-hero-content flex-col lg:flex-row-reverse">
                <img src="/home/profile_photo.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="Mikkel"/>
                <div>
                    <h1 class="text-5xl font-bold">{$t("common.family")}</h1>
                    <p class="py-1">{$t("common.intro-life1.1")}</p>
                    <p class="py-1">{$t("common.intro-life2.1")}</p>
                </div>
            </div>
        </div>

        <div id="intro-hobbies" class="daisy-hero min-h-fit daisy-carousel-item">
            <div class="daisy-hero-content flex-col lg:flex-row-reverse">
                <img src="/home/profile_photo.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="Mikkel"/>
                <div>
                    <h1 class="text-5xl font-bold">{$t("common.hobbies")}</h1>
                    <p class="py-1">{$t("common.intro-hobbies1.1")}</p>
                    <p class="py-1">{$t("common.intro-hobbies2.1")}</p>
                    <p class="py-1">{$t("common.intro-hobbies3.1")}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-center w-full py-2 gap-2">
        <a href="#intro-background" class="daisy-btn daisy-btn-xs daisy-btn-accent">1</a> 
        <a href="#intro-life" class="daisy-btn daisy-btn-xs daisy-btn-accent">2</a> 
        <a href="#intro-hobbies" class="daisy-btn daisy-btn-xs daisy-btn-accent">3</a> 
    </div>
</div>
