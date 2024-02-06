import CardModal from "@/components/modals/card-modal";
import { Card } from "@/types/types";
import { Draggable } from "@hello-pangea/dnd";

interface CardItemProps {
    data: Card;
    index: number;
}

const CardItem = ({ data, index }: CardItemProps) => {
    return (
        <Draggable draggableId={data.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    role="button"
                    className="truncate border-2 mb-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm font-semibold"
                >
                    {data.title}
                    <CardModal card={data} />
                </div>
            )}
        </Draggable>
    );
};

export default CardItem;
