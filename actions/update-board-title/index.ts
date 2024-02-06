"use server";
import { db } from "@/lib/db";
import { InputType } from "./types";
import { auth } from "@clerk/nextjs";

export const updateBoardTitle = async (data: InputType): Promise<any> => {
    const { orgId, userId } = auth();

    if (!orgId || !userId) {
        return { error: "Unauthorized" };
    }

    const { boardId, title } = data;

    try {
        await db.board.update({
            where: {
                id: boardId,
            },
            data: {
                title,
            },
        });
    } catch (error) {
        console.error(error);
    }
};
