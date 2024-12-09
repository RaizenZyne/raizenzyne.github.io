import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home.tsx";
import { Skills } from "../pages/Skills.tsx";
import { About } from "../pages/About.tsx";
import { Personal } from "../pages/Personal.tsx";
import Navigation from "./Navigation.tsx";

export function App() {
  const root = document.getElementById("root");
  const loader = document.getElementById("matrix");
  if (loader && root) {
    loader.classList.add("move-out");
    loader.onanimationend = () => {
      loader.remove();
      root.classList.add("fade");
    };
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/personal" element={<Personal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
