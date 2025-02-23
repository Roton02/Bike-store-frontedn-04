import {
  logout,
  UseCurrentToken,
  UseCurrentUser,
} from '@/Redux/featured/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import { IUser } from '@/types'
import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function AdminRoute({ children }: { children: ReactNode }) {
  const location = useLocation()
  const token = useAppSelector(UseCurrentToken)
  const user = useAppSelector(UseCurrentUser) as IUser
  const disPatch = useAppDispatch()

  if (!token) {
    return <Navigate to='/login' replace={true}></Navigate>
  }
  if (user.role !== 'customer') {
    disPatch(logout())
    return (
      <Navigate state={location.pathname} to='/login' replace={true}></Navigate>
    )
  }

  return children
}

export default AdminRoute
