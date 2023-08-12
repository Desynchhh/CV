import { loadTranslations } from "$lib/translations";
import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ url, data }) => {
    const { pathname } = url;

    const initLocale = data?.initLocale;

    await loadTranslations(initLocale, pathname); // keep this just before the `return`

    return {};
};

