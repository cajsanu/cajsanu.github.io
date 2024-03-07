import { useNavigate } from "react-router";
import { NavBar } from "../components/NavBar";

export const ExperiencePage = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <>
      <NavBar />
      <h2>Relevant experience</h2>
      <p>//Hi there//</p>
      <button onClick={handleClose}>Back</button>
    </>
  );
};
