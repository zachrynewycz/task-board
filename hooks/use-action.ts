import { useCallback, useState } from "react";

type Action<TInput, TOutput> = (data: TInput) => Promise<Action<TInput, TOutput>>;

interface UseActionOptions<TOutput> {
    onSuccess?: (data: TOutput) => void;
    onError?: (error: string) => void;
    onComplete?: () => void;
}

export const useAction = <TInput, TOutput>(action: Action<TInput, TOutput>, options: UseActionOptions<TOutput>) => {
    const [data, setData] = useState<any>();
    const [errors, setErrors] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const execute = useCallback(
        async (input: TInput) => {
            try {
                setIsLoading(true);
                const response = await action(input);

                if (!response) {
                    throw new Error("Cannot complete request");
                }

                setData(response);
            } catch (error) {
                setErrors(error);
                setIsLoading(false);
            } finally {
                setIsLoading(true);
            }
        },
        [action]
    );

    return { data, isLoading, errors, execute };
};
