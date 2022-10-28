import React from "react";
import picture from "../assets/picture.jpg";


const Header = () => {

 

  return (
    <div className=" d-flex text-center justify-content-center mt-5 p-3">
      <img className ="mt-1"src={picture} alt="" width="8%" />
      <h4 className="mx-4 d-flex align-items-center text-danger fw-bolder">YOUR TO DO LİST TODAY</h4>
    </div>
  );
};

export default Header;
