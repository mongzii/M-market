import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import List from "./routes/Lists";
import Login from "./routes/Login";
import Signup from "./routes/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
