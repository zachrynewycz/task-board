"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export const createBoard = async (data: any): Promise<any> => {
    const { userId, orgId } = auth();

    if (!userId || !orgId) {
        return { error: "Unauthorized" };
    }

    const { image, title } = data;
    const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUsername] = image.split("|");

    if (!imageId || !imageThumbUrl || !imageFullUrl || !imageUsername || !imageLinkHTML) {
        return {
            error: "Missing fields. Failed to create board.",
        };
    }

    try {
        const board = await db.board.create({
            data: {
                title,
                orgId,
                imageId,
                imageThumbUrl,
                imageFullUrl,
                imageLinkHTML,
                imageUsername,
            },
        });
    } catch (error) {
        console.error(error);
    }
    revalidatePath(`/organizations/${orgId}`);
};
