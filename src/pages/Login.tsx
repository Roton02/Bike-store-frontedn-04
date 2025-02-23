/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button'
import { useLoginMutation } from '@/Redux/featured/auth/authApi'
import { setUser } from '@/Redux/featured/auth/authSlice'
import { useAppDispatch } from '@/Redux/hooks'
import verrifyToken from '@/utils/verifyToken'
import { FieldValues, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: 'admin@gmail.com',
      password: 'admin01',
    },
  })

  const [login] = useLoginMutation()

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('looging in ')
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      }

      const res = await login(userInfo).unwrap()
      const user = verrifyToken(res.data.token)

      dispatch(setUser({ user: user, token: res.data.token }))
      toast.loading('Login successful', { id: toastId, duration: 2000 })
      navigate(location?.state ? location.state : '/')
    } catch (error: any) {
      toast.error(error.message, { id: toastId, duration: 2000 })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='id'>ID: </label>
        <input type='text' id='id' {...register('email')} />
      </div>
      <div>
        <label htmlFor='password'>Password: </label>
        <input type='text' id='password' {...register('password')} />
      </div>
      <Button type='submit'>Login</Button>
    </form>
  )
}

export default Login
