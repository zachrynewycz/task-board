"use client";

import FormInput from "@/components/forms/form-input";
import FormSubmit from "@/components/forms/form-submit";

import { useRef } from "react";
import { useParams } from "next/navigation";

import { useAction } from "@/hooks/use-action";
import { createList } from "@/actions/create-list";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Plus } from "lucide-react";

const CreateListForm = () => {
    const ref = useRef<HTMLButtonElement>(null);

    const { id }: { id: string } = useParams();

    const { execute } = useAction(createList, {
        onComplete: () => ref.current?.click(),
    });

    const onSubmit = (formData: FormData) => {
        const title = formData.get("list-title") as string;
        execute({ title, boardId: id });
    };

    return (
        <Popover>
            <PopoverTrigger className="h-fit" ref={ref} asChild>
                <div className="bg-[#f1f2f4] rounded-md font-semibold pl-4 py-2 flex items-center cursor-pointer">
                    <Plus className="mr-1" size={20} />
                    Add a list
                </div>
            </PopoverTrigger>

            <PopoverContent>
                <form action={onSubmit}>
                    <FormInput id="list-title" title="List name" />
                    <FormSubmit className="w-full mt-5">Create</FormSubmit>
                </form>
            </PopoverContent>
        </Popover>
    );
};

export default CreateListForm;
