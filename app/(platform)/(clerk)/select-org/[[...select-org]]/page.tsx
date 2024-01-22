import { OrganizationList } from "@clerk/nextjs";

function OrganizationSelectionPage() {
    return (
        <OrganizationList
            hidePersonal
            afterSelectOrganizationUrl="/organization/:id"
            afterCreateOrganizationUrl="/organization/:id"
        />
    );
}

export default OrganizationSelectionPage;
