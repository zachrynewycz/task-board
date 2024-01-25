import AddListPopover from "./add-list";

interface ListProps {
    boardId: string;
}

const Lists = async ({ boardId }: ListProps) => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-screen-2xl mx-auto mt-10 gap-5 px-10 2xl:px-0">
                <AddListPopover />
            </div>
        </div>
    );
};

export default Lists;
