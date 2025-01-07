import React, { useState } from "react";
import image1 from './images/image 2.1.jpeg';
import image2 from './images/image 2.2.jpeg';
import image3 from './images/image 2.3.jpeg';
import image4 from './images/image 2.4.jpeg';

function Food2() {
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
            <h1>Laksa Kuah Pekat</h1>
            <div className="Part-1">
                <p>
                    Laksa Kuah Pekat is one of Penang's beloved variations of the famous Laksa, a spicy noodle soup that has become a must-try dish for anyone visiting the island. What sets Laksa Kuah Pekat apart is its thick, rich, and hearty broth, which is packed with bold flavors and spices. Often referred to as the "thick broth laksa," this dish has a devoted following among locals and tourists alike, offering a satisfying and comforting meal perfect for any time of day.
                    The key feature of Laksa Kuah Pekat is its thick, creamy, and flavorful soup base, made by simmering a blend of fish (usually mackerel or sardines) with tamarind, lemongrass, galangal, and a mix of aromatic spices. The result is a rich, hearty broth that’s both tangy and spicy, with a texture that coats the noodles beautifully. The dish is typically served with chewy rice noodles or egg noodles, topped with finely shredded cucumber, onions, mint leaves, and a hard-boiled egg. Some versions may also include a generous serving of chili paste to add an extra layer of heat.

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
                    title="Mee Sotong Hameed"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.5868143171515!2d100.28566167498347!3d5.326956094651573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac14aedbd6389%3A0x2f5c213e066efc1f!2sLaksa%20Kuah%20Pekat!5e0!3m2!1sen!2smy!4v1736189180153!5m2!1sen!2smy"
                    width="500" height="300" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <div className="left">
                    <p>
                        Laksa Kuah Pekat can typically be found in hawker centers or roadside stalls across Penang, with many vendors operating throughout the day, especially for lunch and dinner. It’s best to visit early during peak hours to avoid long waits.
                        If you’re in Penang and love rich, flavorful, and spicy soups, Laksa Kuah Pekat is a must-try. Its deep, aromatic broth and comforting ingredients provide a unique take on the classic laksa, offering a true taste of Penang’s culinary heritage. Whether you're a seasoned foodie or a first-time visitor, this dish is sure to impress and leave you craving more.

                    </p>
                    <p>The price for Laksa Kuah Pekat is RM8.00 while Laksa Sarang is RM10.00. Plase note  that prices may vary based on portion sizes and any additional ingredients. For the most accurate and up-to-date pricing, it's advisable to contact the stall directly or visit in person.</p>
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

export default Food2;
