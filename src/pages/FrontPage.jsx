import { NavBar } from "../components/NavBar";
import "../App.css";
import { Outlet, useNavigate } from "react-router";

function FrontPage() {
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("/about");
  };

  return (
    <>
      <NavBar />
      <h1>Hello world, this is me, Cajsa</h1>
      <div>
        <img src="images/me.jpeg" alt="picture"></img>
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
