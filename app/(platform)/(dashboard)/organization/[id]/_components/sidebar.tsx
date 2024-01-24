import { Separator } from "@/components/ui/separator";
import SidebarInfo from "./sidebar-info";
import SidebarItems from "./sidebar-items";

const Sidebar = () => {
    return (
        <>
            <SidebarInfo />
            <Separator className="my-4" />
            <SidebarItems />
        </>
    );
};

export default Sidebar;
