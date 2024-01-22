import Logo from "@/components/Logo";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "600",
});

const Footer = () => {
    return (
        <footer className="absolute bottom-0 w-full py-5 border-t-neutral-300 border">
            <div className="max-w-screen-2xl mx-auto flex justify-between">
                <Logo />
                <div className={cn("font-bold text-sm md:text-base text-neutral-500 flex gap-5", poppins.className)}>
                    <span>Terms of Serivce</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
