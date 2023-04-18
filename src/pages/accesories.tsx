import { Banner } from "../components/Banner"
import Layout from "../components/Layout"

const AccesoriesPage = () => (
    <Layout title="Accesorios">
        <Banner
            title='Coleccion de edicion especial "Sueña con todo tu corazon"'
            text=' En la variedad de accesorios, reunimos en pulseraS Y cadenas, todos los buenos 
            deseos e intenciones para que recuerdes la importancia de soñar en grande, llévala 
            siempre contigo como un amuleto para relizar los sueños y deseos de tu corazón.'
            button='Detalles'
            img={[
                "/images/pulsera1.png",
                "/images/PULSERA2.png",
                "/images/PULSERA3.png",
                "/images/PULSERA4.png",
                "/images/PULSERA5.png",
                "/images/CADENA1.png",
                "/images/CADENA2.png",
                "/images/cadena3.png",
                "/images/cadena4.png",
            ]}
            type="banner4"

        />

    </Layout>

)
export default AccesoriesPage