
import Addtodo from "../components/Addtodo";
import Listtodo from "../components/Listtodo";
import axios from "axios";
import { useState,useEffect } from "react";

const Home = () => {
  // iş ekleme butonunu açılışta ekranda göstermemek için show usaStateni tanımladım.
  const [show, setShow] = useState(false);
  // İş ekleme butonunun iş ekleme durumuna göre metin içeriğini değiştirdim.
  const [text, ShowText] = useState("İş Ekle");

  // Api den gelen veriyi karşılamak için state tanımladım
  const [task, setTask] = useState([])
  const url ="https://635c7e3af0bc26795bffa10b.mockapi.io/api/task"

  // butonun onclick eventine neler yaptıracağımızı tanımladık.
  const change = (e) => {
    setShow(!show);
    const buttonText = show ? " İş Ekle" : "Gizle";
    ShowText(buttonText);
  };

// APİ den veri çekme fonksiyonu
const getTask=async()=>{
  //veriyi descrutring yaptım. 
  const {data}=await axios(url)
  setTask(data);
  console.log(data)
}

// Api'den veriyi ilk önce bir kere çağırmak için
// useEffect kullandım
useEffect(() => {
  getTask()
},[])


  return (
    <div>
       <button 
      onClick={() => change()}
      className=" btn btn-warning">{text}</button>
          

      {show && <Addtodo  getTask={getTask}/>}


{/*Api den gelen veriyi DOM da göstermek için veriyi componente gönderiyorum*/}
      <Listtodo task = {task} getTask={getTask}/>
    </div>
  );
};

export default Home;
