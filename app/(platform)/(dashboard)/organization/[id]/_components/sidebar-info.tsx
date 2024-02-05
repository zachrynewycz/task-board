"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";

const SidebarInfo = () => {
    const { organization, isLoaded } = useOrganization();

    if (!isLoaded) {
        return (
            <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-x-5">
            <Image
                src={organization?.imageUrl!}
                alt="organization-image"
                className="rounded-lg"
                width={50}
                height={50}
                priority
            />
            <h1 className="font-bold text-xl mb-2">{organization?.name}</h1>
        </div>
    );
};

export default SidebarInfo;
