import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { contexto } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const [finalized, setFinalized] = useState(false);
  const { addProduct } = useContext(contexto);

  const onAdd = (count) => {
    addProduct(product, count);
    console.log(`Se agregaran ${count} productos al carrito`);
    setFinalized(true);
  };



  return (
    <div className="row justify-content-md-center">
      <div className="text-center card-box">
        <div className="member-card pt-2 pb-4">
          <div className="mx-auto">
            <img
              src={product.image}
              className="rounded-circle "
              alt="profile-image"
              width="200"
            />
          </div>
          <div>
            <h4>{product.title}</h4>
            <p>Precio: $ {product.price}</p>
            <p>{product.description}</p>
            <p>{product.description}</p>
            <div className="row justify-content-md-center">
              <div class="col-3">
                {!finalized ? (
                  <ItemCount onAdd={onAdd} stock={product.stock} initial={1} />
                ) : (
                  <Link to="/cart">
                    <a className="btn btn-primary" href="#" role="button">
                      Finalizar Compra
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
