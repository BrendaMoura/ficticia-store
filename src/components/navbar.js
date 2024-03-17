import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useIntl, defineMessages } from "react-intl";
import { COLORS } from "../utils/colors";

const messages = defineMessages({
  title: {
    id: "store/store-title",
    defaultMessage: "",
  },
  home: {
    id: "store/navbar.home",
    defaultMessage: "",
  },
  about: {
    id: "store/navbar.about",
    defaultMessage: "",
  },
  manageProducts: {
    id: "store/navbar.manage-products",
    defaultMessage: "",
  },
  contact: {
    id: "store/navbar.contact",
    defaultMessage: "",
  },
  logout: {
    id: "store/action-button.logout",
    defaultMessage: "",
  },
});

const Navbar = () => {
  const intl = useIntl();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-custom"
      style={{ backgroundColor: COLORS.blue }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/home" end>
          {intl.formatMessage(messages.title)}
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/home" end>
                {intl.formatMessage(messages.home)}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/home/about-us">
                {intl.formatMessage(messages.about)}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/home/manage-products"
              >
                {intl.formatMessage(messages.manageProducts)}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/home/contact">
                {intl.formatMessage(messages.contact)}
              </NavLink>
            </li>
          </ul>
          <button className="btn btn-light d-flex" type="submit">
            {intl.formatMessage(messages.logout)}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
