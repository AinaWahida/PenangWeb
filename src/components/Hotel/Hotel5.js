import React, {useState} from "react";

function Hotel5() {
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

    return(
        <div className = "HotelSection">
            <h1>M Qube Hotel</h1>
            <div className= "div1">
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-hotel/hotel5.jpg')} alt="img1"
                             onClick={() => openModal(require('./images-hotel/hotel5.jpg'))}/>
                        <img src={require('./images-hotel/Hotel5_3.jpg')} alt="img2"
                             onClick={() => openModal(require('./images-hotel/Hotel5_3.jpg'))}/>
                    </div>
                    <div className="right">
                        <img src={require('./images-hotel/Hotel5_4.jpg')} alt="img3"
                             onClick={() => openModal(require('./images-hotel/Hotel5_4.jpg'))}/>
                    </div>
                </div>
                <div className="description-container">
                <p>M Qube Hotel is a modern capsule hotel located in the Bayan Lepas area of Penang, Malaysia.
                    Situated approximately 9 km from Penang International Airport and 7 km from the Snake Temple, it offers convenient access to local attractions.
                    The hotel features 42 air-conditioned capsules, each equipped with a flat-screen TV, game console, and complimentary bottled water.
                    Guests can enjoy free Wi-Fi throughout the property, as well as free parking and a 24-hour front desk.</p>
                </div>
            </div>
            <div className= "div2">
                <div className="description-container">
                <p>
                    The shared bathrooms are well-maintained, and the hotel provides a shared lounge for guests to relax.
                    Its proximity to Queensbay Mall, just 0.9 miles away, makes it an ideal choice for travelers interested in shopping and entertainment.
                    With its clean facilities, friendly staff, and value for money, M Qube Hotel has received positive reviews from guests seeking a unique and affordable accommodation experience in Penang.
                </p>
                </div>
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-hotel/Hotel5_2.jpg')} alt="img5"
                             onClick={() => openModal(require('./images-hotel/Hotel5_5.jpg'))}/>
                        <img src={require('./images-hotel/Hotel5_5.jpg')} alt="img6"
                             onClick={() => openModal(require('./images-hotel/Hotel5_5.jpg'))}/>
                    </div>
                    <div className="left">
                        <img src={require('./images-hotel/Hotel5_6.jpg')} alt="img7"
                             onClick={() => openModal(require('./images-hotel/Hotel5_6.jpg'))}/>
                        <img src={require('./images-hotel/Hotel5_7.jpg')} alt="img8"
                             onClick={() => openModal(require('./images-hotel/Hotel5_7.jpg'))}/>
                    </div>
                </div>
            </div>
            <div className="div3">
                <iframe
                    title="M Qube"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4954003670955!2d100.2993233749835!3d5.341077494637542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac057005c1377%3A0x55b7da679321dcc4!2sM%20Qube%20Hotel%20Penang!5e0!3m2!1sen!2smy!4v1736356233321!5m2!1sen!2smy"
                    width="100%" height="300" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="div4">
                <div className="book">
                    <h3>Click the link below to book now!</h3>
                    <a
                        href="https://www.booking.com/hotel/my/mqube.en-gb.html?aid=356980&label=gog235jc-1DCAsooQFCBW1xdWJlSDNYA2ihAYgBAZgBCbgBF8gBDNgBA-gBAYgCAagCA7gCutv6uwbAAgHSAiQ3MWE2YWFjNy03ZmU3LTRmMTItYjZkZC05NjdhZjdjODI5Y2LYAgTgAgE&sid=2f32ca8ac362235875bf049f764c337e&dist=0&keep_landing=1&sb_price_type=total&type=total&"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="navigate-button">Book Now</button>
                    </a>
                </div>
            </div>

            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={currentImage} alt="Popup"/>
                </div>
            )}

        </div>
    )
}

export default Hotel5;