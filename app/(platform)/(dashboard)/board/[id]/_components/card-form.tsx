import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

const CardForm = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    if (!isEditing) {
        return (
            <button className="w-full rounded-md hover:bg-white/50 transition p-3 flex items-center font-medium text-sm text-neutral-500">
                <Plus className="mr-1" size={16} />
                Add a Card
            </button>
        );
    }

    return <div>hi</div>;
};

export default CardForm;
