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
        <div className="section">
            <h1> Kek Lok Si Temple</h1>
            <div className="Part1">
                <p>
                    Kek Lok Si Temple, also known as the "Temple of Supreme Bliss," is one of the largest and most renowned Buddhist temples in Southeast Asia, located on Penang Hill. Built over several decades, this temple complex is a magnificent blend of Chinese, Thai, and Burmese architectural styles. The temple is famous for its grand architecture, including the seven-story pagoda, the towering statue of the Goddess of Mercy (Kuan Yin), and beautiful gardens that attract visitors from all over the world. Kek Lok Si is not just a religious site but also a place for cultural exchange and pilgrimage, especially during the Chinese New Year when thousands of lights illuminate the temple during the annual "lighting up" ceremony.
                </p>
                <div className="collage">
                    <div className="right">
                        <img src={require("./images-heritage/heritage4.2.jpg")} alt="Heritage 1"
                             onClick={() => openModal(require("./images-heritage/heritage4.2.jpg"))}/>
                        <img src={require("./images-heritage/heritage4.3.jpg")} alt="Heritage 2"
                             onClick={() => openModal(require("./images-heritage/heritage4.3.jpg"))}/>
                    </div>
                </div>
            </div>
            <div className="Part2">
                <iframe
                    title="Kek Lok Si Temple"
                    src="https://www.google.com/maps/place/Kek+Lok+Si+Temple/@5.3996413,100.2736126,17z/data=!3m1!4b1!4m6!3m5!1s0x304ac2185dfc8665:0x2c9084ea7f433ec4!8m2!3d5.3996413!4d100.2736126!16zL20vMDVxMnBo?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D"
                    width="1200"
                    height="300"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <p>
                    Entry is free for most parts of the temple, but donations are encouraged to help maintain this cultural landmark.
                    The temple is especially lively during Chinese New Year when it's beautifully lit with thousands of lanterns.
                </p>
            </div>

            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={currentImage} alt="Popup" />
                </div>
            )}
            </div>
    );
}

export default Heritage1;