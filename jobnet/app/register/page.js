"use client";
import RegisterHome from "@/components/UI/Authentication/Register/RegisterHome";
import ImageRegister from "@/components/UI/Reusable/Authentication/ImageRegister";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();

    return (
        <main className="">
            <div className="max-w-[1280px] mx-auto ">
                <div className="grid  grid-cols-5 gap-12">
                    <div className="col-span-2 flex items-center justify-center pt-12 ">
                        <RegisterHome />
                    </div>
                    <div className="col-span-3 flex justify-center">
                        <ImageRegister />
                    </div>
                </div>
            </div>
        </main>
    );
}
