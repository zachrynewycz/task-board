import { Button } from "../ui/button";

interface FormSubmitProps {
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

const FormSubmit = ({ children, disabled, className }: FormSubmitProps) => {
    return (
        <Button disabled={disabled} className={className} type="submit">
            {children}
        </Button>
    );
};

export default FormSubmit;
