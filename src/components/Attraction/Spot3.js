import React, {useState} from "react";

function Spot3() {
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
        <div className="tourist-section">
            <h1>ESCAPE Penang</h1>
            <div className="part1">
                <p className="description-container">
                    ESCAPE Penang is an exciting and unique adventure park located in Teluk Bahang, on the northwest coast of Penang Island, Malaysia.
                    It is designed to offer a thrilling outdoor experience for people of all ages, combining the beauty of nature with a series of action-packed activities.
                    The park is set within a lush, tropical rainforest, with a variety of eco-friendly, adrenaline-pumping attractions that cater to both adventure enthusiasts and families.
                    Visitors can enjoy a wide range of activities, such as ziplining, go-karting, climbing, and obstacle courses. The park's signature experience is the "MegaDrop" tower, which offers an exhilarating freefall from a height of 60 meters, providing stunning views of the surrounding forest and coastline.
                    There are also water slides, rope courses, and various interactive games that allow guests to engage in friendly competition while enjoying the natural surroundings.
                </p>
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-attraction/spot3.1.jpg')} alt="img1" onClick={() => openModal(require('./images-attraction/spot3.1.jpg'))}/>
                        <img src={require('./images-attraction/spot3.2.webp')} alt="img2" onClick={() => openModal(require('./images-attraction/spot3.2.webp'))}/>
                    </div>
                    <div className="left">
                        <img src={require('./images-attraction/spot3.3.jpg')} alt="img3" onClick={() => openModal(require('./images-attraction/spot3.3.jpg'))} />
                        <img src={require('./images-attraction/spot3.4.webp')} alt="img4" onClick={() => openModal(require('./images-attraction/spot3.4.webp'))}/>
                    </div>
                </div>
            </div>
            <div className="part2">
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-attraction/spot3.6.jpg')} alt="img5"
                             onClick={() => openModal(require('./images-attraction/spot3.6.jpg'))}/>
                        <img src={require('./images-attraction/spot3.5.webp')} alt="img6"
                             onClick={() => openModal(require('./images-attraction/spot3.5.webp'))}/>
                    </div>
                    <div className="left">
                        <img src={require('./images-attraction/spot3.7.jpg')} alt="img7"
                             onClick={() => openModal(require('./images-attraction/spot3.7.jpg'))}/>
                        <img src={require('./images-attraction/spot3.8.webp')} alt="img8"
                             onClick={() => openModal(require('./images-attraction/spot3.8.webp'))}/>
                    </div>
                </div>
                <div className="description-container">
                    <p>
                        ESCAPE Penang is part of the ESCAPE theme park series, known for its emphasis on outdoor fun and
                        promoting an active, healthy lifestyle.
                        The park is designed with sustainability in mind, with a commitment to minimizing its
                        environmental impact while offering an eco-friendly experience.
                        The attractions are inspired by the region's natural landscapes, allowing visitors to immerse
                        themselves in the beauty of the forest while engaging in exciting challenges.
                        Whether you're looking for an adrenaline rush or a fun day out with family and friends, ESCAPE
                        Penang offers an unforgettable experience.
                        With its combination of adventure, nature, and innovation, ESCAPE Penang is fast becoming one of
                        the island's top destinations for those seeking an outdoor thrill.
                    </p>
                </div>
            </div>
                <div className="part3">
                    <div className="map-container">
                        <iframe
                            title="ESCAPE Penang"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.7839054034207!2d100.214038!3d5.449740500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3a45d25df75%3A0xe55b46784fbcb260!2sESCAPE%20Penang!5e0!3m2!1sen!2smy!4v1735545155477!5m2!1sen!2smy"
                            width="100%" height="300" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="fee">
                        <h3>Operating Hours: 10.00am - 6.00pm</h3>
                        <h3>Ticket Price:</h3>
                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>1-Day Tickets</th>
                                <th>2D1N Base Camp</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Future Kid</td>
                                <td>Free</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Junior Kid</td>
                                <td>RM 86 - RM 122</td>
                                <td>RM 126 - RM 179</td>
                            </tr>
                            <tr>
                                <td>Big Kid</td>
                                <td>RM 129 - RM 184</td>
                                <td>RM 185 - RM 268</td>
                            </tr>
                            <tr>
                                <td>Super Kid</td>
                                <td>Free</td>
                                <td>Free</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {isOpen && (
                    <div className="modal" onClick={closeModal}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img className="modal-content" src={currentImage} alt="Popup"/>
                    </div>
                )}
            </div>
            );
            }

            export default Spot3;