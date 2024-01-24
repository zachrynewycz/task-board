import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface FormInputProps {
    id: string;
    title: string;
}

const FormInput = ({ id, title }: FormInputProps) => {
    return (
        <>
            <Label htmlFor={id}>{title}</Label>
            <Input className="mt-1 h-9" id={id} name={id} />
        </>
    );
};

export default FormInput;
