import React from "react";
import { NavLink } from "react-router-dom";
import { useIntl, defineMessages } from "react-intl";
import { COLORS } from "../utils/colors";

const messages = defineMessages({
  name: {
    id: "store/form.name",
    defaultMessage: "",
  },
  email: {
    id: "store/form.email",
    defaultMessage: "",
  },
  message: {
    id: "store/form.message",
    defaultMessage: "",
  },
  send: {
    id: "store/form.action-button.send",
    defaultMessage: "",
  },
});

const ContactPage = () => {
  const intl = useIntl();

  return (
    <div className="container-fluid" style={{ height: "calc(100vh - 60px)" }}>
      <div className="row row-cols-sm-1 h-100">
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <div className="min-w-25">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  {intl.formatMessage(messages.name)}
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control form-control-lg"
                  aria-describedby="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  {intl.formatMessage(messages.email)}
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  aria-describedby="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  {intl.formatMessage(messages.message)}
                </label>
                <textarea
                  id="message"
                  className="form-control form-control-lg"
                  aria-label="message"
                  aria-describedby="message"
                  style={{ resize: "none" }}
                  required
                />
              </div>

              <div className="d-grid">
                <NavLink
                  className="btn text-white"
                  style={{ backgroundColor: COLORS.blue }}
                  to="#"
                >
                  {intl.formatMessage(messages.send)}
                </NavLink>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-7 d-flex align-items-center justify-content-center p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254988.01594168533!2d-60.13192452744332!3d-3.044306584881633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bc8b37647b7%3A0x2b485c9ff765a9cc!2sManaus%2C%20State%20of%20Amazonas!5e0!3m2!1sen!2sbr!4v1710380640078!5m2!1sen!2sbr"
            width="100%"
            height="100%"
            className="b-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
