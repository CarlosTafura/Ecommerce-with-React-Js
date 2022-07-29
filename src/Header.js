import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faCartShopping} />
    </>
  );
};

export default Header;
