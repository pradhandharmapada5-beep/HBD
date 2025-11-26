import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Birthday from "./pages/Birthday";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/birthday" element={<Birthday />} />
      </Routes>
    </Router>
  );
}

export default App;
