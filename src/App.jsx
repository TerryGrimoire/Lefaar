import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Actions from "./pages/Actions";
import Recherches from "./pages/Recherches";
import Mentions from "./pages/Mentions";
import Erreur404 from "./pages/Erreur404";

import "./App.css";

function App() {
  const helmet = {
    title: "Le Faar",
    href: "https://lefaar.re",
    description: "Change description",
  };

  return (
    <BrowserRouter>
      <Header helmet={helmet} />
      <Routes>
        <Route path="/" element={<Home helmet={helmet} />} />
        <Route path="/Recherches" element={<Recherches helmet={helmet} />} />
        <Route path="/Actions" element={<Actions helmet={helmet} />} />
        <Route path="/Mentions" element={<Mentions />} />
        <Route path="/404" element={<Erreur404 helmet={helmet} />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
