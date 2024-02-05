"use client";
import { useOrganizationList } from "@clerk/nextjs";
import { OrganizationMembership } from "@clerk/nextjs/server";

const SidebarOptions = () => {
    const { userMemberships } = useOrganizationList();
    console.log(userMemberships);
    return <></>;
};

export default SidebarOptions;
