import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal } from "lucide-react";

const ListHeader = ({ title }: { title: string }) => {
    return (
        <div className="font-semibold px-3 mb-3 flex items-center justify-between">
            <h1>{title}</h1>

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <MoreHorizontal size={18} />
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem>Delete list</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default ListHeader;
