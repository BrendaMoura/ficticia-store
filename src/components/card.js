import React from "react";
import Placeholder from "../assets/img/placeholder-image.png";
import { useNavigate } from "react-router-dom";
import { useIntl, defineMessages, FormattedNumber } from "react-intl";
import { getCurrency } from "locale-currency";
import { COLORS } from "../utils/colors";

const messages = defineMessages({
  addToCart: {
    id: "store/action-button.add-to-cart",
    defaultMessage: "",
  },
});

const Card = ({ product }) => {
  const navigate = useNavigate();
  const intl = useIntl();

  const handleProductDetails = (e) => {
    navigate("/home/product", { state: product });
    e.stopPropagation();
  };

  const handleAddToCart = (e) => {
    navigate("/home/cart", { state: { id: product.id } });
    e.stopPropagation();
  };

  return (
    <div
      className="card"
      style={{ height: "21rem" }}
      onClick={handleProductDetails}
    >
      <img
        className="card-img-top object-fit-cover w-100"
        src={product.images[0] || Placeholder}
        alt={product.name}
        style={{ height: "200px" }}
      />
      <div className="card-body">
        <div className="card-title overflow-hidden" style={{ height: "1.5em" }}>
          <h6>{product.title}</h6>
        </div>
        <p>
          <FormattedNumber
            value={product.price}
            style="currency"
            currency={getCurrency(navigator.language)}
          />
        </p>
        <div className="d-grid">
          <button
            className="btn text-white"
            style={{ backgroundColor: COLORS.blue }}
            onClick={handleAddToCart}
          >
            {intl.formatMessage(messages.addToCart)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
