"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { InputType } from "./types";
import { revalidatePath } from "next/cache";

export const createCard = async (data: InputType): Promise<any> => {
    const { orgId, userId } = auth();

    if (!orgId || !userId) {
        return { error: "Unathorized" };
    }
    const { title, boardId, listId } = data;

    try {
        await db.list.findFirst({
            where: {
                id: listId,
                board: { orgId },
            },
        });
    } catch (error) {
        console.error(error);
    }

    const lastCard = await db.card.findFirst({
        where: { listId },
        orderBy: { order: "desc" },
        select: { order: true },
    });

    const newOrder = lastCard ? lastCard.order + 1 : 1;

    try {
        await db.card.create({
            data: {
                title,
                listId,
                description: "",
                order: newOrder,
            },
        });
    } catch (error) {
        console.error(error);
    }
    revalidatePath(`board/${boardId}`);
};
