import React from "react";
import { FormattedNumber } from "react-intl";
import { getCurrency } from "locale-currency";
import Placeholder from "../../assets/img/placeholder-image.png";

const MinicartItem = ({ product }) => {
  return (
    <section className="container minicart-item">
      <img src={product.image || Placeholder} alt={product.name} />
      <span className="position-relative">
        <h5>{product.name}</h5>
        <p>
          <FormattedNumber
            value={product.price}
            style="currency"
            currency={getCurrency(navigator.language)}
          />
        </p>
        <span
          className="d-flex flex-row justify-content-between align-items-center p-0"
          id="minus-plus"
        >
          <button className="btn p-0">
            <i className="bi bi-dash-lg"></i>
          </button>
          <p className="m-0">{product.quantity}</p>
          <button className="btn p-0">
            <i className="bi bi-plus-lg"></i>
          </button>
        </span>

        <button className="btn p-0 position-absolute top-0 end-0">
          <i className="bi bi-trash3"></i>
        </button>
      </span>
    </section>
  );
};

export { MinicartItem };
