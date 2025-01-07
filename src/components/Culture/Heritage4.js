import React, { useState } from "react";

function Heritage4() {
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
        <div className="heritageSection">
            <h1> Armenian Street</h1>
            <div className="Part1">
                <div className="image-container">
                    <div className="right-image">
                        <img
                            src={require("./images-heritage/heritage4.2.jpg")}
                            alt="Armenian 1"
                            onClick={() => openModal(require("./images-heritage/heritage4.2.jpg"))}
                        />
                        <img
                            src={require("./images-heritage/heritage4.5.jpg")}
                            alt="Armenian 2"
                            onClick={() => openModal(require("./images-heritage/heritage4.5.jpg"))}
                        />
                    </div>

                    <div className="left-image">
                        <img
                            src={require("./images-heritage/heritage4.6.webp")}
                            alt="Armenian 3"
                            onClick={() => openModal(require("./images-heritage/heritage4.6.webp"))}
                        />
                        <img
                            src={require("./images-heritage/heritage3.3.png")}
                            alt="Armenian 4"
                            onClick={() => openModal(require("./images-heritage/heritage3.3.png"))}
                        />
                    </div>
                </div>

                <div className="description-container">
                    <p>
                        Armenian Street, or Lebuh Armenian, is a vibrant cultural hub in the heart of George Town, known for its colorful street art and rich history.
                        The street is lined with heritage shophouses, many of which have been converted into art galleries, cafes, and boutique shops.
                        Visitors can enjoy a leisurely stroll while discovering striking murals, including the famous "Little Children on a Bicycle" by Ernest Zacharevic.
                        This lively street offers a perfect blend of history, art, and culture, making it a favorite spot for tourists and locals alike.
                        With its blend of old-world charm and contemporary creativity, Armenian Street truly captures the spirit of George Town’s ever-evolving cultural scene.
                    </p>
                </div>
            </div>

            <div className="Part2">
                <div className="description-container">
                    <p>
                        Exploring Armenian Street is free of charge, allowing visitors to experience its unique blend of heritage and art at no cost.
                        Armenian Street is not only a popular spot for its vibrant street art but also an area steeped in history.
                        It is one of the oldest streets in George Town, dating back to the early 19th century, and was once home to a large Armenian community that contributed greatly to the development of Penang’s commercial and cultural landscape.
                        Today, the street retains its historical charm with beautifully preserved architecture and an array of quaint shops offering local crafts, souvenirs, and antiques.
                        Alongside the murals, visitors can also explore the nearby Armenian Street Temple, an iconic religious site that adds to the street’s historical significance.
                    </p>
                </div>

                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0101619229004!2d100.33450287364296!3d5.415421235050108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac392206169e9%3A0xa4ce7dbc3851110e!2sLbh%20Armenian%2C%20George%20Town%2C%2010450%20George%20Town%2C%20Pulau%20Pinang!5e0!3m2!1sen!2smy!4v1736095556004!5m2!1sen!2smy"
                        width="600"
                        height="450"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>
            </div>

            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>
                        &times;
                    </span>
                    <img className="modal-content" src={currentImage} alt="Popup"/>
                </div>
            )}
        </div>
    );
}

export default Heritage4;

