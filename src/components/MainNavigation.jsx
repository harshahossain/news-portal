import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
function MainNavigation({ setCategory }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
      id="nav"
    >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <span className="badge bg-light text-dark fs-5">News Portal</span>
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <button
                class="nav-link active"
                onClick={() => setCategory("technology")}
              >
                Technology
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link active"
                onClick={() => setCategory("business")}
              >
                Business
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link active"
                onClick={() => setCategory("health")}
              >
                Health
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link active"
                onClick={() => setCategory("science")}
              >
                Science
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link active"
                onClick={() => setCategory("sports")}
              >
                Sports
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link active"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </button>
            </li>
          </ul>
          <ul className="d-flex">
            <li className="nav-item">
              <NavLink
                className="nav-link text-light me-2"
                aria-current="page"
                to="contact"
                id="contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
          {/* </form> */}
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;
