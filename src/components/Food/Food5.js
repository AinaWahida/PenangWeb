import React, { useState } from "react";
import image1 from './images/image1.1.jpg';
import image2 from './images/image1.2.jpg';
import image3 from './images/image1.3.jpg';
import image4 from './images/image1.4.jpg';

function Food5() {
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
        <p>Food2</p>

    );
}

export default Food5;
