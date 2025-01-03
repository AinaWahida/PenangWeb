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
                            src={require("./images-heritage/heritage1.2.jpg")}
                            alt="Kek Lok Si Temple 1"
                            onClick={() => openModal(require("./images-heritage/heritage1.2.jpg"))}
                        />
                    </div>

                    <div className="left-image">
                        <img
                            src={require("./images-heritage/heritage1.3.jpg")}
                            alt="Kek Lok Si Temple 1"
                            onClick={() => openModal(require("./images-heritage/heritage1.3.jpg"))}
                        />
                    </div>
                </div>

                <div className="description-container">
                    <p>
                        Kek Lok Si Temple, also known as the "Temple of Supreme Bliss," is one of the largest and most renowned Buddhist temples in Southeast Asia, located on Penang Hill. Built over several decades, this temple complex is a magnificent blend of Chinese, Thai, and Burmese architectural styles. The temple is famous for its grand architecture, including the seven-story pagoda, the towering statue of the Goddess of Mercy (Kuan Yin), and beautiful gardens that attract visitors from all over the world. Kek Lok Si is not just a religious site but also a place for cultural exchange and pilgrimage, especially during the Chinese New Year when thousands of lights illuminate the temple during the annual "lighting up" ceremony.
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

