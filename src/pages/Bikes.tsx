import { useGetAllBikesQuery } from '@/Redux/featured/bikes/bikesApi'

export const Bikes = () => {
  const { data } = useGetAllBikesQuery(undefined)
  console.log(data)
  return <div>Bikes</div>
}
