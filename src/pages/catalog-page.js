import React from "react";
import { useEffect, useState } from "react";
import { useIntl, defineMessages } from "react-intl";

import Card from "../components/card";

const messages = defineMessages({
  title: {
    id: "store/catalog.title",
    defaultMessage: "",
  },
});

const CatalogPage = () => {
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
    <div className="container w-75 mx-auto mt-5">
      <h5 className="fw-bold">{intl.formatMessage(messages.title)}</h5>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 my-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
