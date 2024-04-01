import React, { useEffect, useState } from "react";
import { useIntl, defineMessages } from "react-intl";

const messages = defineMessages({
  previous: {
    id: "store/pagination.previous",
    defaultMessage: "",
  },
  next: {
    id: "store/pagination.next",
    defaultMessage: "",
  },
});

const Pagination = ({ setProducts }) => {
  const intl = useIntl();

  const [currentPage, setCurrentPage] = useState(1);
  const maxItemsPerPage = 12;
  const nItems = 100;
  const nPages = Math.ceil(nItems / maxItemsPerPage);
  const nSkipItems = currentPage * maxItemsPerPage - maxItemsPerPage;
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${maxItemsPerPage}&skip=${nSkipItems}`
    );

    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            href="#"
            className="page-link"
            onClick={() => {
              changePage(currentPage - 1);
            }}
          >
            {intl.formatMessage(messages.previous)}
          </a>
        </li>

        {numbers.map((number, index) => (
          <li
            className={`page-item ${currentPage === number ? "active" : ""}`}
            key={index}
          >
            <a
              href="#"
              className="page-link"
              onClick={() => {
                changePage(number);
              }}
            >
              {number}
            </a>
          </li>
        ))}

        <li className={`page-item ${currentPage === nPages ? "disabled" : ""}`}>
          <a
            href="#"
            className="page-link"
            onClick={() => {
              changePage(currentPage + 1);
            }}
          >
            {intl.formatMessage(messages.next)}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
