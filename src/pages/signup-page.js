import React from "react";
import { useIntl, defineMessages } from "react-intl";
import { NavLink } from "react-router-dom";
import { COLORS } from "../utils/colors";

const messages = defineMessages({
  welcome: {
    id: "store/welcome-message",
    defaultMessage: "",
  },
  name: {
    id: "store/form.name",
    defaultMessage: "",
  },
  email: {
    id: "store/form.email",
    defaultMessage: "",
  },
  confirmEmail: {
    id: "store/form.confirm-email",
    defaultMessage: "",
  },
  password: {
    id: "store/form.password",
    defaultMessage: "",
  },
  confirmRegistration: {
    id: "store/form.action-button.confirm-registration",
    defaultMessage: "",
  },
  withRegistration: {
    id: "store/form.action-button.with-registration",
    defaultMessage: "",
  },
});

const SignupPage = () => {
  const intl = useIntl();

  return (
    <div className="container m-0">
      <div className="row row-cols-sm-1 vw-100 vh-100 gy-3 gy-md-0">
        <div
          className="col-md-4 d-flex align-items-center justify-content-center text-white"
          style={{ minHeight: "25vh", backgroundColor: COLORS.blue }}
        >
          <h5>{intl.formatMessage(messages.welcome)}</h5>
        </div>
        <div className="col-md-8 d-flex align-items-center justify-content-center">
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
                <label htmlFor="confirmEmail" className="form-label">
                  {intl.formatMessage(messages.confirmEmail)}
                </label>
                <input
                  type="email"
                  id="confirmEmail"
                  className="form-control form-control-lg"
                  aria-describedby="confirmEmail"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="senha" className="form-label">
                  {intl.formatMessage(messages.password)}
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  aria-describedby="password"
                  required
                />
              </div>

              <div className="d-grid">
                <NavLink
                  className="btn text-white"
                  style={{ backgroundColor: COLORS.blue }}
                >
                  {intl.formatMessage(messages.confirmRegistration)}
                </NavLink>
              </div>
              <div className="mt-3 text-center">
                <NavLink to="/">
                  {intl.formatMessage(messages.withRegistration)}
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
