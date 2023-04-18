
import { Input } from "../Input"
import { Link } from "../Link"
import { Button } from "../Button"
import Layout from "../Layout"


type FormulariosignupType = "formsignup1"

interface FormulariosignupProps {

    type?: FormulariosignupType

}

export const Formulariosignup = () => {
    return (<>
        <form>
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
            <Button>Sign up</Button>


        </form>




    </>)
}