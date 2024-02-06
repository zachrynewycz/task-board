"use client";

import OrgItem from "./org-item";

import { Accordion } from "@/components/ui/accordion";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const OrgList = () => {
    const { user, isLoaded, isSignedIn } = useUser();

    if (!isLoaded) return <p>Loading...</p>;
    if (!isSignedIn) return redirect("/select-org");
    if (!user.organizationMemberships) return null;

    return (
        <div className="mt-3">
            <Accordion type="single" collapsible>
                {user.organizationMemberships.map(({ organization }) => (
                    <OrgItem key={organization.id} org={organization} />
                ))}
            </Accordion>
        </div>
    );
};

export default OrgList;
