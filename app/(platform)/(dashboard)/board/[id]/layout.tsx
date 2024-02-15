import { db } from "@/lib/db";
import Navbar from "../../_components/navbar";
import BoardHeader from "./_components/board-header";
import CardModal from "@/components/modals";

interface LayoutProps {
    children: React.ReactNode;
    params: { id: string };
}

async function BoardLayout({ children, params }: LayoutProps) {
    const board = await db.board.findFirst({ where: { id: params.id } });

    return (
        <main className="h-screen overflow-y-clip">
            <Navbar />

            <div style={{ backgroundImage: `url(${board?.imageFullUrl})` }} className="w-full h-screen bg-cover">
                <BoardHeader title={board?.title!} />
                {children}
            </div>
        </main>
    );
}

export default BoardLayout;
