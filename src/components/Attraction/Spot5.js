import React, {useState} from "react";

function Spot5 () {
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
            <h1>Komtar The Top Penang</h1>
            <div className="part1">
                <div className="description-container">
                    <p>
                        Komtar, or Kompleks Tun Abdul Razak, is a towering landmark in George Town, Penang, Malaysia, and stands as the island’s tallest building at 249 meters.
                        Completed in 1986, it has become an essential part of Penang's skyline and a central business, retail, and government hub.
                        Beyond its commercial functions, Komtar is home to The Top@Komtar, a dynamic entertainment complex that offers a variety of attractions and experiences for visitors of all ages.
                        The observation deck on the upper floors provides breathtaking 360-degree views of George Town, Penang Hill, and the Andaman Sea, while the Rainbow Skywalk—an outdoor glass bridge on the 68th floor—offers a thrilling perspective with transparent floors for an adrenaline-filled experience.
                        Additionally, visitors can enjoy family-friendly attractions like the Upside Down Museum and the Jurassic Research Center, along with an array of dining and shopping options.
                    </p>
                </div>
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-attraction/spot5.2.webp')} alt="img1" onClick={() => openModal(require('./images-attraction/spot5.2.webp'))}/>
                        <img src={require('./images-attraction/spot5.3.avif')} alt="img2" onClick={() => openModal(require('./images-attraction/spot5.3.avif'))}/>
                    </div>
                    <div className="right">
                        <img src={require('./images-attraction/spot5.6.webp')} alt="img3" onClick={() => openModal(require('./images-attraction/spot5.6.webp'))}/>
                    </div>
                </div>
            </div>
            <div className="part2">
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-attraction/spot5.5.jpg')} alt="img4" onClick={() => openModal(require('./images-attraction/spot5.5.jpg'))}/>
                        <img src={require('./images-attraction/spot5.4.webp')} alt="img5" onClick={() => openModal(require('./images-attraction/spot5.4.webp'))}/>
                    </div>
                    <div className="left">
                        <img src={require('./images-attraction/spot5.7.jpg')} alt="img6" onClick={() => openModal(require('./images-attraction/spot5.7.jpg'))}/>
                        <img src={require('./images-attraction/spot5.8.jpeg')} alt="img7" onClick={() => openModal(require('./images-attraction/spot5.8.jpeg'))}/>
                    </div>
                </div>
                <div className="description-container">
                    <p>
                        The theme park at The Top further elevates Komtar as a must-visit destination in Penang.
                        With a mix of educational, fun, and adventurous attractions, the theme park ensures an exciting and engaging experience for all visitors.
                        The Upside Down Museum, which features rooms with inverted perspectives, offers a playful, interactive experience, while the Jurassic Research Center brings the prehistoric world to life with life-size dinosaur replicas and engaging exhibits.
                        For those seeking adventure, the Rainbow Skywalk provides a thrilling high-altitude walk with spectacular city views.
                        The entertainment complex also houses a variety of amusement rides, interactive museums, and dining outlets, creating a comprehensive experience that blends excitement, learning, and relaxation.
                        With its modern design, cultural attractions, and panoramic views, Komtar is an iconic destination that offers visitors a perfect mix of adventure, education, and stunning views, making it an essential stop for anyone visiting Penang.
                    </p>
                </div>
            </div>
            <div className="part3">
                <div className="map-container">
                    <iframe
                        title="Komtar"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.005184222411!2d100.3306501!3d5.416178599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac395ce63cafb%3A0x786a38ba7f1ba486!2sThe%20TOP%20Penang%2C%20Theme%20Park%20Penang!5e0!3m2!1sen!2smy!4v1735546528781!5m2!1sen!2smy"
                        width="100%" height="300" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="fee">
                    <h3>Operating Hours: 10.00am - 10.00pm</h3>
                    <h3>Ticket Price:</h3>
                    <table>
                        <thead>
                        <tr>
                            <th></th>
                            <th>5 Attraction Pass</th>
                            <th>New Window of The Top</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Adult</td>
                            <td>RM 78</td>
                            <td>RM 70</td>
                        </tr>
                        <tr>
                            <td>Child/Senior</td>
                            <td>RM 61</td>
                            <td>RM 52</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
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

export default Spot5;