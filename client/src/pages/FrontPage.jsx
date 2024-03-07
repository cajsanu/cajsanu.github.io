import { useState } from "react";
import { NavBar } from "../components/NavBar";
import "../App.css";
import { Outlet, useNavigate } from "react-router";

function FrontPage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("/about");
  };

  return (
    <>
      <NavBar />
      <h1>Hello world, this is me, on my journey</h1>
      <div className="scrollImages">
        <img src="src/images/me.jpeg" alt="picture"></img>
        <img src="src/images/meBen.jpeg" alt="picture"></img>
      </div>
      <div>
        <button onClick={handleAbout}>About me</button>
      </div>
      <Outlet />
      <footer></footer>
    </>
  );
}

export default FrontPage;
