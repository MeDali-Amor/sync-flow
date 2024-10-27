import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema, registerSchema } from "@/schemas/auth";
import { createAdminClient } from "../../../lib/appwrite";
import { ID } from "node-appwrite";
import { deleteCookie, setCookie } from "hono/cookie";
import { sessionMiddleware } from "@/lib/seesion-middleware";

export const AUTH_COOKIE = "sync-flow-cookie";

const app = new Hono()
    .post("/login", zValidator("json", loginSchema), async (c) => {
        const { email, password } = c.req.valid("json");
        const { account } = await createAdminClient();
        const session = await account.createEmailPasswordSession(
            email,
            password
        );
        setCookie(c, AUTH_COOKIE, session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
            maxAge: 60 * 60 * 24 * 30,
        });

        return c.json({ success: true });
    })
    .post("/register", zValidator("json", registerSchema), async (c) => {
        const { email, password, name } = c.req.valid("json");
        const { account } = await createAdminClient();
        const newUser = await account.create(
            ID.unique(),
            email,
            password,
            name
        );
        const session = await account.createEmailPasswordSession(
            email,
            password
        );
        setCookie(c, AUTH_COOKIE, session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
            maxAge: 60 * 60 * 24 * 30,
        });
        return c.json({ data: newUser });
    })
    .post("logout", sessionMiddleware, async (c) => {
        deleteCookie(c, AUTH_COOKIE);
        return c.json({ success: true });
    });
export default app;
