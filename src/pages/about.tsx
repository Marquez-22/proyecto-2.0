import Link from 'next/link'
import Layout from '../components/Layout'
import { Banner } from '../components/Banner'

const AboutPage = () => (
  <Layout title="About">
     <Banner
      title='Viss Fashion'
      text='Somos especialista de prenda de vestir de alta gama para mujeres, hombres y niños(as) '
      button='Hecha un vistazo'
      img='/images/vestido.png'
    />
  </Layout>
)

export default AboutPage
