"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const deleteBoard = async (boardId: string): Promise<any> => {
    const { orgId } = auth();

    if (!orgId) {
        throw new Error("Unauthorized");
    }

    try {
        await db.board.delete({ where: { id: boardId } });
    } catch (error) {
        console.error(error);
    }
    redirect(`/organization/${orgId}`);
};
