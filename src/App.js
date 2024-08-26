import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Users/Register";
import Login from "./components/Users/Login";
import Home from "./components/Users/Home";
import Navbar from "./components/Users/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
