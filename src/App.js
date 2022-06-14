import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, {useState} from 'react';
import Alert from "./components/Alert";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [alert, setalert] = useState(null)
  
  const showAlert = (message, type) => {
    setalert({
      msg :message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  
  const [mode, setmode] = useState("light")

  const toggle = () => {
    if (mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode enabled", "Success :");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "Success :");
    }
  }
  return (
  <>
  <Router>
  <Navbar mode={mode} toggle={toggle}  />
  <Alert alert={alert} />
  <Switch>
    <Route exact path = "/" >
  <div className="container my-3 ">
  <Textform mode={mode} 
  showAlert={showAlert}/>
  </div>
    </Route>
    <Route exact path = "/about">
      <About mode={mode}/>
    </Route>
    <Route exact path = "/contact">
      <ContactUs showAlert={showAlert} mode={mode} />
    </Route>
  </Switch>
  </Router>
  <hr />
  <Footer mode={mode} />
  </>
  );
}
export default App;
