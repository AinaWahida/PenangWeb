import React, { useState } from "react";
import image1 from './images/image3.1.jpg';
import image2 from './images/image3.2.jpg';
import image3 from './images/image3.3.jpg';
import image4 from './images/image3.4.jpg';

function Food3() {
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
        <div className="Food-section">
            <h1>Ais Tingkap</h1>
            <div className="Part-1">
                <div className="description-container">
                    <p>
                    Ais Tingkap, or "Window Sherbet," is one of Penang's most iconic traditional drinks, known for its refreshing and unique flavor. This drink has been a staple of Penang’s food culture for decades, offering a perfect way to cool down in Malaysia’s tropical heat. The name "Ais Tingkap" originates from the stall’s early days when it operated through a small window ("tingkap") where customers placed their orders.
                    Ais Tingkap is a delightful concoction made from a mix of rose syrup, coconut water, and basil seeds (biji selasih), topped with freshly shaved ice and a touch of sugar syrup. It’s finished with a sprinkle of coconut flesh, giving it a refreshing tropical twist. The combination of the vibrant rose flavor, crunchy basil seeds, and cooling coconut creates a drink that is both visually appealing and incredibly satisfying.
                    Ais Tingkap has remained a favorite for generations due to its nostalgic charm and unique taste. The drink’s traditional preparation method, using fresh, high-quality ingredients, sets it apart from modern beverages. Its popularity is further boosted by its long history, with the original stall dating back to the 1920s. For locals, it’s a taste of childhood memories, while for tourists, it’s an authentic cultural experience that reflects Penang’s heritage.
                    </p>
                </div>
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
                <div className="map-container">
                <iframe
                    title="Ais Tingkap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.994326886066!2d100.32883287498412!3d5.4178301945613905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3971dd6691f%3A0xf659b74743d1419b!2sAis%20Tingkap!5e0!3m2!1sen!2smy!4v1736188753981!5m2!1sen!2smy"
                    width="100%" height="300" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
                <div className="description-container">
                    <p>
                        Ais Tingkap has remained a favorite for generations due to its nostalgic charm and unique taste. The drink’s traditional preparation method, using fresh, high-quality ingredients, sets it apart from modern beverages. Its popularity is further boosted by its long history, with the original stall dating back to the 1920s. For locals, it’s a taste of childhood memories, while for tourists, it’s an authentic cultural experience that reflects Penang’s heritage.
                        The Ais Tingkap stall is usually open in the afternoon, making it an ideal stop for a refreshing break while exploring George Town. Be sure to visit early, as it often draws a crowd.
                    <br/><br/>
                        The pricing for Ais Tingkap varies depending on the location and serving preferences such as Dine-In: Approximately RM2.50 per glass and Takeaway: Around RM3.00 per serving.Please note that prices may vary based on location, serving size, and any additional ingredients. For the most accurate and up-to-date pricing, it's advisable to check with the vendor directly.
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

export default Food3;
