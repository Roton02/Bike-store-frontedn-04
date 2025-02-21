import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Navbar />

      <div className='flex flex-col w-full h-screen'>
        <div className={`flex-1 }`}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
