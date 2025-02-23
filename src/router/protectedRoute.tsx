import { UseCurrentToken } from '@/Redux/featured/auth/authSlice'
import { useAppSelector } from '@/Redux/hooks'
import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function ProtectedRoute({ children }: { children: ReactNode }) {
  const location = useLocation()
  const token = useAppSelector(UseCurrentToken)

  if (!token) {
    return (
      <Navigate state={location.pathname} to='/login' replace={true}></Navigate>
    )
  }

  return children
}

export default ProtectedRoute
