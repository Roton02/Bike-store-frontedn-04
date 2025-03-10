import BikeDetailsBanner from '@/component/BikeDetailsBanner'
import DetailsContent from '@/component/DetailsContent'
import { useGetBikeQuery } from '@/Redux/featured/bikes/bikesApi'
// import IBike from '@/types/bike.interface'
// import { useQuery } from '@tanstack/react-query'
// import axios from 'axios'
import { useParams } from 'react-router-dom'

const BikeDetails = () => {
  const { id } = useParams() // id is a string

  // Fetch bike data
  // const {
  //   data: bikes,
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ['all-bike'],
  //   queryFn: async () => {
  //     const res = await axios.get('/bike.json') // Ensure the file is accessible
  //     return res.data
  //   },
  // })

  const { data: bike, isLoading, error } = useGetBikeQuery(`/${id}`)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading data!</p>

  // const bike = bikes?.find((bike: IBike) => bike?.id === Number(id))

  if (!bike) {
    return <p>Bike not found!</p>
  }

  return (
    <div className='my-10'>
      <BikeDetailsBanner bike={bike}></BikeDetailsBanner>
      <DetailsContent data={bike}></DetailsContent>
    </div>
  )
}

export default BikeDetails
