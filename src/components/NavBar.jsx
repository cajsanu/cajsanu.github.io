import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <div id="navbarNav">
        <div className="navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="nav-item">
            <Link to="/experience">Experience</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact me</Link>
          </li>
        </div>
      </div>
    </nav>
  );
};
