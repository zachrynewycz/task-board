export type List = {
    id: string;
    title: string;
    order: number;
    boardId: string;
    cards: Card[];
};

export type Card = {
    id: string;
    title: string;
    description: string;
    order: number;
    listId: string;
    createdAt: string;
};
