import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { contexto } from "../context/CartContext";




const Item = ({ product }) => {

  const cartContext = useContext(contexto);
  const {addProduct} = useContext(contexto);
  console.log(cartContext);
  

  const URL = `/product/${product.id}`;

  const {usuarios,addUsuario} = useContext(contexto);

  const manejarClick = () => {
    addUsuario();
  }

  return (
    <div className="col-lg-4">
      <div className="text-center card-box">
        <div className="member-card pt-2 pb-2">
          <div className="thumb-lg member-thumb mx-auto">
            <img
              src={product.image}
              className="img-thumbnail "
              alt="profile-image"
            />
          </div>
          <div className="">
            <h4>{product.title}</h4>
            <p>Precio: $ {product.price}</p>
            <Link to={URL}>
            <a className="btn btn-primary" href="#" role="button">Ver Detalle</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
