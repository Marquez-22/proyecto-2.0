import { ReactNode } from "react"
import { Text } from "../Text"


type TituloimgType = "tituloimg1" | "tituloimg2" |"tituloimg3"

interface TituloimgProps {

    children?: ReactNode
    type?: TituloimgType
    title: string
    img: string
}



export const Tituloimg = ({ img = "", title = "", children, type = "tituloimg1" }: TituloimgProps) => {
    return (<>
        <div className={`tituloimg ${type}`}>
            <img className="images" src={img}></img>
            <Text className="titulo" type="text2" >
                {title}
            </Text>
        </div>
    </>)
}