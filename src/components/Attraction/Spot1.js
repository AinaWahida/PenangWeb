import React, {useState} from "react";

function Spot1() {
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
        <div className="tourist-section">
            <h1>Penang National Park</h1>
            <div className="part1">
                <p>
                    Penang National Park, located on the northwest tip of Penang Island, is a haven for nature enthusiasts and adventure seekers.
                    Despite being one of the world’s smallest national parks, it boasts incredible biodiversity and a wide range of attractions.
                    Covering over 1,200 hectares, the park features lush rainforests, mangroves, beaches, and coastal ecosystems that provide a sanctuary for countless species of flora and fauna.
                    Visitors can explore scenic trails that meander through the jungle and lead to stunning destinations like Turtle Beach (Pantai Kerachut), home to a turtle conservation center where endangered Green and Olive Ridley turtles are protected.
                    Another favorite spot is Monkey Beach, a beautiful stretch of sandy coastline where playful macaques roam freely. The park’s Canopy Walkway offers a thrilling perspective, allowing visitors to walk above the treetops and enjoy a bird’s-eye view of the vibrant rainforest below.
                </p>
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-attraction/spot1.1.jpg')} alt="img1" onClick={() => openModal(require('./images-attraction/spot1.1.jpg'))}/>
                        <img src={require('./images-attraction/spot1.4.jpeg')} alt="img2" onClick={() => openModal(require('./images-attraction/spot1.4.jpeg'))}/>
                    </div>
                    <div className="right">
                        <img src={require('./images-attraction/spot1.6.webp')} alt="img3" onClick={() => openModal(require('./images-attraction/spot1.6.webp'))}/>
                    </div>
                </div>
            </div>
            <div className="part2">
                <div className="collage">
                    <div className="left">
                        <img src={require('./images-attraction/spot1.2.webp')} alt="img4" onClick={() => openModal(require('./images-attraction/spot1.2.webp'))}/>
                        <img src={require('./images-attraction/spot1.5.jpg')} alt="img5" onClick={() => openModal(require('./images-attraction/spot1.5.jpg'))}/>
                    </div>
                    <div className="left">
                        <img src={require('./images-attraction/spot1.3.jpeg')} alt="img6" onClick={() => openModal(require('./images-attraction/spot1.3.jpeg'))}/>
                        <img src={require('./images-attraction/spot1.7.jpg')} alt="img7" onClick={() => openModal(require('./images-attraction/spot1.7.jpg'))}/>
                    </div>
                </div>
                <p>
                    In addition to hiking and nature trails, Penang National Park offers plenty of activities for adventure lovers.
                    Boat rides are available to explore the coastline, visit hidden coves, and gain access to remote beaches.
                    Wildlife enthusiasts will enjoy spotting animals such as monitor lizards, monkeys, and over 200 bird species, including the majestic white-bellied sea eagle.
                    For those who enjoy marine life, the park is also home to a meromictic lake at Turtle Beach—a unique body of water where salt and fresh water coexist without mixing.
                    Camping is another popular activity, allowing visitors to spend a night under the stars, surrounded by the sounds of nature. The Penang National Park Visitor Center provides a wealth of information about the park’s ecosystems, hiking routes, and conservation initiatives.
                    Whether you’re looking to relax on pristine beaches or immerse yourself in the wonders of nature, Penang National Park is a must-visit destination that showcases the diverse beauty of Penang Island.
                </p>
            </div>
            <div className="part3">
                <iframe
                    title="Penang National Park"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.8010844076416!2d100.19399229999999!3d5.447142299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304aebcd109625ed%3A0xe48f33317fbd27c1!2sPenang%20National%20Park!5e0!3m2!1sen!2smy!4v1735532910589!5m2!1sen!2smy"
                    width="100%" height="300" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <div className="fee">
                    <table>
                        <thead>
                        <tr>
                            <th></th>
                            <th>Citizen</th>
                            <th>Non-Citizen</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Adult</td>
                            <td>RM 10</td>
                            <td>RM 50</td>
                        </tr>
                        <tr>
                            <td>Student</td>
                            <td>RM 5</td>
                            <td>RM 20</td>
                        </tr>
                        <tr>
                            <td>Child</td>
                            <td>RM 5</td>
                            <td>RM 15</td>
                        </tr>
                        <tr>
                            <td>Senior Citizen</td>
                            <td>Free</td>
                            <td>Free</td>
                        </tr>
                        </tbody>
                    </table>
                    <p>You will only need to pay the National Park fees if you're visiting Turtle Beach,
                        or planning to hike on one of the trails (such as the most popular hike to Turtle Beach).
                        If you're just taking a return boat trip to Monkey Beach, there's no need to pay any fees.
                    </p>
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

export default Spot1;