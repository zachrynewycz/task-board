"use client";

import FormInput from "./form-input";
import FormSubmit from "./form-submit";
import FormImagePicker from "./form-image-picker";

import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";

import { X } from "lucide-react";

interface FormPopoverProps {
    children: React.ReactNode;
    side: "bottom" | "left" | "top" | "right";
}

const CreateBoardFormPopover = ({ children, side }: FormPopoverProps) => {
    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;
        const image = formData.get("image") as string;
        console.log(image, title);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>{children}</PopoverTrigger>

            <PopoverContent className="font-semibold w-96" side={side}>
                <h1 className="text-lg text-neutral-600 text-center">Create board</h1>

                <PopoverClose>
                    <Button variant="ghost" className="absolute right-0 top-3">
                        <X size={20} />
                    </Button>
                </PopoverClose>

                <form action={onSubmit}>
                    <FormImagePicker id="image" />
                    <FormInput id="title" title="Board title" />
                    <FormSubmit className="mt-5 w-full">Create</FormSubmit>
                </form>
            </PopoverContent>
        </Popover>
    );
};

export default CreateBoardFormPopover;
