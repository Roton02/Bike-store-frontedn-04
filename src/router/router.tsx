import App from '@/App'
import Layout from '@/layout/Layout'
import AboutPage from '@/pages/about'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import { createBrowserRouter } from 'react-router-dom'
// import ProtectedRoute from './protectedRoute'
// import AdminRoute from './adminRoutes'
import Bikes from '@/pages/Bikes'
import BikeDetails from '@/pages/BikeDetails'
import Contract from '@/pages/contract'
import { News } from '../pages/News'
import DashBoard from '@/layout/DashBoard'
import OverView from '@/pages/DashBoard/OverView'
import ManageUser from '@/pages/DashBoard/ManageUser'
import ManageProduct from '@/pages/DashBoard/ManageProduct'
import ManageOrders from '@/pages/DashBoard/ManageOrders'
import ManagePayments from '@/pages/DashBoard/ManagePayments'
import MyOrder from '@/pages/DashBoard/MyOrder'
import HelpFAQ from '@/pages/DashBoard/SupportHelp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      {
        path: '/products',
        element: <Bikes></Bikes>,
      },
      {
        path: '/product/:id',
        element: <BikeDetails></BikeDetails>,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <Contract />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/dashBoard',
    element: <DashBoard />,
    children: [
      {
        path: '/dashBoard/overView',
        element: <OverView></OverView>,
      },
      {
        path: '/dashBoard/userManagement',
        element: <ManageUser></ManageUser>,
      },
      {
        path: '/dashBoard/product-management',
        element: <ManageProduct></ManageProduct>,
      },
      {
        path: '/dashBoard/order-management',
        element: <ManageOrders></ManageOrders>,
      },
      {
        path: '/dashBoard/payment-management',
        element: <ManagePayments></ManagePayments>,
      },

      // user
      {
        path: '/dashBoard/myOrder',
        element: <MyOrder></MyOrder>,
      },
      {
        path: '/dashBoard/support',
        element: <HelpFAQ></HelpFAQ>,
      },
    ],
  },
])

export default router
