import { hc } from "hono/client";
import { HonoAppType } from "@/app/api/[[...route]]/route";

export const app = hc<HonoAppType>(process.env.NEXT_PUBLIC_APP_URL!);