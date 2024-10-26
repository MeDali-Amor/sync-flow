"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormError from "@/features/shared/FormError";
import FormSuccess from "@/features/shared/FormSuccess";
import { loginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { useLogin } from "./api/useLogin";

const LoginForm = () => {
    const { mutate, error, isSuccess, isPending } = useLogin();

    const form = useForm<zod.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: zod.infer<typeof loginSchema>) => {
        mutate({ json: values });
    };

    return (
        <Form {...form}>
            <form
                className="flex flex-col items-center space-y-4"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    {...field}
                                    placeholder="email@email.com"
                                ></Input>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    type="password"
                                    {...field}
                                    placeholder="Enter password"
                                ></Input>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* {authError && <FormError message={authError} />} */}
                <Button
                    className="w-full rounded-sm text-sm font-semibold"
                    size={"lg"}
                >
                    Continue
                </Button>{" "}
                <div className="w-full">
                    {error && <FormError message={error.message} />}
                    {isSuccess && (
                        <FormSuccess message={"Logged in successfully"} />
                    )}
                </div>
            </form>
        </Form>
    );
};

export default LoginForm;
