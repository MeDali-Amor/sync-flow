import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ReactNode } from "react";

const AuthLaout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-neutral-100 min-h-screen flex items-center">
            <div className="mx-auto max-w-screen-2xl">
                {/* <nav className="flex items-center justify-between py-2 px-4">
                    <Image
                        className="flex items-center gap-2"
                        src={"/logo.svg"}
                        alt="logo"
                        width={120}
                        height={40}
                    />
                    <Button variant={"secondary"}>Login</Button>
                </nav> */}
                <div className="w-full flex justify-center px-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLaout;
