"use client";

import ListItem from "./list-item";
import CreateListForm from "./list-form";

import { DragDropContext, Droppable } from "@hello-pangea/dnd";

import { List } from "@/types/types";

interface ListContainerProps {
    boardId: string;
    data: List[];
}

const ListContainer = ({ data, boardId }: ListContainerProps) => {
    const onDragEnd = () => {};

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="lists" type="list" direction="horizontal">
                {(provided) => (
                    <ol
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-screen-2xl mx-auto mt-6 gap-4 px-10 2xl:px-0"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {data.map((list, index) => (
                            <ListItem key={list.id} index={index} data={list} />
                        ))}

                        <CreateListForm />
                    </ol>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default ListContainer;
