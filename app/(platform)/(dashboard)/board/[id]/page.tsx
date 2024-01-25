import { db } from "@/lib/db";
import Link from "next/link";
import BoardOptions from "./_components/options-dropdown";
import Lists from "./_components/lists";

async function BoardPage({ params }: { params: { id: string } }) {
    const board = await db.board.findFirst({ where: { id: params.id } });

    return (
        <div style={{ backgroundImage: `url(${board?.imageFullUrl})` }} className="w-full h-screen bg-cover">
            <div className="w-full bg-black/30 py-4 text-white px-10 2xl:px-0">
                <div className="max-w-screen-2xl flex items-center justify-between mx-auto">
                    <h1 className="font-semibold text-3xl">{board?.title}</h1>
                    <BoardOptions boardId={params.id} />
                </div>
            </div>

            <Lists boardId={params.id} />

            <Link
                href={board?.imageLinkHTML!}
                className="absolute bottom-0 font-semibold left-2 hover:underline text-neutral-800 text-sm"
            >
                Photo by: {board?.imageUsername}
            </Link>
        </div>
    );
}

export default BoardPage;
