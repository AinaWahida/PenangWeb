import React, {useState} from "react";
import { Link } from "react-router-dom";

function Hotel1() {
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
            <h1>Shangri-La Golden Sands</h1>
            <div className= "div1">
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-hotel/hotel1.jpg')} alt="img1"
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
                <p>Shangri-La Golden Sands, Penang is a charming 4-star beachfront resort located on Batu Feringgi Beach, known for its welcoming family-friendly atmosphere and a wide range of recreational amenities.
                    The resort offers spacious and comfortable guestrooms and suites designed to accommodate families, many of which feature private balconies with views of the gardens, pool, or sea.
                    Children will be delighted by the Splash Zone mini waterpark, complete with water slides and fountains, as well as the Adventure Zone, an indoor play area with exciting slides and activities.
                    The Kids Club organizes engaging programs to keep younger guests entertained, making the resort an excellent choice for family vacations.
                    Dining options include the all-day Garden Café, offering a mix of international and local cuisines, and Sigi’s Bar & Grill, a casual beachfront restaurant serving Italian dishes and barbecue favorites with stunning sea views. </p>
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
            <div className= "div3">
                <div className= "book">
                    <h3>Click the link below to book now!</h3>
                    <Link to="https://www.booking.com/hotel/my/golden-sands-resort-by-shangri-la.en-gb.html?aid=356980&label=gog235jc-1DCAsooQFCIWdvbGRlbi1zYW5kcy1yZXNvcnQtYnktc2hhbmdyaS1sYUgzWANooQGIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4Aq6l8LsGwAIB0gIkNDE2ZTg2ZGItNDhhMC00YjliLTliMjQtOGZhNDYxOTRjYjFi2AIE4AIB&sid=2f32ca8ac362235875bf049f764c337e&dist=0&keep_landing=1&sb_price_type=total&type=total&">
                        <button className="navigate-button">Book Now</button>
                    </Link>
                </div>
            </div>

            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={currentImage} alt="Popup" />
                </div>
            )}

        </div>
    )
}

export default Hotel1;