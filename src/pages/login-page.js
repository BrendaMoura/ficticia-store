import React from "react";
import { NavLink } from "react-router-dom";
import { useIntl, defineMessages } from "react-intl";

const messages = defineMessages({
  welcome: {
    id: "store/welcome-message",
    defaultMessage: "",
  },
  email: {
    id: "store/form.email",
    defaultMessage: "",
  },
  password: {
    id: "store/form.password",
    defaultMessage: "",
  },
  login: {
    id: "store/form.action-button.login",
    defaultMessage: "",
  },
  withoutRegistration: {
    id: "store/form.action-button.without-registration",
    defaultMessage: "",
  },
});

const LoginPage = () => {
  const intl = useIntl();

  return (
    <div className="container m-0">
      <div className="row row-cols-sm-1 vw-100 vh-100">
        <div className="col-md-4 bg-body-secondary d-flex align-items-center justify-content-center">
          <h5>{intl.formatMessage(messages.welcome)}</h5>
        </div>
        <div className="col-md-8 d-flex align-items-center justify-content-center">
          <div className="min-w-25">
            <form>
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
                <label htmlFor="password" className="form-label">
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
                <NavLink className="btn btn-success" to="/home">
                  {intl.formatMessage(messages.login)}
                </NavLink>
              </div>
              <div className="mt-3 text-center">
                <NavLink to="/signup">
                  {intl.formatMessage(messages.withoutRegistration)}
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
