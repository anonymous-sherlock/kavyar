import { Hono } from "hono";
import { handle } from "hono/vercel";
import { accountsApi } from "./accounts";


export const runtime = "edge";

const app = new Hono().basePath("/api");
const routes = app.route("/accounts", accountsApi);

export const GET = handle(app);
export const POST = handle(app);

export type HonoAppType = typeof routes;
