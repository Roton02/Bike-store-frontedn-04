import { ContactHero } from '@/component/ContactHero'
import ContactUs from '@/component/ContactUs'

export const Contract = () => {
  return (
    <div>
      <div>
        <ContactHero></ContactHero>
        <div className='bg-gray-100'>
          <ContactUs></ContactUs>
        </div>
      </div>
    </div>
  )
}
export default Contract
