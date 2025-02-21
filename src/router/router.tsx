import App from '@/App'
import Layout from '@/layout/Layout'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      {
        path: 'bikes',
        element: <h2>Products</h2>,
      },
      {
        path: 'about',
        element: <h2>About</h2>,
      },
      {
        path: 'contact',
        element: <h2>Contact</h2>,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
])

export default router
