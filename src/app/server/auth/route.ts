import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema, registerSchema } from "@/schemas/auth";

const app = new Hono()
    .post("/login", zValidator("json", loginSchema), (c) => {
        const { email, password } = c.req.valid("json");
        setTimeout(() => {
            console.log(email, password);
        }, 3000);
        return c.json({ success: "ok" });
    })
    .post("/register", zValidator("json", registerSchema), (c) => {
        const { email, password, name, passwordConfirm } = c.req.valid("json");
        setTimeout(() => {
            console.log(name, email, password === passwordConfirm);
        }, 3000);
        return c.json({ success: "ok" });
    });

export default app;
