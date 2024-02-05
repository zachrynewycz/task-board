import { User } from "lucide-react";

const BoardListHeader = () => {
    return (
        <h1 className="flex font-bold text-3xl text-neutral-800 items-center gap-2">
            <User size={40} /> Your boards
        </h1>
    );
};

export default BoardListHeader;
