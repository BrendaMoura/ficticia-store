import React from "react";
import { useIntl, defineMessages } from "react-intl";
import EmptyCart from "./../../assets/img/empty-cart.png";

const messages = defineMessages({
  title: {
    id: "store/minicart.empty.title",
    defaultMessage: "",
  },
  content: {
    id: "store/minicart.empty.content",
    defaultMessage: "",
  },
});

const EmptyMinicart = () => {
  const intl = useIntl();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center pe-3 w-100 h-100">
      <img src={EmptyCart} alt="Empty Cart" width={"50%"} height={"50%"} />
      <h5>{intl.formatMessage(messages.title)}</h5>
      <p>{intl.formatMessage(messages.content)}</p>
    </div>
  );
};

export { EmptyMinicart };
