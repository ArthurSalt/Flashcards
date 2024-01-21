import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../../ui/button'

import styles from './login-form.module.scss'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  rememberMe: z.boolean().default(false),
})

// useForm shoul have default values for all the controlled inputs.
// Default values could be made via Zod as well
// use useController to make an input controllable and refactor it to separate folder.
export const LoginForm = () => {
  const { handleSubmit, control, formState: { errors }, } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange', // form validation mode
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    }
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
      {/* RHF Devtool for Storybook*/}
      <DevTool control={control} />
      {/* RHF DevTool for Storybook*/}

      <ControlledTextField control={control} name={'email'} errorMassage={errors.email?.message} variant={'primary'} label={'Email'} placeholder={'enter email'} />
      <ControlledTextField control={control} name={'password'} errorMassage={errors.password?.message} variant={'secondary'} label={'Password'} placeholder={'enter password'} />
      <ControlledCheckbox label={'remember me'} control={control} name={'rememberMe'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}