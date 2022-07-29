import React from "react";
import Sorry from "../Error/Ofline.jpg";

const Ofline = () => {
  return (
    <>
      <div class="row" >
        <img src={Sorry} alt="Sin conexion" class="me-2 log" />
      </div>
    </>
  );
};

export default Ofline;
