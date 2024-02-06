"use server";
import { db } from "@/lib/db";
import { InputType } from "./types";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export const updateListTitle = async (data: InputType): Promise<any> => {
    const { orgId, userId } = auth();

    if (!orgId || !userId) {
        return { error: "Unauthorized" };
    }

    const { listId, title, boardId } = data;

    try {
        await db.list.update({
            where: {
                id: listId,
            },
            data: {
                title,
            },
        });
    } catch (error) {
        console.error(error);
    }
    revalidatePath(`/board/${boardId}`);
};
