import { useAction } from "@/hooks/use-action";
import { deleteList } from "@/actions/delete-list";

import { List } from "@/types/types";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal } from "lucide-react";

const ListHeader = ({ data }: { data: List }) => {
    const { execute } = useAction(deleteList);

    return (
        <div className="font-semibold px-3 mb-3 flex items-center justify-between">
            <h1>{data.title}</h1>

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <MoreHorizontal size={18} />
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => execute(data)}>Delete list</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default ListHeader;
