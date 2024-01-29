import ListContainer from "./_components/list-container";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function BoardPage({ params }: { params: { id: string } }) {
    const { orgId } = auth();

    if (!orgId) {
        redirect(`organizations/${orgId}`);
    }

    const lists = await db.list.findMany({
        where: {
            boardId: params.id,
            board: {
                orgId,
            },
        },
        include: {
            cards: {
                orderBy: {
                    order: "asc",
                },
            },
        },
        orderBy: {
            order: "asc",
        },
    });

    return <ListContainer data={lists} boardId={params.id} />;
}

export default BoardPage;
