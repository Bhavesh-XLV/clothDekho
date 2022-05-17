import React from "react";
import { Routes, Route } from "react-router-dom";
import Men from "../Men/Men";
import Women from "../Women/Women";
import MenTshirt from "../MenTshirt/MenTshirt";
import MenJeans from "../MenJeans/MenJeans";
import LandingPage from "../LandingPage/LandingPage";
import WomenTshirt from "../WomenTshirt/WomenTshirt";
import WomenJeans from "../WomenJeans/WomenJeans";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men/tshirt" element={<MenTshirt />} />
        <Route path="/men/jeans" element={<MenJeans />} />
        <Route path="/women/tshirt" element={<WomenTshirt />} />
        <Route path="/women/jeans" element={<WomenJeans />} />
      </Routes>
    </div>
  );
};

export default Routers;
