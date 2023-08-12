import i18n from "sveltekit-i18n";
import type { Config } from "sveltekit-i18n";

const config: Config = {
    loaders: [
        {
            locale: "da-DK",
            key: "common",
            loader: async () =>
                (await import("./dictionaries/da.json")).default,
        },
        {
            locale: "en-US",
            key: "common",
            loader: async () =>
                (await import("./dictionaries/en.json")).default,
        },
    ],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(
    config
);

