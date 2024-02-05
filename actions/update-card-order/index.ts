"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { InputType } from "./types";
import { revalidatePath } from "next/cache";

export const updateCardOrder = async (data: InputType): Promise<any> => {
    const { orgId, userId } = auth();

    if (!orgId || !userId) {
        return { error: "Unauthorized" };
    }

    const { boardId, cards: list } = data;

    try {
        list.forEach(async (card) => {
            await db.card.update({
                where: {
                    id: card.id,
                },
                data: {
                    order: card.order,
                    listId: card.listId,
                },
            });
        });
    } catch (error) {
        console.error(error);
    }
    revalidatePath(`board/${boardId}`);
};
