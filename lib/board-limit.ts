import { MAX_BOARDS } from "@/constants/boards";
import { auth } from "@clerk/nextjs";
import { db } from "./db";

export const getRemainingBoardCount = async () => {
    const { orgId } = auth();

    if (!orgId) {
        return 0;
    }

    const boards = await db.board.findMany({ where: { orgId } });
    return MAX_BOARDS - boards.length;
};
