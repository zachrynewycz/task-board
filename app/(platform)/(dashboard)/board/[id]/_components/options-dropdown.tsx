"use client";
import { useAction } from "@/hooks/use-action";
import { deleteBoard } from "@/actions/delete-board";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal, Trash } from "lucide-react";

interface BoardOptionsProps {
    boardId: string;
}

const BoardOptions = ({ boardId }: BoardOptionsProps) => {
    const { execute } = useAction(deleteBoard);

    const onDelete = () => execute(boardId);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <MoreHorizontal />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem onClick={onDelete}>
                    <Trash className="mr-2" />
                    Delete board
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default BoardOptions;
