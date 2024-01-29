import CreateBoardPopover from "@/components/forms/create-board-popover";

import Link from "next/link";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

import { User } from "lucide-react";
import { getRemainingBoardCount } from "@/lib/board-limit";

const BoardList = async () => {
    const { orgId } = auth();
    const remaining = await getRemainingBoardCount();

    if (!orgId) return redirect("/select-org");

    const boards = await db.board.findMany({ where: { orgId } });

    return (
        <>
            <h1 className="flex font-bold text-3xl text-neutral-800 items-center gap-2">
                <User size={40} /> Your boards
            </h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-8 gap-5">
                {boards.map((board) => (
                    <Link
                        href={`/board/${board.id}`}
                        key={board.id}
                        style={{ backgroundImage: `url(${board.imageFullUrl})` }}
                        className="group relative aspect-video bg-no-repeat bg-center bg-cover rounded-md h-full w-full p-2 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
                        <p className="text-white font-semibold text-xl relative truncate">{board.title}</p>
                    </Link>
                ))}

                <CreateBoardPopover side="right">
                    <div className="bg-neutral-200 rounded-md aspect-video text-center h-full font-medium text-neutral-800 flex items-center justify-center cursor-pointer hover:bg-neutral-300 ease-in duration-100">
                        Create new board
                        <br />
                        {remaining} remaining
                    </div>
                </CreateBoardPopover>
            </div>
        </>
    );
};

export default BoardList;
