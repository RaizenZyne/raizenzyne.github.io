import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home.tsx";
import { Skills } from "../pages/Skills.tsx";
import { About } from "../pages/About.tsx";
import { Personal } from "../pages/Personal.tsx";
import Navigation from "./Navigation.tsx";

export function App() {
  const loader = document.getElementById("matrix");
  if (loader) {
    loader.classList.add("move-out");
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="*" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
