"use client";

import CardItem from "./card-item";
import ListHeader from "./list-header";

import { Draggable, Droppable } from "@hello-pangea/dnd";

import { List } from "@/types/types";
import CardForm from "./card-form";

interface ListItemProps {
    data: List;
    index: number;
}

const ListItem = ({ data, index }: ListItemProps) => {
    return (
        <Draggable draggableId={data.id} index={index}>
            {(provided) => (
                <li className="bg-[#f1f2f4] rounded-md h-fit" ref={provided.innerRef} {...provided.draggableProps}>
                    <div className="px-2 py-3">
                        <ListHeader title={data.title} />

                        <Droppable droppableId={data.id} type="card">
                            {(provided) => (
                                <ul ref={provided.innerRef} {...provided.droppableProps}>
                                    {data.cards.map((card, index) => (
                                        <CardItem key={card.id} index={index} data={card} />
                                    ))}
                                </ul>
                            )}
                        </Droppable>

                        <CardForm />
                    </div>
                </li>
            )}
        </Draggable>
    );
};

export default ListItem;
