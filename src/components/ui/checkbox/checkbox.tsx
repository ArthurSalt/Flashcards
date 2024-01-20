import { ComponentPropsWithoutRef } from "react"

export type CheckboxProps = {
  value?: boolean
  label?: string
  rememberMe?: boolean
} & ComponentPropsWithoutRef<'input'>


export const Checkbox = (props:CheckboxProps) => {
  return (
    <label htmlFor="rememberMe">{props.label}
      <input name='rememberMe' type="checkbox" {...props}/>
    </label>
  )
}