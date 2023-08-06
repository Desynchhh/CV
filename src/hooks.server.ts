import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
    // Potentially necessary code for page switching, but unsure for now.
    // try {
    //     const formData = await event.request.formData();
    //     if (formData.has("switchLang")) {
    //         const newLocale = formData.get("switchLang")?.toString();
    //         console.log(`setting lang to ${newLocale}`);
    //         event.locals.initLocale = newLocale ?? "en";
    //     }
    // } catch (error) {}
    const response = await resolve(event);
    return response;
}) satisfies Handle;

