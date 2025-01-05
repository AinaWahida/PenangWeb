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
                            src={require("./images-heritage/heritage2.4.webp")}
                            alt="Pinang Peranakan Mansion 1"
                            onClick={() => openModal(require("./images-heritage/heritage2.4.webp"))}
                        />
                        <img
                            src={require("./images-heritage/heritage2.3.webp")}
                            alt="Pinang Peranakan Mansion 2"
                            onClick={() => openModal(require("./images-heritage/heritage2.3.webp"))}
                        />
                    </div>

                    <div className="left-image">
                        <img
                            src={require("./images-heritage/heritage2.2.jpg")}
                            alt="Pinang Peranakan Mansion 3"
                            onClick={() => openModal(require("./images-heritage/heritage2.2.jpg"))}
                        />
                        <img
                            src={require("./images-heritage/heritage2.6.jpg")}
                            alt="Pinang Peranakan Mansion 4"
                            onClick={() => openModal(require("./images-heritage/heritage2.6.jpg"))}
                        />
                    </div>
                </div>

                <div className="description-container">
                    <p>
                        Discover the fascinating world of the Peranakans at the Pinang Peranakan Mansion, a meticulously
                        restored museum that showcases the cultural legacy of the Baba-Nyonya community in Penang. This historic mansion offers a deep dive into the opulent lifestyle of the Straits Chinese, who were known for their distinctive blend of Chinese and Malay traditions. Visitors can wander through lavishly decorated rooms, each adorned with intricate wooden carvings, European tiles, and antique furniture, reflecting the unique fusion of Eastern and Western influences. The mansion’s vast collection includes over 1,000 pieces of antiques and collectibles, offering an immersive experience into the history and traditions of the Peranakans.
                    </p>
                </div>
            </div>

            <div className="Part2">
                <div className="entrance-fee">
                    <h3>Entrance Fee</h3>
                    <h3>Operating Hours: Monday to Sunday from 9:30 am to 5 pm</h3>
                    <table className="entrance-fee-table">
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Fee (RM)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Adults</td>
                            <td>25.00</td>
                        </tr>
                        <tr>
                            <td>Children (6-12 yrs)</td>
                            <td>12.00</td>
                        </tr>
                        <tr>
                            <td>Junior Children (below 6)</td>
                            <td>Free</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.994344602399!2d100.3412046!3d5.417827499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac38fdcf36b09%3A0x8b7cdd7809de1be6!2sPinang%20Peranakan%20Mansion!5e0!3m2!1sen!2smy!4v1736091729893!5m2!1sen!2smy"
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

