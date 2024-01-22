import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="bg-slate-100 h-screen overflow-hidden">
            <Navbar />
            <div className="text-center">{children}</div>
            <Footer />
        </main>
    );
}
