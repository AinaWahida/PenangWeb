import React, { useState } from "react";
import image1 from './images/image4.1.jpg';
import image2 from './images/image4.2.jpg';
import image3 from './images/image4.3.jpg';
import image4 from './images/image4.4.jpg';

function Food4() {
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
            <h1>Pasembur Kareem</h1>
            <div className="Part-1">
                <p>
                    Pasembur Kareem is a well-loved stall serving one of Penang’s signature dishes—Pasembur, a Malaysian-style Indian salad. The stall, located along the vibrant Gurney Drive, has become a must-visit destination for those seeking a delicious and authentic Pasembur experience. Known for its generous servings and flavorful ingredients, Pasembur Kareem has earned a loyal following of both locals and tourists. Pasembur Kareem stands out for its fresh ingredients, flavorful sauce, and unique presentation. The dish features a mix of crispy fried dough fritters (known as tempeh or keropok), boiled potatoes, cucumber, hard-boiled egg, and shredded cabbage, all topped with a rich, spicy, and sweet peanut sauce. The sauce, which is made with a secret blend of spices and peanuts, is the key to elevating the dish, giving it a complex and mouthwatering flavor. Some variations include additional ingredients such as grilled fish or shrimp, adding even more depth to the dish.
                    Pasembur Kareem’s fame lies in the perfect balance of textures and flavors it offers. The combination of crunchy fritters, smooth potatoes, and refreshing vegetables pairs harmoniously with the rich, savory peanut sauce.
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
                    title="Kareem Pasembur Rojak"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.9883768088994!2d100.3403728749841!3d5.4187350945605015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac38f3e7e6231%3A0xa0d273770db8120c!2sKareem%20Pasembur%20Rojak!5e0!3m2!1sen!2smy!4v1736270813554!5m2!1sen!2smy"
                    width="500" height="300" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <div className="left">
                    <p>
                        Pasembur Kareem is typically enjoyed with a cold drink such as teh tarik (Malaysian pulled tea) or coconut water to complement the rich, spicy flavors of the dish. The cool drinks provide a refreshing balance to the warm, savory elements of the Pasembur.
                        If you’re exploring Penang and want to indulge in a local favorite, Pasembur Kareem is a must-try. The stall offers an authentic taste of Penang’s street food culture, providing a deliciously unique twist on the classic Pasembur. Whether you’re a local or a tourist, a visit to Pasembur Kareem promises a satisfying and memorable dining experience.

                    </p>
                    <p>
                        At Kareem Pasembur Rojak in Penang, the price of pasembur varies based on the ingredients you select. Individual items start from RM0.50, with the total cost depending on your choices. It's advisable to check the prices of individual items before making your selection, as some ingredients may be more expensive.
                    </p>
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

export default Food4;
