import React from "react";
import { NavLink } from "react-router-dom";
import { useIntl, defineMessages } from "react-intl";

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
      className="navbar navbar-expand-sm bg-body-tertiary"
      style={{ height: "60px" }}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home" end>
          {intl.formatMessage(messages.title)}
        </NavLink>
        <button
          className="navbar-toggler"
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
              <NavLink className="nav-link" to="/home" end>
                {intl.formatMessage(messages.home)}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/home/about-us">
                {intl.formatMessage(messages.about)}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/home/manage-products">
                {intl.formatMessage(messages.manageProducts)}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/home/contact">
                {intl.formatMessage(messages.contact)}
              </NavLink>
            </li>
          </ul>
          <button className="btn btn-secondary d-flex" type="submit">
            {intl.formatMessage(messages.logout)}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
