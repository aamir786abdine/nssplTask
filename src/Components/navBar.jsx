import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "../services/authService";

class NavBar extends Component {
  render() {
    let user = auth.getUser();
    console.log("user", user);
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Employees
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav text-dark col-11">
                <Link className="nav-link" to="/add/emp">
                  Add New Employee
                </Link>
                {user && (
                  <span className="navbar-link">
                    <Link to="/profile" className="nav-link">
                      Your Profile
                    </Link>
                  </span>
                )}
              </div>
              <div className="navbar-nav text-dark col-1">
                {!user && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/Login">
                      Login
                    </Link>
                  </li>
                )}
                {user && (
                  <span className="navbar-link">
                    <Link to="/logout" className="nav-link">
                      Logout
                    </Link>
                  </span>
                )}
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default NavBar;
