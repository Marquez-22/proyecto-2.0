
import { Text } from "../Text"



type ConteniconsType = "conticons1" | "conticons2"


interface ConteniconsProps {
    img?: string
    text?: string
    title?: string
    type?: ConteniconsType


}

export const Contenicons = ({ img = "", text = "", title = "", type = "conticons1" }: ConteniconsProps) => {
    return (<>

        <div className={`conticons ${type}`}>
            <div className="contentimage">
                 {/* imagen que vcaria depeidnod asdmn asmfbaskjfbaskj */}
                     <img className="images img" src={img}></img>
                {/* HEXAGONO SIEMPREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */}
                 <img className="images imgHEXAGONO" src="/images/hexagono.png"></img>
            </div>
            <Text className="titulo" type="text2" >
                {title}
            </Text>
            <Text className="titulo" type="text1" >
                {text}
            </Text>
        </div>

    </>)
}