import ConsultationForm from '@/component/ConsultationForm'
import NewsCard from '@/component/NewsCard'
import RecentNews from '@/component/RecentNews'

export const News = () => {
  return (
    <div className='bg-gray-100'>
      <div className='max-w-7xl mx-auto'>
        <NewsCard></NewsCard>
        <RecentNews></RecentNews>
      </div>
      <ConsultationForm></ConsultationForm>
    </div>
  )
}
