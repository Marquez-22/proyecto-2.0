
import { Formulariologin } from "../components/Formulariologin"
import Layout from "../components/Layout"
import { Tituloimg } from "../components/Tituloimg"


const SignupPages = () => (
    <Layout title="Iniciar Sesion">
        <Tituloimg
            img="/images/fondo.png"
            title="Iniciar Sesion"
            type="tituloimg3"


        />
         <Formulariologin />

        
    </Layout>


)

export default SignupPages