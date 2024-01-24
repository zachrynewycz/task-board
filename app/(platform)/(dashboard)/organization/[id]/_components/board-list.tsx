import CreateBoardFormPopover from "@/components/forms/create-board-popover";
import { User } from "lucide-react";

const BoardList = async () => {
    return (
        <>
            <h1 className="flex font-bold text-3xl text-neutral-800 items-center gap-2">
                <User size={40} /> Your boards
            </h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
                <CreateBoardFormPopover side="right">
                    <div className="bg-neutral-200 rounded-md text-center h-32 font-medium text-neutral-800 flex items-center justify-center cursor-pointer hover:bg-neutral-300 ease-in duration-100">
                        Create new board
                        <br /> 5 remaining
                    </div>
                </CreateBoardFormPopover>
            </div>
        </>
    );
};

export default BoardList;
