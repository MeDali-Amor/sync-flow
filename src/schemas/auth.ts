import * as zod from "zod";

export const loginSchema = zod.object({
    email: zod
        .string()
        .min(1, {
            message: "Email is required",
        })
        .email(),
    password: zod.string().min(1, {
        message: "Password is required",
    }),
});
export const registerSchema = zod
    .object({
        email: zod
            .string()
            .min(1, {
                message: "Email is required",
            })
            .email(),
        password: zod.string().min(6, {
            message: "Password should be at least 6 characters long",
        }),
        passwordConfirm: zod.string().min(6, {
            message: "Password should be at least 6 characters long",
        }),
        name: zod.string().min(1, {
            message: "name is required",
        }),
    })
    .superRefine(({ password, passwordConfirm }, ctx) => {
        if (password !== passwordConfirm) {
            ctx.addIssue({
                code: "custom",
                message: "Passwords do not match ",
                path: ["passwordConfirm"],
            });
        }
    });
