import React, { useState } from "react";

function Heritage2() {
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
            <h1>Pinang Peranakan Mansion</h1>
            <div className="Part1">
                <div className="image-container">
                    <div className="right-image">
                        <img
                            src={require("./images-heritage/heritage2.2.jpg")}
                            alt="Pinang Peranakan Mansion 1"
                            onClick={() => openModal(require("./images-heritage/heritage2.2.jpg"))}
                        />
                    </div>

                    <div className="left-image">
                        <img
                            src={require("./images-heritage/heritage2.3.webp")}
                            alt="Kek Lok Si Temple 1"
                            onClick={() => openModal(require("./images-heritage/heritage2.3.webp"))}
                        />
                    </div>
                </div>

                <div className="description-container">
                    <p>
                        Step into the world of the Straits Chinese at the Pinang Peranakan Mansion, a museum dedicated to Penang’s Peranakan heritage. This beautifully restored heritage house offers a glimpse into the opulent lifestyle and customs of the Peranakans. With over 1,000 antiques and collectibles on display, the mansion provides a unique cultural experience that showcases the rich history of the Baba-Nyonya community.
                    </p>
                </div>
            </div>

            <div className="Part2">
                <div className="description-container">
                    <p>
                        Entry to most parts of the temple is free, making it accessible to everyone who wishes to experience its serene and spiritual atmosphere. However, visitors are kindly encouraged to contribute through donations, which play a vital role in helping to preserve and maintain this significant cultural and religious landmark for future generations. The temple becomes exceptionally vibrant and enchanting during the Chinese New Year celebrations, as thousands of colorful lanterns and intricate lights are used to illuminate the entire complex, creating a spectacular and festive sight that draws both locals and tourists alike.
                    </p>
                </div>

                <div className="map-container">
                    <iframe
                        title="Kek Lok Si Temple"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3972.113715992545!2d100.2736126!3d5.3996413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac2185dfc8665%3A0x2c9084ea7f433ec4!2sKek%20Lok%20Si%20Temple!5e0!3m2!1sen!2smy!4v1735873148559!5m2!1sen!2smy"
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

export default Heritage2;

