import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Counting from "./components/Counting";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggalMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#253744"
      document.body.style.color = "white"
      showAlert("Dark mode has been enabled","success")
    } else { 
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "#253744"
      showAlert("Light mode has been enabled","success")
    }
  };


  return (
    <Router>
      <Navbar title="RJGAMER" mode={mode} toggalMode={toggalMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to write" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
          {/* <Route exact path="/counting" element={<Counting />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
