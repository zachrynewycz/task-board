"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { InputType } from "./types";
import { revalidatePath } from "next/cache";

export const updateListOrder = async (data: InputType): Promise<any> => {
    const { orgId, userId } = auth();

    if (!orgId || !userId) {
        return { error: "Unauthorized" };
    }

    const { boardId, lists } = data;

    try {
        lists.forEach(async (list) => {
            await db.list.update({
                where: {
                    id: list.id,
                    boardId,
                },
                data: {
                    order: list.order,
                },
            });
        });
    } catch (error) {
        console.error(error);
    }
    revalidatePath(`/board/${boardId}`);
};
