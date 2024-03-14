import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CatalogPage from "./catalog-page";
import ManageProductsPage from "./manage-products-page";
import ProductDetailsPage from "./product-details-page";
import ContactPage from "./contact-page";
import AboutUsPage from "./about-page";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/manage-products" element={<ManageProductsPage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default HomePage;
