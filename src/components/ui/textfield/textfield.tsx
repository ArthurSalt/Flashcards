import React, { ChangeEvent, ComponentPropsWithoutRef } from "react"
import styles from './textfield.module.scss'

export type TextFieldProps = {
  label?: string
  placeholder?: string
  value?: string
  variant: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  return (
    <input ref={ref} type="text" onChange={props.onChange} value={props.value} className={styles[props.variant]} placeholder='default text'/>
  )
})