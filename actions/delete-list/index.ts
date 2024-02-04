"use server";

import { db } from "@/lib/db";
import { List } from "@/types/types";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export const deleteList = async (data: List): Promise<any> => {
    const { orgId, userId } = auth();

    if (!orgId || !userId) {
        return { error: "Unauthorized" };
    }

    try {
        await db.list.delete({
            where: {
                id: data.id,
            },
        });
    } catch (error) {
        console.error(error);
    }
    revalidatePath(`/board/${data.boardId}`);
};
