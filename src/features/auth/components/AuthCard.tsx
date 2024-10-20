"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React, { ReactNode } from "react";
import SocialLogin from "./SocialLogin";

interface AuthCardProps {
    title: string;
    children: ReactNode;
    backLinkText: string;
    backLinklabel: string;
    backLinkhref: string;
    showSocial?: boolean;
}

const AuthCard = ({
    title,
    children,
    backLinkText,
    backLinkhref,
    backLinklabel,
    showSocial,
}: AuthCardProps) => {
    return (
        <div className="w-screen rounded-sm  flex items-center justify-center sm:w-[400px] bg-white">
            <Card className=" h-full shadow-none sm:shadow-md w-[400px] border-none rounded-sm">
                <CardHeader>
                    <CardTitle className="text-blue-800 text-base font-semibold flex items-center justify-center ">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent>{children}</CardContent>

                {showSocial && (
                    <>
                        <CardFooter className="pb-3">
                            <div className="w-full flex items-center gap-3">
                                <div className="flex-1  h-[1px] border-slate-200 border-[1px] border-dashed"></div>
                                <div className="text-xs text-slate-400">OR</div>
                                <div className="flex-1  h-[1px] border-slate-200 border-dashed border-[1px]"></div>
                            </div>
                        </CardFooter>
                        <CardFooter>
                            <SocialLogin />
                        </CardFooter>
                    </>
                )}
                <CardFooter className=" justify-center  pb-4">
                    <div className="text-xs font-semibold text-black">
                        {backLinkText}{" "}
                    </div>
                    <Button
                        size={"sm"}
                        className="text-xs decoration-transparent text-indigo-600"
                        variant={"link"}
                    >
                        <Link href={backLinkhref}>{backLinklabel}</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default AuthCard;
