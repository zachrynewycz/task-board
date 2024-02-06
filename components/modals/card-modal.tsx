"use client";

import { useCardModal } from "@/hooks/use-card-modal";

import { Button } from "../ui/button";
import { Card } from "@/types/types";

import { Layout, X } from "lucide-react";

const CardModal = ({ card }: { card: Card }) => {
    const { isOpen, closeCardModal } = useCardModal();

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
                <div className="relative w-auto max-w-lg mx-auto my-6">
                    <div className="bg-white p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <Layout />
                                <h1 className="text-xl">{card.title}</h1>
                            </div>

                            <Button
                                variant="ghost"
                                onClick={closeCardModal}
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                <X />
                            </Button>
                        </div>

                        <div></div>
                    </div>
                </div>
            </div>
            <div onClick={closeCardModal} className="fixed inset-0 z-40 bg-black opacity-50 cursor-pointer" />
        </>
    );
};

export default CardModal;
