import { Button } from "../Button"
import { Input } from "../Input"


type FormulariologinType = "formloginType1" | "formloginType2"

interface FormulariologinProps {

    type?: FormulariologinType
}

export const Formulariologin = () => {
    return (<>
        <form >
            <Input
                name="Nombre"
                placeholder="Nombre"
                typeinput="text"
            />
            <Input
                name="Email"
                placeholder="Email"
                typeinput="text"
            />

            <Input
                name="Contraseña"
                placeholder="Contraseña"
                typeinput="text"
            />

            <Button>Log in</Button>
        </form>



    </>)
}