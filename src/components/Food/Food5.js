import React, { useState } from "react";
import image1 from './images/image5.1.jpeg';
import image2 from './images/image5.2.jpg';
import image3 from './images/image5.3.jpg';
import image4 from './images/image5.4.jpg';

function Food5() {
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
        <div className="section">
            <h1>Wantan Mee</h1>
            <div className="Part-1">
                <p>
                    Wantan Mee, a beloved noodle dish, holds a special place in Penang's culinary landscape. This Cantonese-inspired delicacy is a harmonious combination of springy egg noodles, savory toppings, and tender wantans (dumplings), making it one of the island's most sought-after comfort foods. Whether served dry with a sweet and savory soy-based sauce or in a bowl of flavorful soup, Penang’s Wantan Mee stands out for its unique local twists.
                    Unlike versions found elsewhere in Malaysia, Penang’s Wantan Mee is typically served with a subtle, sweet black soy sauce that complements the noodles perfectly. The dish is topped with slices of char siew (barbecued pork), leafy greens, and crispy fried wantans, along with soft, silky wantans in the soup. Many stalls also offer optional chili pickles or sambal, adding a spicy kick to this comforting meal.
                </p>
                <div className="collage">
                    <div className="left">
                        <img src={image1} alt="img1" onClick={() => openModal(image1)}/>
                        <img src={image2} alt="img2" onClick={() => openModal(image2)}/>
                    </div>
                    <div className="left">
                        <img src={image3} alt="img3" onClick={() => openModal(image3)}/>
                        <img src={image4} alt="img4" onClick={() => openModal(image4)}/>
                    </div>
                </div>
            </div>

            <div className="Part-2">

                <iframe
                    title="Fried WanTon Mee"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63552.28205448223!2d100.26486672167964!3d5.414285000000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3923fcce73f%3A0x669e42e3672267ee!2sFried%20Wan%20Ton%20Mee!5e0!3m2!1sen!2smy!4v1736269537389!5m2!1sen!2smy"
                    width="500" height="300" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <div className="left">
                    <p>
                        Penang’s Wantan Mee is renowned for its perfectly balanced flavors and textures, offering a satisfying combination of springy noodles, savory sauces, and delicious dumplings. The dedication of local hawkers, many of whom have perfected their recipes over generations, ensures an authentic and consistent taste. Its versatility—available as a light breakfast, hearty lunch, or late-night snack—makes it a go-to dish for locals and visitors alike.
                        Wantan Mee is best enjoyed fresh, with an optional side of sambal or pickled green chilies to enhance the flavors.
                    </p>
                    <p> A plate of fried wantan mee is priced at RM4.50, with additional dumplings available at RM1.90 per piece. Please note that prices may vary based on portion sizes, ingredients, and the establishment's location. For the most accurate and up-to-date pricing, it's advisable to contact the restaurant directly or visit in person.</p>
                </div>
            </div>

            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={currentImage} alt="Popup" onClick={(e) => e.stopPropagation()}/>
                </div>
            )}
        </div>
    );
}

export default Food5;
