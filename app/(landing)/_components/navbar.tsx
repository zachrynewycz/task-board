import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Navbar() {
    return (
        <nav className="bg-white py-3 shadow-sm">
            <div className="flex justify-between items-center md:mx-auto mx-0 max-w-screen-2xl">
                <Logo />

                <div>
                    <Button variant="outline" className="mr-5">
                        <Link href="/sign-in">Login</Link>
                    </Button>
                    <Button>
                        <Link href="/sign-up">Get Started</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
