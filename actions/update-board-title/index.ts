"use server";
import { db } from "@/lib/db";
import { InputType } from "./types";

export const updateBoardTitle = async (data: InputType): Promise<any> => {
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
