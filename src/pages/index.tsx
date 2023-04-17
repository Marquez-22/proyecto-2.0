import Link from 'next/link'
import Layout from '../components/Layout'
import { Banner } from '../components/Banner'

const IndexPage = () => (
  <Layout title="Home">
    <Banner
      title='Trendiest Fashion ever'
      text='When you are in doubt, wear a Viss Fashions Denim'
      button='Buy now'
      img='/images/banner.png'
    />
  </Layout>
)

export default IndexPage
