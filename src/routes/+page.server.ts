// import type { PublicGithubRepo } from "$lib/types";
// import type { PageServerLoad } from "./$types";

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

