import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

function Navbar() {
    return (
        <nav className="bg-white py-3 shadow-sm px-10 lg:px-0">
            <div className="flex justify-between items-center md:mx-auto mx-0 max-w-screen-2xl">
                <div className="flex gap-5">
                    <Logo />

                    <Button size="sm" className="mr-5 bg-blue-700">
                        Create
                    </Button>
                </div>

                <div className="flex items-center">
                    <OrganizationSwitcher
                        appearance={{
                            elements: {
                                rootBox: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                },
                            },
                        }}
                        hidePersonal
                    />

                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
