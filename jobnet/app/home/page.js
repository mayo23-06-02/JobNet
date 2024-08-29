"use client";
import MainHeader from "@/components/Header/MainHeader";
import HomeMain from "@/components/UI/Home/Categories/HomeMain";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div>
            <MainHeader />
            <main className="">
                <div className="max-w-[1280px] mx-auto ">
                    <div>
                        <HomeMain />
                    </div>
                </div>
            </main>
        </div>

    );
}
