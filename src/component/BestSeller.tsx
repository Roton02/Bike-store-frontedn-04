// import { useQuery } from '@tanstack/react-query'
import BikeCard from './BIkeCard'
import PageHeading from './PageHeading'
import IBike from '@/types/bike.interface'
import { useGetAllBikesQuery } from '@/Redux/featured/bikes/bikesApi'

const BestSeller = () => {
  // const { data } = useQuery({
  //   queryKey: ['bestSeller'],
  //   queryFn: async () => {
  //     const response = await fetch('bike.json')
  //     const data = await response.json()
  //     return data
  //   },
  // })

  const { data } = useGetAllBikesQuery(undefined)

  // const filteredData = data?.filter((item:IBike) => item.bestSeller === true)

  const filteredData = data?.data.slice(0, 6)

  console.log(data)

  return (
    <div className=' max-w-7xl mx-auto m-top '>
      <PageHeading title='Best Seller'></PageHeading>
      <div className=' grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center'>
        {filteredData?.map((item: IBike) => {
          return (
            <div key={item._id} className='flex flex-col items-center m-5'>
              <BikeCard bike={item}></BikeCard>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BestSeller
