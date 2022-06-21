import "./App.css";
import Home from "@pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "@pages/Dashboard/Dashboard";
import Header from "@components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
