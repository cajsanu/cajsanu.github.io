import { useState } from "react";
import { NavBar } from "../components/NavBar";
import "../App.css";

function FrontPage() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavBar />
      <h1>Hello world, this is me, on my journey</h1>
      <div>picture</div>
      <footer>footer</footer>
    </>
  );
}

export default FrontPage;
