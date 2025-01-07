import React, { useState } from "react";
import image1 from './images/image1.1.jpg';
import image2 from './images/image1.2.jpg';
import image3 from './images/image1.3.jpg';
import image4 from './images/image1.4.jpg';

function Food1() {
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
            <h1>Mee Sotong Hameed</h1>
            <div className="part-1">
                <p>
                    Mee Sotong Hameed is a legendary food stall in George Town, Penang, renowned for its mouthwatering Mee Goreng Sotong (fried noodles with spicy squid). A favorite among locals and tourists alike, this culinary gem has been serving up delicious flavors for decades, making it a must-visit spot in Penang's vibrant street food scene.
                    The highlight of the menu is the Mee Sotong, a plate of perfectly stir-fried yellow noodles tossed with a rich, sweet, and spicy sauce, topped generously with tender, flavorful squid. The squid is cooked to perfection, with a signature sambal that adds an unforgettable kick.
                    Mee Sotong Hameed owes its fame to a secret family recipe passed down through generations, creating the perfect balance of sweetness, spiciness, and umami in its sambal. The tender squid, combined with the flavorful noodles, offers a unique culinary experience that captures the essence of Penang’s street food culture. Its consistent quality, paired with the stall’s historic reputation and prime location at Padang Kota Lama, makes it a top choice for food enthusiasts from all over the world.

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

            <div className="part-2">

                <iframe
                    title="Mee Sotong Hameed"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.9718614547564!2d100.34033617498417!3d5.421245994558024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac394a6effa67%3A0x55a2e415f7cccc3b!2sHameed%20Pata%20Mee%20Sotong!5e0!3m2!1sen!2smy!4v1735316836891!5m2!1sen!2smy"
                    width="500" height="300" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <p>
                    While Mee Sotong is the star, other dishes such as Mee Rebus (boiled noodles with gravy) are also available, offering a milder yet equally satisfying option.
                    Typically open for lunch and early dinner, but it's best to visit early to avoid the crowd and you don't miss out—Mee Sotong Hameed often sells out!
                    Combine your Mee Sotong experience with a refreshing coconut shake from a nearby stall. Enjoy the scenic view of Padang Kota Lama while dining.
                    If you're exploring Penang and craving an authentic taste of the island's street food culture, Mee Sotong Hameed is an experience you can't miss.
                </p>
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

export default Food1;
