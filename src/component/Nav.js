import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
const navigate = useNavigate();
function handelClick(e) {

  e.preventDefault();

  if (localStorage.length === 0) {
    navigate("/Register");
  } else {
    navigate("/TaskPage");
  }
}


    return (
      <div>
        <header>
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg fixed-top mask-custom shadow-0">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <span style={{ color: "#5e9693" }}>To</span>
                <span style={{ color: "#000" }}>Do</span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={(e) => handelClick(e)}
                      className="nav-link"
                  
                    >
                      Task
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="AboutUs">
                      About us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="ContactUs">
                      Contact us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Register">
                      Sign up
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav d-flex flex-row">
                  <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="#!">
                      <i className="fas fa-shopping-cart" />
                    </a>
                  </li>
                  <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="#!">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="#!">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Navbar */}

          <>
            {/* Hero */}

            {/* Hero */}
          </>
        </header>
      </div>
    );
}

export default Nav