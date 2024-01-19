import { useRef, useState } from "react";
import { Button } from "./components/ui/button";
import { TextField } from "./components/ui/textfield";
import { LoginForm } from "./components/auth/login-form/login-form";

export function App() {
  const textfieldRef = useRef(null)
  const [value, setValue] = useState('')
  console.log("render")

  return <div>
    <p>Hello</p>
    <Button as='button' variant="link">Button</Button>
    <Button as='a' href="https://www.google.ru/" target="blank" variant="secondary">Button Link</Button>
    <TextField ref={textfieldRef} value={value} onChange={e => setValue(e.target.value)} placeholder={""} variant={"primary"} />
    <LoginForm/>


  </div>
}
