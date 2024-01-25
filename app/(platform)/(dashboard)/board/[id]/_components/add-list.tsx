"use client";
import FormInput from "@/components/forms/form-input";
import FormSubmit from "@/components/forms/form-submit";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { useAction } from "@/hooks/use-action";
import { createList } from "@/actions/create-list";

import { Plus } from "lucide-react";

const AddListPopover = () => {
    const { execute } = useAction(createList);

    const onSubmit = (formData: FormData) => {
        const title = formData.get("list-title") as string;
        execute(title);
    };

    return (
        <Popover>
            <PopoverTrigger>
                <div className="bg-neutral-200 rounded-md font-semibold pl-4 py-2 flex items-center gap-1 cursor-pointer">
                    <Plus size={20} />
                    Add a list
                </div>
            </PopoverTrigger>

            <PopoverContent>
                <form>
                    <FormInput id="list-title" title="List name" />
                    <FormSubmit className="w-full  mt-5">Create</FormSubmit>
                </form>
            </PopoverContent>
        </Popover>
    );
};

export default AddListPopover;
