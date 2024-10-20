"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import FormError from "@/features/shared/FormError";
import FormSuccess from "@/features/shared/FormSuccess";

const defaultValues = {
    email: "",
    password: "",
    name: "",
    passwordConfirm: "",
};

const RegisterForm = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>(undefined);
    const [success, setSuccess] = useState<string | undefined>(undefined);
    const form = useForm<zod.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues,
    });
    const onSubmit = (values: zod.infer<typeof RegisterSchema>) => {
        setError(undefined);
        setSuccess(undefined);
        startTransition(() => {
            console.log(values);
            // register(values).then((data) => {
            //     setSuccess(data.success);
            //     if (data.success) {
            //         form.reset();
            //     }
            //     setError(data.error);
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
                    name="username"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    {...field}
                                    placeholder="Enter your name"
                                ></Input>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    {...field}
                                    placeholder="Enter your email"
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
                <FormField
                    control={form.control}
                    name="passwordConfirm"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    type="password"
                                    {...field}
                                    placeholder="Confirm password"
                                ></Input>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {error && <FormError message={error} />}
                {success && <FormSuccess message={success} />}
                <Button
                    className="w-full rounded-sm text-sm font-semibold"
                    size={"lg"}
                >
                    Create an account
                </Button>
            </form>
        </Form>
    );
};

export default RegisterForm;
