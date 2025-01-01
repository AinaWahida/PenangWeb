import React, {useState} from "react";

function Spot4 () {
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
            <h1>Entopia by Penang Butterfly Farm</h1>
            <div className="part1">
                <p>
                    Entopia by Penang Butterfly Farm is one of Penang’s premier eco-tourism attractions, located in the serene area of Teluk Bahang on Penang Island, Malaysia.
                    As a captivating natural sanctuary, Entopia offers an immersive experience that celebrates the beauty and complexity of nature, particularly through its impressive butterfly collection.
                    The park is home to more than 4,000 butterflies, including rare and endangered species, thriving in a vibrant, tropical rainforest environment.
                    Visitors are invited to stroll through the open-air butterfly garden, where they can witness the butterflies fluttering freely among lush plants, creating a mesmerizing sight.
                    In addition to butterflies, the park also features a wide range of insects, reptiles, amphibians, and small animals, all of which add to the diversity of the experience.
                    The surrounding natural landscape creates a peaceful and picturesque setting that enhances the sense of connection with nature.
                </p>
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-attraction/spot4.1.jpeg')} alt="img1" onClick={() => openModal(require('./images-attraction/spot4.1.jpeg'))}/>
                        <img src={require('./images-attraction/spot4.2.jpg')} alt="img2" onClick={() => openModal(require('./images-attraction/spot4.2.jpg'))}/>
                    </div>
                    <div className="right">
                        <img src={require('./images-attraction/spot4.6.webp')} alt="img3" onClick={() => openModal(require('./images-attraction/spot4.6.webp'))}/>
                    </div>
                </div>
            </div>
            <div className="part2">
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-attraction/spot4.3.JPG')} alt="img4" onClick={() => openModal(require('./images-attraction/spot4.3.JPG'))}/>
                        <img src={require('./images-attraction/spot4.4.png')} alt="img5" onClick={() => openModal(require('./images-attraction/spot4.4.png'))}/>
                    </div>
                    <div className="left">
                        <img src={require('./images-attraction/spot4.5.avif')} alt="img6" onClick={() => openModal(require('./images-attraction/spot4.5.avif'))}/>
                        <img src={require('./images-attraction/spot4.7.jpeg')} alt="img7" onClick={() => openModal(require('./images-attraction/spot4.7.jpeg'))}/>
                    </div>
                </div>
                <p>
                    Entopia is not just a butterfly park; it is an educational and conservation-focused destination.
                    The park is divided into two main sections: "Natureland," an outdoor area with the butterfly garden and other natural exhibits, and the "Living Gallery," an indoor space that houses fascinating displays on the life cycles of butterflies, as well as other insect species and their habitats.
                    This educational aspect is designed to engage visitors in learning about biodiversity, the importance of conservation, and the delicate balance of ecosystems.
                    Throughout the year, Entopia hosts various interactive programs, workshops, and guided tours that cater to visitors of all ages, helping them deepen their understanding of the natural world.
                    With its blend of adventure, education, and environmental awareness, Entopia by Penang Butterfly Farm stands as a must-visit destination for anyone looking to explore the rich biodiversity of the region while enjoying a fun and enriching experience.
                </p>
            </div>
            <div className="part3">
                <iframe
                    title="Entopia"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.7979166057685!2d100.21499430000001!3d5.4476214999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ae858a51c78f3%3A0x78cc63e455e38b1f!2sEntopia%20by%20Penang%20Butterfly%20Farm!5e0!3m2!1sen!2smy!4v1735545719461!5m2!1sen!2smy"
                    width="480" height="300" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="fee">
                    <h3>Operating Hours: 9.00am - 6.00pm</h3>
                    <h3>Ticket Price:</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>Malaysians</th>
                            <th>Non-Malaysians</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>RM 45</td>
                            <td>RM 55</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={currentImage} alt="Popup" />
                </div>
            )}
        </div>
    );
}

export default Spot4;