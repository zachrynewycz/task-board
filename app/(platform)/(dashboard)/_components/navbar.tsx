import Logo from "@/components/Logo";
import CreateBoardPopover from "@/components/forms/create-board-popover";

import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

function Navbar() {
    return (
        <nav className="bg-white py-3 shadow-sm px-10 2xl:px-0">
            <div className="flex justify-between items-center md:mx-auto mx-0 max-w-screen-2xl">
                <div className="flex gap-7">
                    <Logo />

                    <CreateBoardPopover side="bottom">
                        <Button size="sm" className="mr-5 bg-blue-700">
                            Create
                        </Button>
                    </CreateBoardPopover>
                </div>

                <div className="flex items-center gap-2">
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
