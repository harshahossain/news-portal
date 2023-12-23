import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
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
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <ul className="d-flex">
            <li className="nav-item">
              <NavLink
                className="nav-link text-light me-2"
                aria-current="page"
                to="contact"
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
