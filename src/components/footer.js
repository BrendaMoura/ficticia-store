import React from "react";
import { useIntl, defineMessages } from "react-intl";
import { NavLink } from "react-router-dom";
import Twitter from "../assets/img/twitter.png";
import Facebook from "../assets/img/facebook.png";
import Instagram from "../assets/img/instagram.png";

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
  copyright: {
    id: "store/footer.copyright",
    defaultMessage: "",
  },
});

const Footer = () => {
  const intl = useIntl();

  return (
    <footer className="container-fluid d-flex flex-column align-items-center justify-content-center position-relative bg-secondary p-5">
      <h5>{intl.formatMessage(messages.title)}</h5>
      <ul className="d-flex flex-row items-footer gap-2 p-0">
        <li>
          <NavLink className="link" to="/home">
            {intl.formatMessage(messages.home)}
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/home/about-us">
            {intl.formatMessage(messages.about)}
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/home/manage-products">
            {intl.formatMessage(messages.manageProducts)}
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/home/contact">
            {intl.formatMessage(messages.contact)}
          </NavLink>
        </li>
      </ul>
      <div className="d-flex flex-row items-footer gap-2">
        <img src={Twitter} alt="twitter" width="30px" height="30px" />
        <img src={Facebook} alt="facebook" width="30px" height="30px" />
        <img src={Instagram} alt="instagram" width="30px" height="30px" />
      </div>
      <p
        className="position-absolute bottom-0"
        style={{ fontSize: "12px", color: "#d3d3d3" }}
      >
        {intl.formatMessage(messages.copyright)}!
      </p>
    </footer>
  );
};

export default Footer;
