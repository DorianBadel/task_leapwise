import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/css/Global.css";
import ComponentList from "./Component.temp";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  const isAuth = true;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isAuth ? <Home /> : <Login />} />
          <Route path="/components" element={<ComponentList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
