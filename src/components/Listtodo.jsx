import axios from "axios";
import React from "react";
import { TiDelete } from "react-icons/ti";

// Api den gelen veriyi dom da yazdıran component
const Listtodo = ({ task,getTask }) => {


// listeden istediğimiz görevi sildirmek için api isteği gönderiyorum.
const deleteTask = async (id)=>{

  const url ="https://635c7e3af0bc26795bffa10b.mockapi.io/api/task"

  try {
    await axios.delete(`${url}/${id}`)

  } catch (error) {
    
  }

 getTask()
}








  return (
    <div className="container w-50 ">
      <div className="p-3">
        {/* gelen veriyi map yöntemi ile decstruc yapıyorum*/}
        {task.map((task) => {
          const { id, Date, list } = task;
          return (
            <div
              key={id}
              className=" container mt-2 d-flex justify-content-between bg-info rounded-5 "
            >
              <div className="text-center">
                <h4 className="mt-4">{list}</h4>
                <p className="text-white fs-5 text-left ">{Date}</p>
              </div>
              <div className="mt-4">
                <TiDelete
                onClick={()=> deleteTask(id)}
                  style={{
                    cursor: "pointer",
                    marginRight: "2rem",
                    color: "brown",
                  }}
                  size={35}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Listtodo;
