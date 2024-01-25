import Navbar from "../../_components/navbar";

function BoardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="h-screen overflow-hidden">
            <Navbar />
            {children}
        </main>
    );
}

export default BoardLayout;
