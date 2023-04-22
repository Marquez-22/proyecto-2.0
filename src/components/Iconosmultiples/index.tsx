


import { Contenicons } from "../Contenicons"


type IconosmultiplesType = "iconmultiples1" | "iconmultiple2"

interface IconosmultiplesProps {
    type?: IconosmultiplesType


}

export const Iconosmultiples = ({ type = "iconmultiples1" }: IconosmultiplesProps) => {
    return (<>
        <div className="iconosmultiples" >
            <div className="icono1">
            <Contenicons
                img="/images/envio.png"
                text="Nacional e internacional"
                title="Envios"
            />
            </div>
            



            <div className="icono2">
            <Contenicons

                img="/images/asesoria.png"
                text="Disponibilidad "
                title="Asesoria"
            />
            </div>

            <div className="icono3">
            <Contenicons

                img="/images/ws.png"
                text="35% de descuento"
                title="Descuento"
            ></Contenicons>
            </div>


        </div>









    </>)
}