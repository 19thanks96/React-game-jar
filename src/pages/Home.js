import { useState } from "react";

function Home() {
  const [text, setText] = useState('Start screen')
  function change() {
    setText('Nasho klatznuv?')
  }
    return (
      <>
        <h1>
          Home
        </h1>
        <p onClick={change}>{text}</p>
      </>
    );
  }
  
  export default Home;