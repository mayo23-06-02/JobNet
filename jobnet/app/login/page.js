"use client";
import LoginHome from "@/components/UI/Authentication/Login/LoginHome";
import ImageAuth from "@/components/UI/Reusable/Authentication/ImageAuth";
import ImageAuthSM from "@/components/UI/Reusable/Authentication/ImageAuthSM";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
    const router = useRouter();

    return (
        <main className="">
            <div className="max-w-[1280px] mx-auto ">
                <div className="lg:grid  grid-cols-5 gap-12">
                    <div className="lg:hidden">
                        <ImageAuthSM className='' />
                    </div>
                    <div className="col-span-2 lg:translate-y-0 -translate-y-16 flex items-center justify-center lg:pt-20 ">
                        <LoginHome />
                    </div>
                    <div className="col-span-3 flex justify-center">
                        <div className="hidden lg:inline">
                            <ImageAuth />
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
