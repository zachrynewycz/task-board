import Link from "next/link";

import localFont from "next/font/local";
import { cn } from "@/utils/utils";
import { Poppins } from "next/font/google";

import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "500",
});

const h1Font = localFont({
    src: "../../public/fonts/font.woff2",
});

function LandingPage() {
    return (
        <>
            <div className={cn("text-2xl md:text-6xl text-neutral-900", h1Font.className)}>
                <div className="text-sm md:text-lg mt-32 mb-5 bg-yellow-100 w-fit mx-auto rounded-full px-4 py-3 text-yellow-700 flex items-center gap-2 shadow-md">
                    <Medal />
                    NO 1. TASK MANAGMENT
                </div>
                <div>Task Board helps teams</div>
                <div className="bg-gradient-to-r from-[#2af598] to-[#009efd] rounded-lg px-7 py-3 w-fit mx-auto text-white mt-7">
                    work foward.
                </div>
            </div>

            <p className={cn("max-w-2xl mx-auto text-sm md:text-xl my-5 text-neutral-500", poppins.className)}>
                Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the
                way your team works is unique
            </p>

            <Button size={"lg"}>
                <Link href="/sign-up">Get Task Board for Free</Link>
            </Button>
        </>
    );
}

export default LandingPage;
