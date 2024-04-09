import React from "react";
import { useIntl, defineMessages, FormattedNumber } from "react-intl";
import { getCurrency } from "locale-currency";
import { EmptyMinicart } from "./empty-minicart";
import { MinicartItem } from "./minicart-item";

const messages = defineMessages({
  title: {
    id: "store/minicart.title",
    defaultMessage: "",
  },
  subtotal: {
    id: "store/minicart.subtotal",
    defaultMessage: "",
  },
  continueShopping: {
    id: "store/minicart.continue-shopping",
    defaultMessage: "",
  },
  checkout: {
    id: "store/minicart.go-to-checkout",
    defaultMessage: "",
  },
});

const Minicart = () => {
  const intl = useIntl();

  const cart = {
    totalProducts: 5,
    totalQuantity: 10,
    total: "2000",
    products: [
      {
        name: "Penteadeira",
        price: 130,
        quantity: 3,
      },
      { name: "Caderno", price: 13, quantity: 25 },
      { name: "Lapis", price: 3.5, quantity: 100 },
    ],
  };

  const cart2 = { totalProducts: 0, totalQuantity: 0, total: 0, products: [] };

  const loadProducts = () => {
    if (cart.totalProducts === 0) {
      return <EmptyMinicart />;
    }

    return cart.products.map((product) => <MinicartItem product={product} />);
  };

  return (
    <div
      className="offcanvas offcanvas-end"
      tabindex="-1"
      id="cartsidebar"
      aria-labelledby="cartSideBar"
      data-bs-backdrop="true"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="cartSideBar">
          {intl.formatMessage(messages.title)}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body pe-0 pt-0 position-relative">
        <section id="minicart-items">{loadProducts()}</section>
        <section className="minicart-footer position-absolute bottom-0 pe-3 pb-4">
          <p>
            {`${intl.formatMessage(messages.subtotal)}: `}
            <FormattedNumber
              value={cart.total}
              style="currency"
              currency={getCurrency(navigator.language)}
            />
          </p>
          <button className="btn btn-outline-secondary">
            {intl.formatMessage(messages.continueShopping)}
          </button>
          <button className="btn">
            {intl.formatMessage(messages.checkout)}
          </button>
        </section>
      </div>
    </div>
  );
};

export { Minicart };
