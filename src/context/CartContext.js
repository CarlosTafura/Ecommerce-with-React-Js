import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    updateProductsQty();
  })
  const addProduct = (product, qty) => {
     const newProduct = {
       ...product,
       qty
     };
     const productFind = cart.find(product => product.id === newProduct.id);
     productFind ? updateProduct(productFind, qty): setCart([...cart,newProduct]);
  };
  const deleteProduct = (id) => {
    
    if (cart.length > 0) {
			const updateItems = cart.filter(function (cart){
				return cart.productId !== id;
			});
			setCart(updateItems);
		}
      //Usar un filter para eliminar el id indicado
    console.log("esta funcion borra usuarios");
  };
  const updateProduct = (product, qty) => {
    const index = cart.indexOf(product);
    const aux = [...cart];
    aux[index].qty += qty;//aux[index].qty = aux[index].qty + qty;
    setCart(aux);
  };
  const IsinCart = (id) => {
      return false;
  };
  const updateProductsQty = () => {
    let quantity = 0;
    cart.forEach(product => {
      quantity += product.qty;
    });
    setCartQuantity(quantity);
  }

  const clearCart = () => {
    setCart([]);
  }

  const ContextValue = {
    cart,
    cartQuantity,
    addProduct,
    deleteProduct,
    IsinCart,
    clearCart,
    updateProductsQty
  }

  return (
    <Provider value={ContextValue}>
      {children}
    </Provider>
  );
};

export default CustomProvider;


/*const CustomProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([
    { nombre: "Ale", id: 1 },
    { nombre: "Juan", id: 2 }
  ]);

   const addUsuario = (info) => {
      //opcion 1, copiar el array por algun metodo valido, hacer un push a la copia y asignarlo con el setEstado
      //opcion 2 (MEJOR OPCION) hacer uso de spread
    console.log("esta funcion añade usuarios");
  };

  const deleteUsuario = (id) => {
      //Usar un filter para eliminar el id indicado
    console.log("esta funcion borra usuarios");
  };

  const IsinUsuarios = (id) => {
      //usar un Find para determinar si un objeto existe dentro del array
  };

  const getCantidadUsuarios = () => {
      //foraech
    console.log("esta funcion devuelve la cantidad de usarios");
  };

  const clearLista = () => {
    setUsuarios([]);
  }

  return (
    <Provider
      value={{ usuarios, addUsuario, deleteUsuario, getCantidadUsuarios, clearLista }}
    >
      {children}
    </Provider>
  );
};*/


