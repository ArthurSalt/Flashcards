import { useForm, useController } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/textfield'

import styles from './login-form.module.scss'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { handleSubmit, control } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const { field: password } = useController({
    name: 'password',
    control,
    defaultValue: '',
  })

  const { field: email } = useController({
    name: 'email',
    control,
    defaultValue: '',
  })
  const { field: rememberMe } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
      <TextField onChange={email.onChange} value={email.value} variant={'primary'} label={'Login'}/>
      <TextField onChange={password.onChange} value={password.value} variant={'secondary'} label={'Password'}/>
      <Checkbox onChange={rememberMe.onChange} checked={rememberMe.value} label={'rememberMe'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}