import Navbar from "../_components/navbar";

function OrganizationLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default OrganizationLayout;
