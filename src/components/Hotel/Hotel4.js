import React, {useState} from "react";
import { Link } from "react-router-dom";

function Hotel4() {
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
            <h1>Tido Hostel</h1>
            <div className="div1">
                <p>Tido Hostel Penang is a city hostel situated in the heart of George Town, Penang, within the UNESCO heritage site.
                    The hostel offers a variety of accommodations, including sleek dormitory rooms and private rooms, all designed with modern amenities to ensure a comfortable stay.
                    Guests can enjoy free Wi-Fi throughout the property, air-conditioned rooms, and a cool hangout space to read, interact with others, or watch TV.
                    The hostel's central location provides easy access to popular attractions, with Cheong Fatt Tze Mansion approximately 600 meters away and Prangin Mall about 1.1 kilometres from the property.</p>
                <div className="collage">
                    <div className="right">
                        <img src={require('./images-hotel/hotel4.jpg')} alt="img1"
                             onClick={() => openModal(require('./images-hotel/hotel4.jpg'))}/>
                    </div>
                    <div className="left">
                        <img src={require('./images-hotel/Hotel4_2.jpg')} alt="img2"
                             onClick={() => openModal(require('./images-hotel/Hotel4_2.jpg'))}/>
                        <img src={require('./images-hotel/Hotel4_6.jpg')} alt="img3"
                             onClick={() => openModal(require('./images-hotel/Hotel4_6.jpg'))}/>
                    </div>
                </div>
            </div>
            <div className="div2">
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-hotel/Hotel4_4.jpg')} alt="img4"
                             onClick={() => openModal(require('./images-hotel/Hotel4_4.jpg'))}/>
                        <img src={require('./images-hotel/Hotel4_5.jpg')} alt="img5"
                             onClick={() => openModal(require('./images-hotel/Hotel4_5.jpg'))}/>
                    </div>
                    <div className="left">
                        <img src={require('./images-hotel/Hotel4_3.jpg')} alt="img6"
                             onClick={() => openModal(require('./images-hotel/Hotel4_3.jpg'))}/>
                        <img src={require('./images-hotel/Hotel4_7.jpg')} alt="img7"
                             onClick={() => openModal(require('./images-hotel/Hotel4_7.jpg'))}/>
                    </div>

                </div>
                <p>
                    For recreation, Tido Hostel Penang features a game room equipped with darts and board games, offering guests opportunities to socialize and unwind.
                    The hostel also provides a 24-hour reception, express check-in and check-out services, and a snack bar for added convenience.
                    With its unique architecture, eco-environmental sensibilities, and range of facilities, Tido Hostel Penang aims to deliver a sense of calm, youth, and peace to its guests, making it an ideal choice for budget travelers seeking modern comfort amidst cultural charm.
                </p>

            </div>
            <div className="div3">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.9700067913946!2d100.32848457498419!3d5.4215278945577445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac399c87d3dd5%3A0x52cf5b30742da487!2sTIDO%20Hostel%20Penang!5e0!3m2!1sen!2smy!4v1736350723829!5m2!1sen!2smy"
                    width="100%" height="300" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="div4">
                <div className="book">
                    <h3>Click the link below to book now!</h3>
                    <Link
                        to="https://www.booking.com/hotel/my/tido-penang.en-gb.html?aid=356980&label=gog235jc-1DCAsooQFCC3RpZG8tcGVuYW5nSDNYA2ihAYgBAZgBCbgBF8gBDNgBA-gBAYgCAagCA7gCj7f6uwbAAgHSAiQ0ZjZjNDFhNi02NmZjLTQxNzMtYmU4Zi03NDVlOTUxZTYwYmTYAgTgAgE&sid=2f32ca8ac362235875bf049f764c337e&dist=0&keep_landing=1&sb_price_type=total&type=total&">
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

export default Hotel4;