import Link from "next/link";
import OrgList from "./org-list";
import { Plus } from "lucide-react";

const Sidebar = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                <span className="font-semibold">Workspaces</span>

                <Link href="/select-org">
                    <Plus size={20} />
                </Link>
            </div>

            <OrgList />
        </>
    );
};

export default Sidebar;
