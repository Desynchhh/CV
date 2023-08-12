// import type { PublicGithubRepo } from "$lib/types";
import type { PageServerLoad, Actions } from "./$types";
import { directus } from "$lib/server/directus";
import { readItems } from "@directus/sdk";
import type { Page, PageBlock } from "$lib/types/directus";
import { filterPageLang } from "$lib/server/functions";

export const load: PageServerLoad = async ({ locals }) => {
    // try {
    const result = await directus.request(
        readItems("page", {
            filter: {
                name: "home",
            },
            limit: 1,
            fields: [
                {
                    banner: [
                        "animate",
                        "image",
                        {
                            translations: [
                                "languages_code",
                                "sub_title",
                                "title",
                            ],
                        },
                    ],
                },
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
    let page = result[0] as Page;
    page = filterPageLang(page, locals.initLocale);
    // console.log(JSON.stringify(result, null, 4));
    return {
        page: page,
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
    switchLang: async ({ locals, request, cookies }) => {
        try {
            const formData = await request.formData();
            const newLocale = formData.get("switchLang")?.toString() ?? "en-US";
            locals.initLocale = newLocale;
            cookies.set("locale", newLocale, {
                sameSite: true,
                secure: false,
            });
        } catch (error) {
            console.log(error);
        }
        return {};
    },
};

