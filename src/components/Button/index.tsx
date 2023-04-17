import { ReactNode } from "react"

type ButtonType = "btn1" | "btn2"

interface ButtonProps {
    children?: ReactNode
    type?: ButtonType
    className?: string

}


export const Button = ({ children, type = "btn1", className = "" }: ButtonProps) => {
    return (<>
        <button className={`btn ${type} ${className}`}>
            {children}
        </button>
    </>)
}
