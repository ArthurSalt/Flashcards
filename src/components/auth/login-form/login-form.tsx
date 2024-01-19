import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/textfield'

type FormValues = {
  email: string
  password: string
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label={'email'} variant='primary' required />
      <TextField {...register('password')} label={'password'} variant='primary' required />
      <Button type="submit">Submit</Button>
    </form>
  )
}