// import "./App.css";
import React, { useState } from "react";
function App() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="App">
      <h2>Upload Image:</h2>
      <input type="file" onChange={handleChange} />
      <img src={file} />
    </div>
  );
}

export default App;
