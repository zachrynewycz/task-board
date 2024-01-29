"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

interface IData {
    title: string;
    boardId: string;
}

export const createList = async (data: IData): Promise<any> => {
    const { orgId, userId } = auth();
    const { title, boardId } = data;

    if (!orgId || !userId) {
        return { error: "Unauthorized" };
    }

    const lists = await db.list.findMany({
        where: {
            boardId,
        },
    });

    try {
        await db.list.create({
            data: {
                title,
                order: lists.length,
                boardId,
            },
        });
    } catch (error) {
        console.error(error);
    }
    revalidatePath(`/board/${boardId}`);
};
