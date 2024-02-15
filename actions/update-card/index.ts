"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";

export const updateCard = async (data: any): Promise<any> => {
    const { userId, orgId } = auth();

    if (!userId || !orgId) {
        return {
            error: "Unauthorized",
        };
    }

    const { id, boardId, ...values } = data;
    let card;

    try {
        card = await db.card.update({
            where: {
                id,
                list: {
                    board: {
                        orgId,
                    },
                },
            },
            data: {
                ...values,
            },
        });
    } catch (error) {
        return {
            error: "Failed to update.",
        };
    }

    revalidatePath(`/board/${boardId}`);
    return { data: card };
};
