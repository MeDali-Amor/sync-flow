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
import { registerSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { useRegister } from "./api/useRegister";

const defaultValues = {
    email: "",
    password: "",
    name: "",
    passwordConfirm: "",
};

const RegisterForm = () => {
    const { isPending, error, isSuccess, mutate } = useRegister();
    const form = useForm<zod.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues,
    });
    const onSubmit = (values: zod.infer<typeof registerSchema>) => {
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
                    name="name"
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

                <Button
                    className="w-full rounded-sm text-sm font-semibold"
                    size={"lg"}
                >
                    Create an account
                </Button>
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

export default RegisterForm;
