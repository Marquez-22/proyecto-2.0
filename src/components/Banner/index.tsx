import { ReactNode } from "react"
import { Text } from "../Text"
import { Button } from "../Button"
import { Container } from "../Container"

type BannerType = "banner1" | "banner2"

interface BannerProps {
    children?: ReactNode
    type?: BannerType
}

export const Banner = ({ children, type = "banner1" }: BannerProps) => {
    return (<>
        <Container>
            <div className={`banner ${type}`}>

                <div className="columna1">
                    <div className="content-info">
                        <Text className="titulo" type="text2" >
                            Trendiest Fashion ever

                        </Text>

                        <Text className="parrafo">
                            When you are in doubt,
                            wear a Viss Fashions
                            Denim
                        </Text>

                        <Button className="boton" >
                            Buy now
                        </Button>
                    </div>
                </div>


                <div className="columna2">
                    <img src="/images/banner.png"></img>
                </div>



            </div>
        </Container>

    </>)
}