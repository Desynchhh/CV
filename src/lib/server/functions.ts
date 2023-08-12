import type { Page } from "$lib/types/directus";

export function filterPageLang(page: Page, locale: string) {
    const filterLangCode = (t: { languages_code: string }) =>
        t.languages_code === locale;

    page.banner.translations = page.banner.translations.filter(filterLangCode);

    page.blocks.forEach((block, index) => {
        if ("translations" in block.item) {
            block.item.translations =
                block.item.translations.filter(filterLangCode);
            return;
        }
        if ("blocks" in block.item) {
            block.item.blocks.forEach((carouselBlock, carouselIndex) => {
                carouselBlock.item.translations =
                    carouselBlock.item.translations.filter(filterLangCode);
                return;
            });
            return;
        }
    });
    return page;
}

