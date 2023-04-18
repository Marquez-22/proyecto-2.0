
import { Formulariosignup } from "../components/Formulariosignup"
import Layout from "../components/Layout"
import { Tituloimg } from "../components/Tituloimg"


const SignupPages = () => (
    <Layout title="Iniciar Sesion">
        <Tituloimg
            img="/images/fondo.png"
            title="Registrarse"
            type="tituloimg3"


        />
         <Formulariosignup />

        
    </Layout>


)

export default SignupPages