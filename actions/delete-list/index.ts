"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export const deleteList = async (data: { listId: string; boardId: string }): Promise<any> => {
    const { orgId, userId } = auth();

    if (!orgId || !userId) {
        return { error: "Unauthorized" };
    }

    try {
        await db.list.delete({
            where: {
                id: data.listId,
            },
        });
    } catch (error) {
        console.error(error);
    }
    revalidatePath(`/board/${data.boardId}`);
};
