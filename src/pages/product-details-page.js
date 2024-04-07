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
    <div
      className="container container-product"
      style={{ height: "calc(100vh - 60px)" }}
    >
      <div className="row row-cols-1 row-cols-sm-2 h-100">
        <div className="col">
          <div
            className="carousel carousel-dark slide p-0 h-100"
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
        </div>
        <div className="col p-5">
          <h2 className="fw-bold">{product.title}</h2>
          <span className="stars">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
          </span>
          <p>{product.description}</p>
          <p
            className="fw-bold"
            style={{ color: COLORS.blue, fontSize: "20px" }}
          >
            <FormattedNumber
              value={product.price}
              style="currency"
              currency={getCurrency(navigator.language)}
            />
          </p>
          <button className="btn text-white" id="btn-add-cart">
            {intl.formatMessage(messages.addToCard)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
