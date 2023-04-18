import { Button } from "../Button"
import { Input } from "../Input"
import {Link} from "../Link"

type FormulariologinType = "formloginType1" | "formloginType2"

interface FormulariologinProps {

    type?: FormulariologinType
}

export const Formulariologin = () => {
    return (<>
        <form >
            <Input
                name="Email"
                placeholder="Email"
                typeinput="email"
            />
            <Input
                name="Password"
                placeholder="Contraseña"
                typeinput="password"
            />
            <Link
                href="">
                ¿Olvidaste tu contraseña?
                
            </Link>

            <Link
                href="">
                Crear cuenta
                
            </Link>
            <Button>Log in</Button>
        </form>



    </>)
}