import BoardOptions from "./board-options";

const BoardHeader = ({ title }: { title: string }) => {
    return (
        <div className="w-full bg-black/30 py-4 text-white px-10 2xl:px-0">
            <div className="max-w-screen-2xl flex items-center justify-between mx-auto">
                <h1 className="font-semibold text-3xl">{title}</h1>
                <BoardOptions />
            </div>
        </div>
    );
};

export default BoardHeader;
