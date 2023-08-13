import { handler } from "./build/handler.js";
import express from "express";
import "dotenv/config";

const app = express();

// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
    res.end('ok');
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

const PORT = 3000;
const HOST = "0.0.0.0";
app.listen(PORT, HOST, () => console.log(`Server listening on http://${HOST}:${PORT}`));