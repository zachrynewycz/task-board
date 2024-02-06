import Image from "next/image";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Activity, PanelsLeftBottom, Settings } from "lucide-react";

const OrgItem = ({ org }: { org: any }) => {
    const { organization: activeOrganization } = useOrganization();
    const { setActive, isLoaded } = useOrganizationList();

    const router = useRouter();
    const pathname = usePathname();

    if (!activeOrganization) return null;
    if (!isLoaded) return <p>Loading...</p>;

    const routes = [
        {
            label: "Boards",
            icon: <PanelsLeftBottom />,
            href: `/organization/${org.id}`,
        },
        {
            label: "Activity",
            icon: <Activity />,
            href: `/organization/${org.id}/activity`,
        },
        {
            label: "Settings",
            icon: <Settings />,
            href: `/organization/${org.id}/settings`,
        },
    ];

    const onClick = (url: string) => router.push(url);

    const onExpand = () => activeOrganization.id !== org.id && setActive({ organization: org.id });

    return (
        <AccordionItem className="border-none my-0" value={org.id}>
            <AccordionTrigger onClick={onExpand}>
                <div className="flex items-center gap-4">
                    <Image src={org.imageUrl} alt="org-image" width={35} height={35} className="rounded-md" />
                    <span className="font-semibold">{org.name}</span>
                </div>
            </AccordionTrigger>

            {routes.map((route, index) => (
                <AccordionContent className="my-0 py-0.5" key={index}>
                    <Button
                        key={route.href}
                        size="sm"
                        onClick={() => onClick(route.href)}
                        className={cn(
                            "w-full font-normal justify-start flex gap-2 pl-12",
                            pathname === route.href && "bg-sky-500/10 text-sky-700"
                        )}
                        variant="ghost"
                    >
                        {route.icon}
                        {route.label}
                    </Button>
                </AccordionContent>
            ))}
        </AccordionItem>
    );
};

export default OrgItem;
