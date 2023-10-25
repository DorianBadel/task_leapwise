import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/css/Global.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<div className="heading__text-l">Home</div>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
