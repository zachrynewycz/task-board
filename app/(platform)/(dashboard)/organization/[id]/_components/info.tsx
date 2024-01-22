"use client";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";

const Info = () => {
    const { organization, isLoaded } = useOrganization();

    if (!isLoaded) {
        return null;
    }

    return (
        <div className="flex items-center">
            <Image src={organization?.imageUrl as string} alt="Org image" width={50} height={50} priority />

            <div>
                <h1>{organization?.name}</h1>
            </div>
        </div>
    );
};

export default Info;
