"use client";
import RegisterHome from "@/components/UI/Authentication/Register/RegisterHome";
import RegisterServiceProviders from "@/components/UI/Authentication/SeviceProviders.js/RegisterServiceProviders";
import ImageRegister from "@/components/UI/Reusable/Authentication/ImageRegister";
import ImageServiceProvider from "@/components/UI/Reusable/Authentication/ImageServiceProvider";
import { useRouter } from "next/navigation";

export default function ServiceProviders() {
    const router = useRouter();

    return (
        <main className="">
        <div className="max-w-[1280px] mx-auto ">
            <div className="lg:grid  grid-cols-5 gap-12">
                <div className="lg:hidden">
                </div>
                <div className="col-span-2 lg:translate-y-0 flex items-center justify-center pt-12 ">
                    <RegisterServiceProviders />
                </div>
                <div className="col-span-3 flex justify-center">
                    <div className="hidden lg:inline">
                        <ImageServiceProvider />
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}
