/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from './components/ui/button'
import { useGetBikesQuery } from './Redux/api/baseApi'

export default function App() {
  const { data, error, isLoading } = useGetBikesQuery('/bike')
  console.log(data)
  return (
    <div className='text-center py-20 '>
      <Button>Click me</Button>
    </div>
  )
}
