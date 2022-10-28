import React from "react";
import {TiDelete} from "react-icons/ti";
const Listtodo = ({ task }) => {
  return (
    <div className="container w-50">
      <div>
        {task.map((task) => {
          const { id, Date, list } = task;
          return (
            <div key={id} className=" container mt-2 d-flex justify-content-between bg-info rounded-5">
              <div className="text-center">
           
                <h4  className ="mt-4">{list}</h4>
                <p className= "text-white fs-5 text-left">{Date}</p>
              </div>
              <div className ="mt-4">
                <TiDelete  style = {{cursor:"pointer",
              marginRight:"2rem",color:"brown"}}size={35} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Listtodo;
