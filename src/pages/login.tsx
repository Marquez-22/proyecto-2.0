
import { Formulariologin } from "../components/Formulariologin"
import Layout from "../components/Layout"
import { Tituloimg } from "../components/Tituloimg"

const LoginPage = () => (
    <Layout title="Registrarse">
        <Tituloimg
            img="/images/fondo.png"
            title=" Iniciar Sesion"
            type="tituloimg2"
        />

        <Formulariologin />
        
    </Layout>

)

export default LoginPage