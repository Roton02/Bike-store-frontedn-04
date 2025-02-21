/* eslint-disable @typescript-eslint/no-unused-vars */
import Home from './pages/Home'
import { useGetBikesQuery } from './Redux/api/baseApi'

export default function App() {
  const { data, error, isLoading } = useGetBikesQuery('/bike')
  console.log(data)
  return (
    <div className='text-center py-20 '>
      <Home />
    </div>
  )
}
