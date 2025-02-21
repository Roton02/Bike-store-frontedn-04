import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='h-20 mt-5'>
        <Navbar />
      </div>

      <div className='flex flex-col w-full h-screen max-w-7xl mx-auto'>
        <div className={`flex-1 }`}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
