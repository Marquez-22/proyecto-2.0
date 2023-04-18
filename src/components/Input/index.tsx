import { type } from "os"


type InputType = "input1" | "input2"

interface InputProps {
    type?: InputType
    typeinput?: "text" | "email" | "password"
    name: string;
    value?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;



}

export const Input = ({ typeinput = "text", name, placeholder = "",required=false,disabled=false }: InputProps) => {
    return (<>

        <input
            type={typeinput}
            name={name}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
        />
    </>)
}