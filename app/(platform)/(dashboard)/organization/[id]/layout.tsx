import BoardListHeader from "./_components/board-list-header";
import Sidebar from "./_components/sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
            <div className="flex gap-x-10">
                <div className="w-64 shrink-0 hidden md:block">
                    <Sidebar />
                </div>
                <div className="w-full">
                    <BoardListHeader />
                    {children}
                </div>
            </div>
        </main>
    );
}

export default DashboardLayout;
