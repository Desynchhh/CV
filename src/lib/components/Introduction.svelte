<script lang="ts">
    import { t } from '$lib/translations';
</script>

<div class="py-8 bg-base-200">
    <div class="daisy-carousel w-full">
        <div id="intro-background" class="daisy-hero min-h-fit daisy-carousel-item bg-base-200">
            <div class="daisy-hero-content flex-col lg:flex-row-reverse">
                <img src="/home/profile_photo.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="Mikkel"/>
                <div>
                    <h1 class="text-5xl font-bold">{$t("common.whoAmI")}</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
        <div id="intro-life" class="daisy-carousel-item w-full bg-base-200">
            <div></div>
        </div> 
        <div id="intro-item3" class="daisy-carousel-item w-full bg-base-200">
            <div></div>
        </div> 
        <div id="intro-item4" class="daisy-carousel-item w-full bg-base-200">
            <div></div>
        </div>
    </div> 
    <div class="flex justify-center w-full py-2 gap-2 bg-base-200">
        <a href="#intro-background" class="daisy-btn daisy-btn-xs daisy-btn-accent">1</a> 
        <a href="#intro-life" class="daisy-btn daisy-btn-xs daisy-btn-accent">2</a> 
        <a href="#intro-item3" class="daisy-btn daisy-btn-xs daisy-btn-accent">3</a> 
        <a href="#intro-item4" class="daisy-btn daisy-btn-xs daisy-btn-accent">4</a>
    </div>
</div>