import { Hono } from "hono";

export const accountsApi = new Hono().get("/", (c) => {
  return c.json({ accounts: [] });
});
