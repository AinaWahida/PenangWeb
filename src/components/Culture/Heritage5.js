import React, { useState } from "react";

function Heritage1() {
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
            <h1> Kapitan Keling Mosque</h1>
            <div className="Part1">
                <div className="image-container">
                    <div className="right-image">
                        <img
                            src={require("./images-heritage/heritage5.3.jpg")}
                            alt="Kek Lok Si Temple 1"
                            onClick={() => openModal(require("./images-heritage/heritage5.3.jpg"))}
                        />
                        <img
                            src={require("./images-heritage/heritage5.2.jpg")}
                            alt="Kek Lok Si Temple 1"
                            onClick={() => openModal(require("./images-heritage/heritage5.2.jpg"))}
                        />
                    </div>

                    <div className="left-image">
                        <img
                            src={require("./images-heritage/heritage5.1.jpeg")}
                            alt="Kek Lok Si Temple 1"
                            onClick={() => openModal(require("./images-heritage/heritage5.1.jpeg"))}
                        />
                        <img
                            src={require("./images-heritage/heritage5.4.jpg")}
                            alt="Kek Lok Si Temple 1"
                            onClick={() => openModal(require("./images-heritage/heritage5.4.jpg"))}
                        />
                    </div>
                </div>

                <div className="description-container">
                    <p>
                        The Kapitan Keling Mosque, the first Arab-Indian mosque and the largest historic mosque in Georgetown, stands as a significant landmark for visitors to explore in Penang.
                        With its stunning Moghul architecture, including intricate minarets and domes, it is a must-visit destination.
                        To enter the mosque, visitors should dress appropriately, as improper attire may result in denied entry.
                        Additionally, plan your visit outside the five daily Muslim prayer times. The Kapitan Keling Mosque is a popular spot for photography, attracting travelers from around the world and being one of the city's most photographed landmarks.
                    </p>
                </div>
            </div>

            <div className="Part2">
                <div className="description-container">
                    <p>
                        In addition, the Kapitan Keling Mosque holds immense cultural and historical significance as a testament to the early Indian Muslim community in Penang. Its architecture, a harmonious blend of Moghul, Moorish, and Indian Islamic influences, is characterized by its grand domes, elegant minarets, and intricate calligraphy, making it a striking visual centerpiece in Georgetown. The mosque’s serene atmosphere is complemented by its well-maintained gardens and fountains, providing a peaceful retreat for visitors. For those interested in delving deeper into its history and significance, guided tours are available, offering insights into Islamic practices and the mosque’s role in fostering community harmony.
                    </p>
                </div>

                <div className="map-container">
                    <iframe
                        title="Kapitan Keling Mosque"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.000065611697!2d100.33454567498413!3d5.416957294562266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac391b89a9aab%3A0x45471342dd49ed63!2sKapitan%20Keling%20Mosque!5e0!3m2!1sen!2smy!4v1736226726845!5m2!1sen!2smy"
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

export default Heritage1;

