import React, { useState, useEffect } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  //const [mensaje, setMensaj] = useState("");
  //const [usuarios, setUsuarios] = useState([]);
  // const [usuario, setUsuarioj] = useState({});
  const [contador, setContador] = useState(initial);
  const [setup, setSetup] = useState(0);

  useEffect(() => {
    console.log(" se ejecuto el useEffect");
    setTimeout(() => {
      setSetup(setup + 1);
    }, 2000);
  }, [contador]);


  const Agregador = () => {
    if (contador < stock) setContador(contador + 1);
  };
  const restador = () => {
    if (contador > 0) setContador(contador - 1);
  };
  const resetear = () => {
    setContador(1);
  };
  const manejaElAviso = () => {
    onAdd(contador);
  };
  return (
    <>
      <div class="container">
        <div class="row row">
         <div>
            <div class="filter bg-light mb-3 p-3">
              <hr />
              <div class="container">
                <div class="row">
                  <div class="col">
                    <button
                      onClick={restador}
                      type="button"
                      class="btn btn-secondary"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Quite una unidad del carrito"
                    >
                      -
                    </button>
                  </div>
                  <div class="col">
                    <h3>{contador}</h3>
                  </div>
                  <div class="col">
                    <button
                      onClick={Agregador}
                      type="button"
                      class="btn btn-secondary"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="Agregue una unidad al Carrito"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={resetear}
                class="btn btn-outline-secondary w-100 mb-2"
              >
                Resetear el carrito a 1
              </button>
            </div>

            <div>
              <button
                onClick={manejaElAviso}
                class="btn btn-outline-primary w-100"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
