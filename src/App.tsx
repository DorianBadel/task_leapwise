import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/css/Global.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Preview from "./pages/Preview";

function App() {
  const isAuth = true;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isAuth ? <Home /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
