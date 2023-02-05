import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import FullHero from "./Pages/FullHero";
import Comics from "./components/Comics";
import FullComics from "./Pages/FullComics";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero/:id" element={<FullHero />} />
        <Route path="/comics/:id" element={<FullComics />} />
        <Route path="/Comics" element={<Comics />} />
      </Routes>
    </div>
  );
}

export default App;
