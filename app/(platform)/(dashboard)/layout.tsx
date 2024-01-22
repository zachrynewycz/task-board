import Navbar from "./_components/navbar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
}

export default DashboardLayout;
