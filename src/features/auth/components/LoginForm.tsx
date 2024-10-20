"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { LoginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import FormError from "@/features/shared/FormError";
import FormSuccess from "@/features/shared/FormSuccess";

const LoginForm = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>(undefined);
    const [success, setSuccess] = useState<string | undefined>(undefined);
    const form = useForm<zod.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const onSubmit = (values: zod.infer<typeof LoginSchema>) => {
        setError(undefined);
        setSuccess(undefined);
        startTransition(() => {
            console.log(values);
            // login(values).then((data) => {
            //     setSuccess(data?.success);
            //     setError(data?.error);
            //     // console.log(data);
            // });
        });
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
                {error && <FormError message={error} />}
                {success && <FormSuccess message={success} />}
                <Button
                    className="w-full rounded-sm text-sm font-semibold"
                    size={"lg"}
                >
                    Continue
                </Button>
            </form>
        </Form>
    );
};

export default LoginForm;
