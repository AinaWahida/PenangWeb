import React, {useState} from "react";

function Spot2 () {
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
            <h1>Penang Hill</h1>
            <div className="part1">
                <div className="description-container">
                    <p>
                        Penang Hill, also known as Bukit Bendera, is one of the most iconic and popular tourist
                        attractions on Penang Island, Malaysia.
                        Situated about 6 kilometers from the UNESCO World Heritage site of Georgetown, the hill stands
                        at an elevation of 830 meters above sea level, offering a cool respite from the tropical heat
                        that characterizes much of the island.
                        The hill can be accessed via the famous Penang Hill Railway, a funicular train that has been in
                        operation since 1923.
                        This train journey, which ascends the hill through lush tropical rainforests and scenic
                        landscapes, offers visitors stunning views as they climb.
                        For those who prefer a more adventurous experience, several hiking trails lead to the summit,
                        where panoramic views await. On clear days, visitors can see the entire island, the mainland of
                        Malaysia, and the Andaman Sea in the distance.
                        The cool climate, fresh air, and natural beauty of Penang Hill make it a perfect escape for
                        those looking to unwind and connect with nature.
                    </p>
                </div>
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-attraction/spot2.1.jpg')} alt="img1"
                             onClick={() => openModal(require('./images-attraction/spot2.1.jpg'))}/>
                        <img src={require('./images-attraction/spot2.2.jpg')} alt="img2"
                             onClick={() => openModal(require('./images-attraction/spot2.2.jpg'))}/>
                    </div>
                    <div className="right">
                        <img src={require('./images-attraction/spot2.7.jpg')} alt="img3"
                             onClick={() => openModal(require('./images-attraction/spot2.7.jpg'))}/>
                    </div>
                </div>
            </div>
            <div className="part2">
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-attraction/spot2.3.jpg')} alt="img4"
                             onClick={() => openModal(require('./images-attraction/spot2.3.jpg'))}/>
                        <img src={require('./images-attraction/spot2.5.jpg')} alt="img5"
                             onClick={() => openModal(require('./images-attraction/spot2.5.jpg'))}/>
                    </div>
                    <div className="left">
                        <img src={require('./images-attraction/spot2.6.jpg')} alt="img6"
                             onClick={() => openModal(require('./images-attraction/spot2.6.jpg'))}/>
                        <img src={require('./images-attraction/spot2.8.jpg')} alt="img7"
                             onClick={() => openModal(require('./images-attraction/spot2.8.jpg'))}/>
                    </div>
                </div>
                <div className="description-container">
                    <p>
                        At the summit, visitors are greeted by a variety of attractions that highlight both the natural
                        and historical significance of the area.
                        One of the most popular spots is the historic David Brown’s Restaurant and Tea Terraces, a
                        colonial-style eatery offering stunning views of the surrounding area, where guests can enjoy
                        traditional English tea and a variety of delicacies.
                        The hill is also home to several cultural landmarks, including the 19th-century Hindu temple of
                        Arul Suppan, as well as the modern Sky Terrace, which provides one of the best viewpoints on the
                        island.
                        Penang Hill is renowned for its rich biodiversity, with a variety of plants, flowers, and
                        animals found in the area, including species unique to the region. Visitors can explore the
                        nature trails and enjoy birdwatching or simply relax in the tranquil surroundings.
                        In addition to its natural wonders, Penang Hill is also a treasure trove of history, with
                        colonial-era architecture, old British bungalows, and the Observatory Hill that once served as a
                        military station during the colonial period.
                        Whether for its scenic beauty, cultural landmarks, or relaxing atmosphere, Penang Hill remains
                        one of the must-visit destinations on the island.
                    </p>
                </div>
            </div>
            <div className="part3">
                <div className="map-container">
                    <iframe
                        title="Penang Hill"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15888.223494067925!2d100.2773317!3d5.4084612000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac28738d4ea43%3A0xf862c72e1eb12bb9!2sPenang%20Hill!5e0!3m2!1sen!2smy!4v1735543150127!5m2!1sen!2smy"
                        width="100%" height="300" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                    <div className="fee">
                        <h3>Operating hours: 6.30am - 11.00pm</h3>
                        <h3>Ticket Price:</h3>
                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Citizen</th>
                                <th>Non-Citizen</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Children</td>
                                <td>RM 8</td>
                                <td>RM 15</td>
                            </tr>
                            <tr>
                                <td>Adult</td>
                                <td>RM 16</td>
                                <td>RM 30</td>
                            </tr>
                            <tr>
                                <td>Senior Citizen</td>
                                <td>RM 8</td>
                                <td>RM 30</td>
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

            export default Spot2;