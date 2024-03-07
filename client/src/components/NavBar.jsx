import { Link } from "react-router-dom";

export const NavBar = () => {
  const style = {
    padding: 10,
  };
  return (
    <>
      <Link style={style} to="/">
        Home
      </Link>
      <Link style={style} to="/courses">
        Courses
      </Link>
    </>
  );
};
