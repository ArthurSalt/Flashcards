import { useForm, useController } from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../../ui/button'
import { TextField } from '@/components/ui/textfield'

import styles from './login-form.module.scss'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  rememberMe: z.boolean().default(false),
})

export const LoginForm = () => {
  const { handleSubmit, control, formState: { errors }, } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }


  const { field: email } = useController({
    name: 'email',
    control,
    defaultValue: '',
  })


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
      <DevTool control={control}/>
      <ControlledTextField control={control} name={'email'} errorMassage={errors.email?.message} variant={'primary'} label={'Email'} placeholder={'enter email'}/>
      <ControlledTextField control={control} name={'password'} errorMassage={errors.password?.message} variant={'secondary'} label={'Password'} placeholder={'enter password'}/>
      <ControlledCheckbox label={'remember me'} control={control} name={'rememberMe'}/>
      <Button type="submit">Submit</Button>
    </form>
  )
}