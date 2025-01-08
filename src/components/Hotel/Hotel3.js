import React, {useState} from "react";
import { Link } from "react-router-dom";

function Hotel3() {
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
        <div className = "section">
            <h1>Lexis Suites</h1>
            <div className= "div1">
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-hotel/hotel3.jpg')} alt="img1"
                             onClick={() => openModal(require('./images-hotel/hotel3.jpg'))}/>
                        <img src={require('./images-hotel/Hotel3_1.jpg')} alt="img2"
                             onClick={() => openModal(require('./images-hotel/Hotel3_1.jpg'))}/>
                    </div>
                    <div className="left">
                        <img src={require('./images-hotel/Hotel3_2.jpg')} alt="img3"
                             onClick={() => openModal(require('./images-hotel/Hotel3_2.jpg'))}/>
                        <img src={require('./images-hotel/Hotel3_3.jpg')} alt="img4"
                             onClick={() => openModal(require('./images-hotel/Hotel3_3.jpg'))}/>
                    </div>
                </div>
                <p>Lexis Suites Penang is a luxurious 5-star beachfront hotel located in Teluk Kumbar, offering panoramic views of the Straits of Malacca.
                    Each of its 222 spacious suites features a private pool and steam room, ensuring guests enjoy unparalleled privacy and relaxation.
                    The resort boasts exceptional dining options, including the Roselle Coffee House, which serves a wide array of local and international cuisines, and UMI Japanese Restaurant, renowned for its authentic Japanese dishes.
                    With its serene beachfront location and proximity to Penang International Airport, the resort is a perfect choice for travelers seeking a blend of comfort and convenience.</p>
            </div>
            <div className= "div2">
                <p>
                    The hotel’s indoor facilities provide ample opportunities for relaxation and recreation.
                    Guests can rejuvenate at the LexSpa, maintain their fitness routines at the O2 Gym, or spend quality time in the Kidz World and Games Room, which feature arcade machines, Xbox consoles, and other interactive entertainment.
                    The Lobby Shop offers daily essentials, snacks, and souvenirs, while the Business Centre caters to corporate needs with internet and printing facilities.
                    Whether it’s indulging in spa treatments, staying active, or enjoying family-friendly amenities, Lexis Suites Penang ensures a memorable experience for guests of all ages.
                </p>
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-hotel/Hotel3_4.jpg')} alt="img5"
                             onClick={() => openModal(require('./images-hotel/Hotel3_4.jpg'))}/>
                        <img src={require('./images-hotel/Hotel3_5.jpg')} alt="img6"
                             onClick={() => openModal(require('./images-hotel/Hotel3_5.jpg'))}/>
                    </div>
                    <div className="left">
                        <img src={require('./images-hotel/Hotel3_6.jpg')} alt="img7"
                             onClick={() => openModal(require('./images-hotel/Hotel3_6.jpg'))}/>
                        <img src={require('./images-hotel/Hotel3_7.jpg')} alt="img8"
                             onClick={() => openModal(require('./images-hotel/Hotel3_7.jpg'))}/>
                    </div>
                </div>
            </div>
            <div className="div3">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.8431571853803!2d100.23034987498322!3d5.28715629469106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304a9515ef5ca3b7%3A0x5f06f5287407767f!2sLexis%20Suites%20Penang!5e0!3m2!1sen!2smy!4v1736348072521!5m2!1sen!2smy"
                    width="100%" height="300" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="div4">
                <div className="book">
                    <h3>Click the link below to book now!</h3>
                    <Link
                        to="https://www.booking.com/hotel/my/lexis-suites-penang.en-gb.html?aid=356980&label=gog235jc-1DCAsooQFCE2xleGlzLXN1aXRlcy1wZW5hbmdIM1gDaKEBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuAKxovq7BsACAdICJGJiOTA3YzAyLWU2OTYtNGY0OC05Y2M3LWY4Y2JhYWNjMmFlZNgCBOACAQ&sid=2f32ca8ac362235875bf049f764c337e&dist=0&keep_landing=1&sb_price_type=total&type=total&">
                        <button className="navigate-button">Book Now</button>
                    </Link>
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

export default Hotel3;