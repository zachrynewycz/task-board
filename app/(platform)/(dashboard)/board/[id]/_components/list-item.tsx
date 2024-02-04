"use client";

import CardItem from "./card-item";
import CardForm from "./card-form";
import ListHeader from "./list-header";

import { Draggable, Droppable } from "@hello-pangea/dnd";

import { List } from "@/types/types";

interface ListItemProps {
    data: List;
    index: number;
}

const ListItem = ({ data, index }: ListItemProps) => {
    return (
        <Draggable draggableId={data.id} index={index}>
            {(provided) => (
                <li
                    className="bg-[#f1f2f4] rounded-md h-fit px-2 py-3"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <ListHeader data={data} />

                    <Droppable droppableId={data.id} type="card">
                        {(provided) => (
                            <ul ref={provided.innerRef} {...provided.droppableProps}>
                                {data.cards.map((card, index) => (
                                    <CardItem key={card.id} data={card} index={index} />
                                ))}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>

                    <CardForm listId={data.id} boardId={data.boardId} />
                </li>
            )}
        </Draggable>
    );
};

export default ListItem;
