import React, {useState} from "react";
import { Link } from "react-router-dom";

function Hotel2() {
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
            <h1>Hard Rock Hotel</h1>
            <div className="div1">
                <p>Hard Rock Hotel Penang is a vibrant 5-star beachfront resort located along Batu Feringgi Beach, offering an exciting atmosphere with a music-inspired theme.
                    The hotel provides a range of accommodations, from stylish rooms to spacious suites, all equipped with modern amenities such as BOSE sound systems, 50-inch LED TVs, and complimentary high-definition movies on demand.
                    Dining options include the all-day Starz Diner, serving a mix of local and international dishes, and the iconic Hard Rock Café, known for its authentic American cuisine.
                    Guests can enjoy the energetic ambiance of the hotel, which also offers a variety of recreational options, including a 26,000-square-foot outdoor pool with water slides, a swim-up bar, and a fitness center.</p>
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-hotel/hotel2.jpg')} alt="img1"
                             onClick={() => openModal(require('./images-hotel/hotel2.jpg'))}/>
                        <img src={require('./images-hotel/Hotel2_1.jpg')} alt="img2"
                             onClick={() => openModal(require('./images-hotel/Hotel2_1.jpg'))}/>
                    </div>
                    <div className="right">
                        <img src={require('./images-hotel/Hotel2_2.jpeg')} alt="img3"
                             onClick={() => openModal(require('./images-hotel/Hotel2_2.jpeg'))}/>
                    </div>

                </div>
            </div>
            <div className="div2">
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-hotel/Hotel2_3.jpg')} alt="img4"
                             onClick={() => openModal(require('./images-hotel/Hotel2_3.jpg'))}/>
                        <img src={require('./images-hotel/Hotel2_4.jpg')} alt="img5"
                             onClick={() => openModal(require('./images-hotel/Hotel2_4.jpg'))}/>
                    </div>
                    <div className="left">
                        <img src={require('./images-hotel/Hotel2_5.jpg')} alt="img6"
                             onClick={() => openModal(require('./images-hotel/Hotel2_5.jpg'))}/>
                        <img src={require('./images-hotel/Hotel2_6.jpg')} alt="img7"
                             onClick={() => openModal(require('./images-hotel/Hotel2_6.jpg'))}/>
                    </div>

                </div>
                <p>
                    For relaxation and wellness, Hard Rock Hotel Penang features the Rock Spa, offering a variety of
                    rejuvenating treatments, and the Body Rock Gym, equipped with state-of-the-art fitness equipment.
                    Families can take advantage of the Roxity Kids Club, which provides fun and engaging activities for
                    children.
                    Conveniently located near the Batu Feringgi Night Market and a short drive from George Town’s UNESCO World Heritage sites, the hotel offers easy access to local attractions.
                    With its unique blend of music, luxury, and entertainment, Hard Rock Hotel Penang promises an exciting and dynamic experience for guests seeking both relaxation and adventure.
                </p>

            </div>
            <div className="div3">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.664974398775!2d100.23898077498454!3d5.467694194511937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ae7fdb471d61d%3A0xed51474b3f6eda01!2sHard%20Rock%20Hotel%20Penang!5e0!3m2!1sen!2smy!4v1736348291540!5m2!1sen!2smy"
                    width="100%" height="300" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="div4">
                <div className="book">
                    <h3>Click the link below to book now!</h3>
                    <Link
                        to="https://www.booking.com/hotel/my/hard-rock-penang.en-gb.html?aid=356980&label=gog235jc-1DCAsooQFCEGhhcmQtcm9jay1wZW5hbmdIM1gDaKEBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALmtvC7BsACAdICJDY1Y2Q1YTc4LTQ4ZmQtNGU4YS04MWJhLTA2OTM3NDU4NWQzOdgCBOACAQ&sid=2f32ca8ac362235875bf049f764c337e&dist=0&keep_landing=1&sb_price_type=total&type=total&">
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

export default Hotel2;