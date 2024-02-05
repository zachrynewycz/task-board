import { Separator } from "@/components/ui/separator";
import SidebarInfo from "./sidebar-info";
import SidebarOptions from "./sidebar-options";

const Sidebar = () => {
    return (
        <>
            <SidebarInfo />
            <Separator className="my-4" />
            <SidebarOptions />
        </>
    );
};

export default Sidebar;
