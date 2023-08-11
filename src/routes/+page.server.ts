// import type { PublicGithubRepo } from "$lib/types";
import type { PageServerLoad, Actions } from "./$types";
import "dotenv/config";

export const load: PageServerLoad = async ({ fetch, locals }) => {
    // try {
    const API_KEY: string | undefined = process.env.DIRECTUS_API_KEY;
    const filter = JSON.stringify({
        translations: {
            _filter: {
                languages_code: {
                    _eq: locals.initLocale || "en-US",
                },
            },
        },
    });
    console.log(API_KEY);
    const response = await fetch(
        `http://0.0.0.0:8055/items/content_with_image?fields=image,style,translations.title,translations.content&deep=${filter}`,
        {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        }
    );
    const data: {
        data: {
            image: string;
            style: "image-text" | "text-image";
            translations: {
                title: string;
                content: string;
            }[];
        }[];
    } = await response.json();

    return {
        content: data,
    };
    // } catch (error) {
    // console.error(error);
    // }
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

