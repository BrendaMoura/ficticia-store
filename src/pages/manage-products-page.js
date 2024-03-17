import React from "react";
import { useEffect, useState } from "react";
import { useIntl, defineMessages, FormattedNumber } from "react-intl";
import { getCurrency } from "locale-currency";
import { COLORS } from "../utils/colors";

const messages = defineMessages({
  title: {
    id: "admin/manage-product.title",
    defaultMessage: "",
  },
  id: {
    id: "admin/manage-product.id",
    defaultMessage: "",
  },
  product: {
    id: "admin/manage-product.product",
    defaultMessage: "",
  },
  price: {
    id: "admin/manage-product.price",
    defaultMessage: "",
  },
  stock: {
    id: "admin/manage-product.stock",
    defaultMessage: "",
  },
  actions: {
    id: "admin/manage-product.actions",
    defaultMessage: "",
  },
  newProduct: {
    id: "admin/manage-product.action-button.new-product",
    defaultMessage: "",
  },
  edit: {
    id: "store/action-button.edit",
    defaultMessage: "",
  },
  delete: {
    id: "store/action-button.delete",
    defaultMessage: "",
  },
  save: {
    id: "store/manage-product.action-button.save-product",
    defaultMessage: "",
  },
});

const ManageProductsPage = () => {
  const [products, setProducts] = useState([]);
  const intl = useIntl();

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="container min-w-75 mx-auto mt-5">
        <h5 className="fw-bold">{intl.formatMessage(messages.title)}</h5>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-warning btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#cadastrarProdutos"
          >
            {intl.formatMessage(messages.newProduct)}
          </button>
        </div>

        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th scope="col">{intl.formatMessage(messages.id)}</th>
              <th scope="col">{intl.formatMessage(messages.product)}</th>
              <th scope="col">{intl.formatMessage(messages.price)}</th>
              <th scope="col">{intl.formatMessage(messages.stock)}</th>
              <th scope="col">{intl.formatMessage(messages.actions)}</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <th scope="row">{product.id}</th>
                <td>{product.title}</td>
                <td>
                  <FormattedNumber
                    value={product.price}
                    style="currency"
                    currency={getCurrency(navigator.language)}
                  />
                </td>
                <td>{product.stock}</td>
                <td>
                  <div className="d-grid gap-2 d-lg-flex">
                    <button className="btn btn-primary btn-sm">
                      {intl.formatMessage(messages.edit)}
                    </button>
                    <button className="btn btn-danger btn-sm">
                      {intl.formatMessage(messages.delete)}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="cadastrarProdutos">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {intl.formatMessage(messages.newProduct)}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="product" className="form-label">
                    {intl.formatMessage(messages.product)}
                  </label>
                  <input
                    type="text"
                    id="product"
                    className="form-control form-control-lg"
                    aria-describedby="product"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    {intl.formatMessage(messages.price)}
                  </label>
                  <input
                    type="text"
                    id="price"
                    className="form-control form-control-lg"
                    aria-describedby="price"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="stock" className="form-label">
                    {intl.formatMessage(messages.stock)}
                  </label>

                  <input
                    type="number"
                    id="stock"
                    className="form-control form-control-lg"
                    aria-describedby="stock"
                    required
                  />
                </div>

                <div className="d-grid">
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: COLORS.blue }}
                  >
                    {intl.formatMessage(messages.save)}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProductsPage;
