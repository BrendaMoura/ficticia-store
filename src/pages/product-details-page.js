import React from "react";
import { useLocation } from "react-router-dom";
import { useIntl, defineMessages, FormattedNumber } from "react-intl";
import { getCurrency } from "locale-currency";
import { COLORS } from "../utils/colors";

const messages = defineMessages({
  addToCard: {
    id: "store/action-button.add-to-cart",
    defaultMessage: "",
  },
});

const ProductDetailsPage = () => {
  const location = useLocation();
  const product = location.state;
  const intl = useIntl();

  return (
    <div className="container-fluid" style={{ height: "calc(100vh - 60px)" }}>
      <div className="row row-cols-1 row-cols-sm-2 h-100">
        <div
          className="col carousel carousel-dark slide p-0 box"
          id="carouselProductImages"
        >
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100">
              <img
                src={product.thumbnail}
                className="d-block h-100 w-100"
                alt={product.title}
              />
            </div>
            {product.images.map((url) => (
              <div className="carousel-item h-100">
                <img
                  src={url}
                  className="d-block h-100 w-100"
                  alt={product.title}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselProductImages"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselProductImages"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="col p-5 box">
          <h5 className="fw-bold">{product.title}</h5>
          <p>{product.description}</p>
          <p>
            <FormattedNumber
              value={product.price}
              style="currency"
              currency={getCurrency(navigator.language)}
            />
          </p>
          <div className="d-flex justify-content-end">
            <button
              className="btn text-white"
              style={{ backgroundColor: COLORS.blue }}
            >
              {intl.formatMessage(messages.addToCard)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
