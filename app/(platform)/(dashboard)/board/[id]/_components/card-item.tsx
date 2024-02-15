"use client";
import { useCardModal } from "@/hooks/use-card-modal";
import { Draggable } from "@hello-pangea/dnd";
import { Card } from "@/types/types";

interface CardItemProps {
    data: Card;
    index: number;
}

const CardItem = ({ data, index }: CardItemProps) => {
    const cardModal = useCardModal();

    return (
        <Draggable draggableId={data.id} index={index}>
            {(provided) => (
                <div
                    onClick={() => cardModal.onOpen(data.id)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    role="button"
                    className="truncate border-2 mb-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm font-semibold"
                >
                    {data.title}
                </div>
            )}
        </Draggable>
    );
};

export default CardItem;
