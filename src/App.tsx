import { Heading } from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  console.log("Oi");
  return (
    <>
      <Heading> Olá Mundo </Heading>
      <Heading> Olá Mundo 2</Heading>
      <Heading> Olá Mundo 3</Heading>
      <p> Lorem Ipsum</p>
    </>
  );
}
