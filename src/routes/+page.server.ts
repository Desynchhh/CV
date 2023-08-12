// import type { PublicGithubRepo } from "$lib/types";
import type { PageServerLoad, Actions } from "./$types";
import { directus } from "$lib/server/directus";
import { readItems } from "@directus/sdk";
import type { Page, PageBlock } from "$lib/types/directus";

export const load: PageServerLoad = async ({ locals }) => {
    // try {
    const deepFilter = JSON.stringify({
        collections: {
            item: {
                translations: {
                    _filter: {
                        languages_code: {
                            _eq: "en-US",
                        },
                    },
                },
            },
        },
    });
    const result = await directus.request(
        readItems("page", {
            filter: {
                name: "home",
            },
            limit: 1,
            fields: [
                {
                    blocks: [
                        // "*",
                        "collection",
                        {
                            item: [
                                // "*",
                                "style",
                                "image",
                                "start_date",
                                "end_date",
                                {
                                    translations: [
                                        "languages_code",
                                        "main_title",
                                        "title",
                                        "content",
                                    ],
                                },
                                {
                                    blocks: [
                                        "*",
                                        "carousel_id",
                                        {
                                            item: [
                                                "id",
                                                "style",
                                                "image",
                                                "start_date",
                                                "end_date",
                                                {
                                                    translations: [
                                                        "languages_code",
                                                        "main_title",
                                                        "title",
                                                        "content",
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        })
    );
    console.log(JSON.stringify(result, null, 4));
    return {
        page: result[0] as Page,
    };
};

// export const load = (async ({ fetch }) => {
//     const token = process.env.GITHUB_ACCESS_TOKEN;
//     const res = await fetch(`https://api.github.com/users/Desynchhh/repos`, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
//     const data: PublicGithubRepo[] = await res.json();
//     return {
//         repos: data,
//     };
// }) satisfies PageServerLoad;

export const actions: Actions = {
    switchLang: async ({ locals, request }) => {
        try {
            const formData = await request.formData();
            const newLocale = formData.get("switchLang")?.toString();
            locals.initLocale = newLocale ?? "en";
        } catch (error) {
            console.log(error);
        }
        return {};
    },
};

