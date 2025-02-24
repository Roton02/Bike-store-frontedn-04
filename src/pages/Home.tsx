import BikeBanner from '@/component/Banner'
import BestSeller from '@/component/BestSeller'
import Consultation from '@/component/Consultation'
// import HotNews from '@/component/HotNews'
import NewProduct from '@/component/NewProduct'
import Specifications from '@/component/Specifications'
import WhyChooseUs from '@/component/WhyChooseUs'

export default function Home() {
  return (
    <div className=''>
      <BikeBanner />
      <BestSeller></BestSeller>
      <NewProduct></NewProduct>
      <div className='bg-gray-100'>
        <Specifications></Specifications>
      </div>
      <WhyChooseUs></WhyChooseUs>
      {/* <HotNews></HotNews> */}
      <Consultation></Consultation>
    </div>
  )
}
