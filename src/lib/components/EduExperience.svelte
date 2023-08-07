<script lang="ts">
    import { t } from "$lib/translations";
</script>
<div class="py-8 bg-base-200">

    <div class="daisy-carousel w-full">
        
        <div id="education" class="daisy-hero daisy-carousel-item min-h-fit my-8">
            <div class="daisy-hero-content flex-col lg:flex-row">
                <img src="/home/eduexperience/techcollege_building.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="TECHCOLLEGE building" />
                <div>
                    <h2 class="text-5xl font-bold">{$t("common.jobAndEducation")}</h2>
                    <h3 class="text-3xl font-bold inline-block">TECHCOLLEGE</h3><span class="inline ml-3"><i>Aug. 2016 - Dec. 2021</i></span>
                    <p class="py-1">{$t("common.education1.1")}<span class="font-bold">{$t("common.education1.2")}</span>{$t("common.education1.3")}</p>
                    <p class="py-1">{$t("common.education2.1")}</p>
                    <p class="py-1">{$t("common.education3.1")}</p>
                </div>
            </div>
        </div>

        <div id="job-clienti" class="daisy-hero daisy-carousel-item min-h-fit my-8">
            <div class="daisy-hero-content flex-col lg:flex-row">
                <img src="/home/eduexperience/clienti_logo.svg" class="max-w-sm bg-white p-10 rounded-lg shadow-2xl" alt="Clienti logo" />
                <div>
                    <h3 class="text-3xl font-bold inline-block">Clienti</h3><span class="ml-3"><i>Aug. 2021 - Dec. 2022</i></span>
                    <p class="py-1">{$t("common.job-clienti1.1")}</p>
                    <p class="py-1">{$t("common.job-clienti2.1")}</p>
                    <p class="py-1">{$t("common.job-clienti3.1")}</p>
                    <p class="py-1">{$t("common.job-clienti4.1")}<a class="daisy-link-secondary underline" href="https://clienti.dk/">{$t("common.here")}</a></p>
                </div>
            </div>
        </div>

        <div id="job-busysunday" class="daisy-hero daisy-carousel-item min-h-fit my-8">
            <div class="daisy-hero-content flex-col lg:flex-row">
                <img src="/home/eduexperience/busysunday_logo.png" class="max-w-sm bg-white rounded-lg" alt="BusySunday logo" />
                <div>
                    <h3 class="text-3xl font-bold inline-block">BusySunday</h3><span class="ml-3"><i>Mar. 2023 - {$t("common.current")}</i></span>
                    <p class="py-1">{$t("common.job-busysunday1.1")}</p>
                    <p class="py-1">
                        {$t("common.job-busysunday2.1")}
                        <a href="https://en.wikipedia.org/wiki/Online_rich-text_editor" target="_blank" class="daisy-link-secondary">
                            Rich Text Editor
                        </a>
                        {$t("common.job-busysunday2.2")}</p>
                    <p class="py-1">{$t("common.job-busysunday3.1")}</p>
                    <p class="pt-1">{$t("common.job-busysunday4.1")}</p>
                    <p class="pb-1">{$t("common.job-busysunday5.1")}</p>
                    <p class="py-1">{$t("common.job-busysunday6.1")}<a class="daisy-link-secondary underline" href="https://busysunday.dk/">{$t("common.here")}</a></p>
                </div>
            </div>
        </div>

        <div id="job-next" class="daisy-carousel-item w-full">
            <div class="daisy-hero">
                <div class="daisy-hero-content text-center">
                  <div class="max-w-md">
                    <h1 class="text-5xl font-bold">{$t("common.job-you1.1")}</h1>
                    <p class="py-6">{$t("common.job-you2.1")}</p>
                    <p>{$t("common.job-you3.1")}({$t("common.job-you3.2")}: <a class="daisy-link-secondary underline" href="mailto:mikkellarsen939@gmail.com">mikkellarsen939@gmail.com</a>)</p>
                  </div>
                </div>
              </div>
        </div>

    </div>
    
    <div class="flex justify-center w-full py-2 gap-2">
        <a href="#education" class="daisy-btn daisy-btn-xs daisy-btn-accent">1</a> 
        <a href="#job-clienti" class="daisy-btn daisy-btn-xs daisy-btn-accent">2</a> 
        <a href="#job-busysunday" class="daisy-btn daisy-btn-xs daisy-btn-accent">3</a> 
        <a href="#job-next" class="daisy-btn daisy-btn-xs daisy-btn-accent">4</a>
    </div>
</div>

<div class="py-8 bg-base-200">
</div>
