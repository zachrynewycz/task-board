"use client";

import ListItem from "./list-item";
import CreateListForm from "./list-form";
import CardModal from "@/components/modals";

import { useEffect, useState } from "react";

import { useAction } from "@/hooks/use-action";
import { updateCardOrder } from "@/actions/update-card-order";
import { updateListOrder } from "@/actions/update-list-order";

import { DragDropContext, Droppable } from "@hello-pangea/dnd";

import { List } from "@/types/types";

interface ListContainerProps {
    boardId: string;
    data: List[];
}

const ListContainer = ({ data, boardId }: ListContainerProps) => {
    const [orderedData, setOrderedData] = useState<List[]>([]);

    const { execute: executeUpdateListOrder } = useAction(updateListOrder);
    const { execute: executeUpdateCardOrder } = useAction(updateCardOrder);

    useEffect(() => {
        setOrderedData(data);
    }, [data]);

    const onDragEnd = (event: any) => {
        const { destination, source, type } = event;

        if (!destination) return;

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        if (type === "list") {
            const newOrderedData = orderedData;

            const items = newOrderedData.splice(source.index, 1); // Remove list from array
            newOrderedData.splice(destination.index, 0, ...items); //Add it based on new index

            const updatedOrderedData = newOrderedData.map((list, index) => ({ ...list, order: index }));

            executeUpdateListOrder({ boardId, lists: updatedOrderedData });
            setOrderedData(updatedOrderedData);
        }

        if (type === "card") {
            const newOrderedData = orderedData;

            const sourceList = newOrderedData.find((list) => list.id === source.droppableId);
            const destinationList = newOrderedData.find((list) => list.id === destination.droppableId);

            if (!destinationList || !sourceList) return;

            const items = sourceList.cards.splice(source.index, 1); // Remove the item from the source list
            destinationList.cards.splice(destination.index, 0, ...items); // Insert the item into the destination list

            destinationList.cards = destinationList.cards.map((card, index) => {
                return { ...card, listId: destinationList.id, order: index };
            });

            executeUpdateCardOrder({
                boardId,
                cards: destinationList.cards,
            });
            setOrderedData(newOrderedData);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="lists" type="list" direction="horizontal">
                {(provided) => (
                    <ol
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-screen-2xl mx-auto mt-6 gap-4 px-10 2xl:px-0"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {orderedData.map((list, index) => (
                            <ListItem key={list.id} index={index} data={list} />
                        ))}

                        {provided.placeholder}
                        <CreateListForm />
                    </ol>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default ListContainer;
