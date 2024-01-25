"use client";
import FormInput from "./form-input";
import FormSubmit from "./form-submit";
import FormImagePicker from "./form-image-picker";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";

import { X } from "lucide-react";

import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board";

interface FormPopoverProps {
    children: React.ReactNode;
    side: "bottom" | "left" | "top" | "right";
}

const CreateBoardPopover = ({ children, side }: FormPopoverProps) => {
    const { execute } = useAction(createBoard, {
        onSuccess: () => {},
        onError: (error) => {},
    });

    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;
        const image = formData.get("selected-image") as string;
        execute({ image, title });
    };

    return (
        <Popover>
            <PopoverTrigger asChild>{children}</PopoverTrigger>

            <PopoverContent className="font-semibold w-96" side={side}>
                <h1 className="text-lg text-neutral-600 text-center">Create board</h1>

                <PopoverClose>
                    <X className="absolute top-5 right-5" size={20} />
                </PopoverClose>

                <form action={onSubmit}>
                    <FormImagePicker />
                    <FormInput id="title" title="Board title" />
                    <FormSubmit className="mt-5 w-full">Create</FormSubmit>
                </form>
            </PopoverContent>
        </Popover>
    );
};

export default CreateBoardPopover;
