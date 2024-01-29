"use client";
import { useParams } from "next/navigation";

import { useAction } from "@/hooks/use-action";
import { deleteBoard } from "@/actions/delete-board";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal, Trash } from "lucide-react";

const BoardOptions = () => {
    const { id }: { id: string } = useParams();

    const { execute } = useAction(deleteBoard);

    const onDelete = () => execute(id);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <MoreHorizontal />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer" onClick={onDelete}>
                    <Trash size={16} className="mr-2" />
                    Delete board
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default BoardOptions;
