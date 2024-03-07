import { useNavigate } from "react-router";

export const AboutMe = () => {
    const navigate = useNavigate()
    const handleClose = () => {
        navigate("/")
    }
  return (
    <>
      <h2>About me</h2>
      <p>//Hi there//</p>
      <button onClick={handleClose}>Close</button>
    </>
  );
};
