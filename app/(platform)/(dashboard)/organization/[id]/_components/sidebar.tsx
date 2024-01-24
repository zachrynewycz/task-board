import { Separator } from "@/components/ui/separator";
import Info from "./info";
import SidebarItems from "./sidebar-items";

const Sidebar = () => {
    return (
        <>
            <Info />
            <Separator className="my-4" />
            <SidebarItems />
        </>
    );
};

export default Sidebar;
