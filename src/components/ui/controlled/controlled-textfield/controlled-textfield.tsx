import { FieldValues, useController, UseControllerProps } from "react-hook-form"
import { TextField, TextFieldProps } from "../.."

export type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'onChange' | 'value' | 'id'>

export const ControlledTextField = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  ...TextFieldProps
}: ControlledTextFieldProps<T>) => {
  const { field: { value, onChange } } = useController({
    name,
    control,
    defaultValue,
  })
  return (
    <TextField {...{ onChange, value, id: name, ...TextFieldProps}} />
  )
}