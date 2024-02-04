"use client";

import FormSubmit from "@/components/forms/form-submit";

import { useState } from "react";
import { useAction } from "@/hooks/use-action";
import { createCard } from "@/actions/create-card";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { Plus, X } from "lucide-react";

interface CardFormProps {
    listId: string;
    boardId: string;
}

const CardForm = ({ listId, boardId }: CardFormProps) => {
    const { execute } = useAction(createCard);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const toggleEditMode = () => setIsEditing((isEditing) => !isEditing);

    const handleCreateCard = (formData: FormData) => {
        const title = formData.get("title") as string;
        execute({ listId, boardId, title });
        toggleEditMode();
    };

    if (!isEditing) {
        return (
            <button
                onClick={toggleEditMode}
                className="w-full rounded-md hover:bg-white/50 transition p-3 flex items-center font-medium text-sm text-neutral-500"
            >
                <Plus className="mr-1" size={16} />
                Add a Card
            </button>
        );
    }

    return (
        <form action={handleCreateCard}>
            <Textarea className="mb-3" name="title" placeholder="Enter card name..."></Textarea>

            <div className="flex items-center text-neutral-600">
                <FormSubmit className="h-9 bg-blue-700">Create</FormSubmit>

                <Button variant="ghost" onClick={toggleEditMode}>
                    <X />
                </Button>
            </div>
        </form>
    );
};

export default CardForm;
