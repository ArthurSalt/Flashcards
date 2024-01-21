import { ChangeEvent, ComponentPropsWithoutRef } from "react"
import styles from './textfield.module.scss'

export type TextFieldProps = {
  label?: string
  placeholder?: string
  value?: string
  variant: string
  errorMassage?: string
  errors?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = ((props: TextFieldProps) => {

  return (
    <label>{props.label}
      <input type="text" onChange={props.onChange} value={props.value} className={styles[props.variant]} placeholder={props.placeholder} />
      <span className={styles.error}>{props.errorMassage}</span>
    </label>
  )
})