import { Button } from "./components/ui/button";

export function App() {
  return <div>
    <p>Hello</p>
    <Button as='button' variant="primary">Button</Button>
    <Button as='a' href="https://www.google.ru/" target="blank" variant="tertiary">Button Link</Button>
  </div>
}
