import { Banner } from "../components/Banner";
import Layout from "../components/Layout";

const ClothingPage = () => (
    <Layout title="Prendas de vestir">
        <Banner
            title='Tienda de Ropa'
            text='Prendas Disponible'
            button='Ir al carrito'
            img={[
                "/images/caballero.jfif",
                "/images/vestido1.jpg",
                "/images/vestido1.jpg",
                "/images/trajes caballero.jpg",
                "/images/caballero.jfif",
                "/images/vestido1.jpg",
                "/images/vestido1.jpg",
                "/images/trajes caballero.jpg",
            ]}

            type='banner3'

        />
    </Layout>
)
export default ClothingPage
