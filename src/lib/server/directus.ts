import { createDirectus, staticToken, rest } from "@directus/sdk";
import "dotenv/config";

export const directus = createDirectus(process.env.DIRECTUS_URL)
    .with(rest())
    .with(staticToken(process.env.DIRECTUS_API_KEY));

