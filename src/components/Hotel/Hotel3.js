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
                             onClick={() => openModal(require('./images-hotel/hotel1.jpg'))}/>
                        <img src={require('./images-hotel/Hotel1_1.jpg')} alt="img5"
                             onClick={() => openModal(require('./images-hotel/Hotel1_1.jpg'))}/>
                    </div>
                    <div className="left">
                        <img src={require('./images-hotel/Hotel1_2.jpg')} alt="img3"
                             onClick={() => openModal(require('./images-hotel/Hotel1_2.jpg'))}/>
                        <img src={require('./images-hotel/Hotel1_3.jpg')} alt="img4"
                             onClick={() => openModal(require('./images-hotel/Hotel1_3.jpg'))}/>
                    </div>
                </div>
                <p>Lexis Suites Penang is a luxurious 5-star beachfront resort located in Teluk Kumbar, offering panoramic views of the Straits of Malacca.
                    Each of its 222 spacious suites features a private pool and steam room, ensuring guests enjoy unparalleled privacy and relaxation.
                    The resort boasts exceptional dining options, including the Roselle Coffee House, which serves a wide array of local and international cuisines, and UMI Japanese Restaurant, renowned for its authentic Japanese dishes.
                    With its serene beachfront location and proximity to Penang International Airport, the resort is a perfect choice for travelers seeking a blend of comfort and convenience.</p>
            </div>
            <div className= "div2">
                <p>
                    The resort provides a host of facilities catering to relaxation and adventure.
                    Guests can unwind by the outdoor pools surrounded by landscaped gardens, enjoy a soak in the
                    whirlpool, or stay active at the fitness center and tennis courts.
                    For golf enthusiasts, a nearby 9-hole course is available.
                    The resort's location makes it convenient for exploring Penang’s attractions, including the bustling
                    Batu Feringgi Night Market and the UNESCO World Heritage city of George Town, which is just a short
                    drive away.
                    With its emphasis on creating memorable experiences for all ages, Shangri-La Golden Sands, Penang,
                    is a perfect blend of comfort, entertainment, and exploration, ensuring a fulfilling stay for every
                    traveler.
                </p>
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-hotel/Hotel1_4.webp')} alt="img5"
                             onClick={() => openModal(require('./images-hotel/Hotel1_4.webp'))}/>
                        <img src={require('./images-hotel/Hotel1_5.webp')} alt="img6"
                             onClick={() => openModal(require('./images-hotel/Hotel1_5.webp'))}/>
                    </div>
                    <div className="left">
                        <img src={require('./images-hotel/Hotel1_6.JPG')} alt="img7"
                             onClick={() => openModal(require('./images-hotel/Hotel1_6.JPG'))}/>
                        <img src={require('./images-hotel/Hotel1_7.jpg')} alt="img7"
                             onClick={() => openModal(require('./images-hotel/Hotel1_7.jpg'))}/>
                    </div>
                </div>
            </div>
            <div className="div3">
                <iframe
                    title="Lexis Suites"
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d127091.45083816827!2d100.16875234601757!3d5.476298470899102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x304ae7fc638b5711%3A0x727e15af4b3c60e3!2sJalan%20Batu%20Ferringhi%2C%20Kampung%20Tanjung%20Huma%2C%2011100%20Batu%20Ferringhi%2C%20Pulau%20Pinang!3m2!1d5.4763041!2d100.2511543!5e0!3m2!1sen!2smy!4v1736269051777!5m2!1sen!2smy"
                    width="100%" height="300" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="div4">
                <div className="book">
                    <h3>Click the link below to book now!</h3>
                    <Link
                        to="https://www.booking.com/hotel/my/golden-sands-resort-by-shangri-la.en-gb.html?aid=356980&label=gog235jc-1DCAsooQFCIWdvbGRlbi1zYW5kcy1yZXNvcnQtYnktc2hhbmdyaS1sYUgzWANooQGIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4Aq6l8LsGwAIB0gIkNDE2ZTg2ZGItNDhhMC00YjliLTliMjQtOGZhNDYxOTRjYjFi2AIE4AIB&sid=2f32ca8ac362235875bf049f764c337e&dist=0&keep_landing=1&sb_price_type=total&type=total&">
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