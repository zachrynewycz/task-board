import { cn } from "@/utils/utils";
import localFont from "next/font/local";

const h1Font = localFont({
    src: "../public/fonts/font.woff2",
});

const Logo = () => {
    return (
        <div className="hidden sm:flex items-center">
            <img className="w-5 mr-2" src="/Logo.png" alt="logo" />
            <h1 className={cn("text-neutral-700 text-lg mt-1", h1Font.className)}>Task Board</h1>
        </div>
    );
};

export default Logo;
