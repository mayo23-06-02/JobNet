"use client";
import LoginHome from "@/components/UI/Authentication/Login/LoginHome";
import ImageAuth from "@/components/UI/Reusable/Authentication/ImageAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
    const router = useRouter();

    return (
        <main className="">
            <div className="max-w-[1280px] mx-auto ">
                <div className="grid  grid-cols-5 gap-12">
                    <div className="col-span-2 flex items-center justify-center pt-12 ">
                        <LoginHome />
                    </div>
                    <div className="col-span-3 flex justify-center">
                        <ImageAuth />
                    </div>
                </div>
            </div>
        </main>
    );
}
