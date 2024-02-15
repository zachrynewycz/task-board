"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";

export const deleteCard = async (data: any): Promise<any> => {
    const { userId, orgId } = auth();

    if (!userId || !orgId) {
        return {
            error: "Unauthorized",
        };
    }

    const { id, boardId } = data;
    let card;

    try {
        card = await db.card.delete({
            where: {
                id,
                list: {
                    board: {
                        orgId,
                    },
                },
            },
        });
    } catch (error) {
        return {
            error: "Failed to delete.",
        };
    }
    revalidatePath(`/board/${boardId}`);
    return { data: card };
};
