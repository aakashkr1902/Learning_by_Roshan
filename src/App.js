import React from "react";
import Headers from "./component/Header"

function App() {
  const name = "Aakesh"

  return (
    <div className="App">
      <header className="App-header">
      <Headers names={name}/>
      </header>
    </div>
  );
}

export default App;
