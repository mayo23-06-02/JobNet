"use client";
import RegisterHome from "@/components/UI/Authentication/Register/RegisterHome";
import ImageRegister from "@/components/UI/Reusable/Authentication/ImageRegister";
import ImageRegisterSM from "@/components/UI/Reusable/Authentication/ImageRegisterSM";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();

    return (
        <main className="">
            <div className="max-w-[1280px] mx-auto ">
                <div className="lg:grid  grid-cols-5 gap-12">
                    <div className="lg:hidden">
                        <ImageRegisterSM className='' />
                    </div>
                    <div className="col-span-2 lg:translate-y-0 -translate-y-24 flex items-center justify-center pt-12 ">
                        <RegisterHome />
                    </div>
                    <div className="col-span-3 flex justify-center">
                        <div className="hidden lg:inline">
                            <ImageRegister />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
