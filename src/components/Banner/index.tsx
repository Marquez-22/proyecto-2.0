import { ReactNode } from "react"
import { Text } from "../Text"
import { Button } from "../Button"
import { Container } from "../Container"

type BannerType = "banner1" | "banner2"

interface BannerProps {
    children?: ReactNode
    type?: BannerType
    title: string
    button:string
    text:string
    img:string 

}

export const Banner = ({ children, type = "banner1",text="",button="",img="",title=""}: BannerProps) => {
    return (<>
        <Container>
            <div className={`banner ${type}`}>
                <div className="columna1">
                    <div className="content-info">
                        <Text className="titulo" type="text2" >
                            {title}
                        </Text>
                        <Text className="parrafo">
                        {text}
                        </Text>

                        <Button className="boton" >
                        {button}
                        </Button>
                    </div>
                </div>


                <div className="columna2">
                    <img src={img}></img>
                </div>



            </div>
        </Container>

    </>)
}