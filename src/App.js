
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TouristAttractions from "./components/Attraction/TouristAttractions";
import FoodBeverages from "./components/Food/FoodBeverages";
import Hotels from "./components/Hotel/Hotels";
import CultureHeritage from "./components/Culture/CultureHeritage";
import Home from "./Home"; // Main sections combined in one Home


function App() {
    return (
        <Router>
            <Routes>
                {/* The main page with Header and sections */}
                <Route path="/" element={<Home />} />

                {/* Individual pages without the Header */}
                <Route path="/tourist-attraction" element={<TouristAttractions />} />
                <Route path="/food-beverages" element={<FoodBeverages />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/culture-heritage" element={<CultureHeritage />} />
            </Routes>
        </Router>
    );
}

export default App;
