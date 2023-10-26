import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/css/Global.css";
import ComponentList from "./Component.temp";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<div className="heading__text-l">Home</div>}
          />
          <Route path="/components" element={<ComponentList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
