import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/css/Global.css";
import ComponentList from "./Component.temp";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
