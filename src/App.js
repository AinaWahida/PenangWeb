
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
                <Route path="/" element={<Home />} />  {/*Route to home page*/}
                <Route path="/tourist-attraction" element={<TouristAttractions />} />  {/*Route to tourist attraction page*/}
                <Route path="/food-beverages" element={<FoodBeverages />} />  {/*Route to food and beverages page*/}
                <Route path="/hotels" element={<Hotels />} />  {/*Route to hotel page*/}
                <Route path="/culture-heritage" element={<CultureHeritage />} />  {/*Route to culture and heritage page*/}
            </Routes>
        </Router>
    );
}

export default App;
