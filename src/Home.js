import React from "react";
import Header from "./components/Header";
import TouristAttractionSection from "./components/TouristAttractionSection";
import FoodBeveragesSection from "./components/FoodBeveragesSection";
import HotelsSection from "./components/HotelsSection";
import CultureHeritageSection from "./components/CultureHeritageSection";

function Home() {
    return (
        <div>
            <Header />
            <TouristAttractionSection />
            <FoodBeveragesSection />
            <CultureHeritageSection />
            <HotelsSection />
        </div>
    );
}

export default Home;
