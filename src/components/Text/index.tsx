import { ReactNode } from "react"




type TextType = "text1" | "text2"

interface TextProps {
    children?: ReactNode
    type?: TextType
    className?:string
}




export const Text = ({ children, type = "text1", className="" }: TextProps) => {
    return (<>
        <div className={`text ${type} ${className}`} >
            {children}
        </div>

    </>)
}
