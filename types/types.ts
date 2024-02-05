export type List = {
    id: string;
    title: string;
    order: number;
    boardId: string;
    cards: Card[];
    createdAt?: Date;
};

export type Card = {
    id: string;
    title: string;
    description: string;
    order: number;
    listId: string;
    createdAt?: Date;
};
