import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import ClipLoader from "react-spinners/ClipLoader";



  const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { categoryID } = useParams();

  useEffect(() => {
    const URL = categoryID
      ? `https://fakestoreapi.com/products/category/${categoryID}`
      : "https://fakestoreapi.com/products";

    const getitems = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setProducts(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getitems();
  }, [categoryID]);

  return (
    <>
      <h1>{greeting}</h1>
      {loading ? (
        <span>
          <ClipLoader color={"green"} loading={loading} size={150} />
        </span>
      ) : error ? (
        <h1>Lo sentimos hubo un error</h1>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};


export default ItemListContainer;
