import { useAction } from "@/hooks/use-action";
import { deleteList } from "@/actions/delete-list";

import { List } from "@/types/types";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import { updateListTitle } from "@/actions/update-list-title";

const ListHeader = ({ data }: { data: List }) => {
    const { execute: executeDeleteList } = useAction(deleteList);
    const { execute: executeUpdateTitle } = useAction(updateListTitle);

    const onDeleteList = () => executeDeleteList({ boardId: data.boardId, listId: data.id });

    const onEditTitle = () => {
        const prompt = window.prompt("Enter new list title");
        if (prompt) executeUpdateTitle({ title: prompt, listId: data.id, boardId: data.boardId });
    };

    return (
        <div className="font-semibold px-3 mb-3 flex items-center justify-between">
            <h1>{data.title}</h1>

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <MoreHorizontal size={18} />
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem onClick={onEditTitle}>
                        <Pencil className="mr-2" size={16} />
                        Edit list title
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={onDeleteList}>
                        <Trash className="mr-2" size={16} />
                        Delete list
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default ListHeader;
