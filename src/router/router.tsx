import App from '@/App'
import Layout from '@/layout/Layout'
import AboutPage from '@/pages/about'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './protectedRoute'
import AdminRoute from './adminRoutes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      {
        path: 'products',
        element: <ProtectedRoute>Product</ProtectedRoute>,
      },
      {
        path: 'about',
        element: (
          <AdminRoute>
            <AboutPage />
          </AdminRoute>
        ),
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
