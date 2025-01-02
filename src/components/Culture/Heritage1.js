import React, { useState } from "react";

function Heritage1(){
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const openModal = (imageSrc) => {
        setCurrentImage(imageSrc);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentImage("");
    };

    return (
        <div className="section">
            <h1> Kek Lok Si Temple</h1>
            <div className="part1">
                <p>
                    Kek Lok Si Temple, also known as the "Temple of Supreme Bliss," is one of the largest and most renowned Buddhist temples in Southeast Asia, located on Penang Hill. Built over several decades, this temple complex is a magnificent blend of Chinese, Thai, and Burmese architectural styles. The temple is famous for its grand architecture, including the seven-story pagoda, the towering statue of the Goddess of Mercy (Kuan Yin), and beautiful gardens that attract visitors from all over the world. Kek Lok Si is not just a religious site but also a place for cultural exchange and pilgrimage, especially during the Chinese New Year when thousands of lights illuminate the temple during the annual "lighting up" ceremony.
                </p>
            </div>

            <div className="part2">
                <div className="collage">
                    <div className="right">
                        <img src={require("./images-heritage/heritage4.2.jpg")} alt="heritage1" onClick={ () => openModal(require("./images-heritage/heritage4.2.jpg"))} />
                </div>
            </div>
            </div>
        </div>
    )
}