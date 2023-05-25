import React from "react";
import logo from "../../Assets/Singlebag-New-Logo.png";
import "./styles.css";

function NavbarScreen() {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <img
            src={logo}
            alt="..."
            class="img-thumbnail"
            className="navar_logo"
          />
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav" className="navbar_navtexts">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                className="navbar_text"
              >
                Seller
              </a>
              <a class="nav-link" href="#" className="navbar_text">
                Reseller
              </a>
              <a class="nav-link" href="#" className="navbar_text">
                Supplier
              </a>
              <a class="nav-link" href="#" className="navbar_text">
                Features
              </a>
              <a class="nav-link" href="#" className="navbar_text">
                Pricing
              </a>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            className="navbar_button1"
          >
            Login
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            className="navbar_button2"
          >
            Create Store
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavbarScreen;
