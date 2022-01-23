import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";

const NavBar = () => {

const [navHeight, setNavHeight] = useState(20);
  return (
    <nav
      id="menu"
      class="navbar navbar-default navbar-fixed-top"
      style={{ backgroundColor: "white",height:'65px' }}
    >
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span> <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <div>
          <ul class="nav navbar-nav navbar-right">
          <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
            <li>
              <a href="#about" class="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" class="page-scroll">
                Services
              </a>
            </li>
            <li>
              <Link to="/furnitures">Furniture</Link>
            </li>
            <li>
              <a href="#contact" class="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;