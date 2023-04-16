import { ReactNode } from "react"

type ButtonType = "btn1" | "btn2"

interface ButtonProps {
    children?: ReactNode

    type?:ButtonType
}


export const Button = ({children,type="btn1"}:ButtonProps) => {
    return (<>
        <button className={`btn ${type}`}>
            {children}
        </button>
    </>)
}
