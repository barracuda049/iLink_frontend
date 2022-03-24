import MyPhoto from "./components/body/photos/Me.jpg";

import React, { useState } from "react";
import "./fonts/Fonts.scss";
import "./styles/styles.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";

function App() {
  const [photo, setPhoto] = useState(MyPhoto);
  const [name, setName] = useState("Матвей Скрипкин");

  return (
    <div className="App">
      <Header name={name} photo={photo} />
      <Body name={name} photo={photo} />
      <Footer />
    </div>
  );
}

export default App;
