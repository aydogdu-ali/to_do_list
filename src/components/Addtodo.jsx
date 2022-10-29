import axios from "axios";
import { useState } from "react";

const Addtodo = ({ getTask }) => {
  // inputtan girilen değerleri statete tutuyoruz.
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  // girilen veriyi api ye geri gönderiyoruz.
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    console.log("task:", task);
    console.log("date:", date);
    // gönderme fonksiyonu-post işlemi
    addNewTodo(newTask);
    setTask("");
    setDate("");
  };

  // veriyi Api ye gönderme fonksiyonunu tanımlıyorum
  const addNewTodo = async (newTask) => {
    const url = "https://63518c4d3e9fa1244e618a25.mockapi.io/api/list";
    try {
      await axios.post(url, newTask);
    } catch (error) {
      console.log(error);
    }

    getTask();
  };

  return (
    <div className="mt-5 ">
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Yapılacak İş
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="lütfen işi giriniz"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            {" "}
            Tarih{" "}
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button className="btn btn-warning"> Kaydet</button>
      </form>
    </div>
  );
};

export default Addtodo;
