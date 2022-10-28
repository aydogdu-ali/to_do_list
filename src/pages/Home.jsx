import React from "react";
import Addtodo from "../components/Addtodo";
import Listtodo from "../components/Listtodo";
import { Button } from "bootstrap-react";
import { useState } from "react";

const Home = () => {
  // iş ekleme butonunu açılışta ekranda göstermemek için show usaStateni tanımladım.
  const [show, setShow] = useState(false);
  // İş ekleme butonunun iş ekleme durumuna göre metin içeriğini değiştirdim.
  const [text, ShowText] = useState("İş Ekle");

  // butonun onclick eventine neler yaptıracağımızı tanımladık.
  const change = (e) => {
    setShow(!show);
    const buttonText = show ? " İş Ekle" : "Gizle";
    ShowText(buttonText);
  };

  return (
    <div>
      <Button
        onClick={() => change()}
        className="fw-bolder"
        variant="primary"
        size="lg"
      >
        {text}
      </Button>

      {show && <Addtodo />}

      <Listtodo />
    </div>
  );
};

export default Home;
