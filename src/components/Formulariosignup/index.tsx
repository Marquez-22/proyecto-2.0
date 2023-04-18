
import { Input } from "../Input"
import { Button } from "../Button"



type FormulariosignupType = "formsignup1"

interface FormulariosignupProps {

    type?: FormulariosignupType

}

export const Formulariosignup = () => {
    return (<>
        <form>

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