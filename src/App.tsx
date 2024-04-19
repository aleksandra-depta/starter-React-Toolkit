import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Projects from "./routes/home/home.component";

function App() {
  return (
    <Routes>
      <Route path="" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
