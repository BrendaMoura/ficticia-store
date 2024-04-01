import React from "react";
import { useState } from "react";
import { useIntl, defineMessages } from "react-intl";

import Card from "../components/card";
import Pagination from "../components/pagination";

const messages = defineMessages({
  title: {
    id: "store/catalog.title",
    defaultMessage: "",
  },
});

const CatalogPage = () => {
  const [products, setProducts] = useState([]);

  const intl = useIntl();

  return (
    <div className="container w-75 mx-auto mt-5 d-flex flex-column align-items-center">
      <h5 className="fw-bold align-self-start">
        {intl.formatMessage(messages.title)}
      </h5>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 my-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </div>

      <Pagination setProducts={setProducts} />
    </div>
  );
};

export default CatalogPage;
