import Clients from '../components/Clients'
import FeaturedProducts from '../components/FeaturedProducts'
import HomeBanner from '../components/HomeBanner'
import Meta from '../components/Meta'
import Mission from '../components/Mission'
import Promised from '../components/Promised'

export default function Home() {
  return (
    <>
      <Meta />
      <div className="flex items-center relative mb-6">
        <HomeBanner />
      </div>
      <FeaturedProducts />
      <Promised />
      <Mission />
      <Clients />
    </>
  )
}