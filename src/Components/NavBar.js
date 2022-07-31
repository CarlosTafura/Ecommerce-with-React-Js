import React, { useContext, useState, useEffect } from "react";
import logo from "../Img/onlineShop.jpg";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";
import { contexto } from "../context/CartContext";

const NavBar = ({ name, lastname }) => {
  const categorias = [
    { link: "Electronics", route: "categories/electronics", id: "electronics" },
    { link: "Jewelery", route: "categories/jewelery", id: "jewelery" },
    {
      link: "Men's clothing",
      route: "categories/men's clothing",
      id: "men's clothing",
    },
    {
      link: "Women's clothing",
      route: "categories/women's clothing",
      id: "women's clothing",
    },
  ];
  const { cartQuantity } = useContext(contexto);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/">
          <img src={logo} alt="logo" class="m-1 log " width="110" />
        </NavLink>
        <div class="container px-4 px-lg-5">
          <Link class="navbar-brand" to={"/"}>
            Onlineshop
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <Link class="nav-link active" to={"/"}>
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to={"/"} >All Products</Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item">Popular Items</a>
                  </li>
                  <li>
                    <a class="dropdown-item">New Arrivals</a>
                  </li>
                </ul>
              </li>
            </ul>

            <nav class="raw text-center">
              {categorias.map((element, indice) => {
                return (
                  <NavLink className="m-4" key={indice} to={element.route}>
                    {element.link}
                  </NavLink>
                );
              })}
            </nav>

            <Link class="btn btn-outline-dark" to={"/cart"}>
              <i class="bi-cart-fill me-1"></i>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">
                {cartQuantity}
              </span>
            </Link>

            <a class="fa fa-bars fa-2x m-2">
              <NavLink to="/cart">
                <CartWidget />
              </NavLink>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
