import logo from "./logo.svg";
//import "./App.css";
import Login from "./login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./login/Home";
import Signin from "./login/Login";
import Signup from "./component/Signup";
import Carddetails from "./component/Carddetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Carddetails />} /> 
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
