import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/courses">Courses</Link>
          </li>
          <li class="nav-item">
            <Link to="/experience">Experience</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
