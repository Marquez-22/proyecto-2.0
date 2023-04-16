import { ReactNode } from "react"


type ContainerType = "container1" | "container2"


interface ContainerProps {
    children?: ReactNode
    type?: ContainerType


}


export const Container = ({ children, type = "container1" }: ContainerProps) => {
    return (<>
        <div className={`container ${type}`} >
            {children}
        </div>



    </>)
}