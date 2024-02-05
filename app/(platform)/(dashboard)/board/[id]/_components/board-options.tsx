"use client";

import { useParams } from "next/navigation";

import { useAction } from "@/hooks/use-action";
import { deleteBoard } from "@/actions/delete-board";
import { updateBoardTitle } from "@/actions/update-board-title";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal, Pencil, Trash } from "lucide-react";

const BoardOptions = () => {
    const { id }: { id: string } = useParams();

    const { execute: executeDeleteBoard } = useAction(deleteBoard);
    const { execute: executeUpdateBoardTitle } = useAction(updateBoardTitle);

    const onDelete = () => {
        const confirmDeletion = window.confirm(
            "Are you sure you want to delete this board? THIS ACTION IS IRREVERSIBLE"
        );
        if (confirmDeletion) executeDeleteBoard(id);
    };

    const onEditBoardTitle = () => {
        const prompt = window.prompt("Enter new name for board");
        if (prompt) executeUpdateBoardTitle({ boardId: id, title: prompt });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <MoreHorizontal />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer" onClick={onEditBoardTitle}>
                    <Pencil size={16} className="mr-2" />
                    Edit board title
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={onDelete}>
                    <Trash size={16} className="mr-2" />
                    Delete board
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default BoardOptions;
