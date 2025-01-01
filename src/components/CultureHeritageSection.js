import React from "react";
import { Link } from "react-router-dom";
import "./Section.css";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function CultureHeritageSection() {
    return (
        <div className="heritage-section">
            <div className="title">
                <h2>Culture & Heritages</h2>
                <Link to="/culture-heritage" className="see-more-button">See More <FontAwesomeIcon icon={faArrowCircleRight}/></Link>
            </div>
            <div className="heritage-grid">
                <div className="heritage-item">
                    {/*<img src="/images/heritage1.jpg" alt="Heritage 1" />*/}
                    <h3>Temples</h3>
                </div>
                <div className="heritage-item">
                    {/*<img src="/images/heritage2.jpg" alt="Heritage 2" />*/}
                    <h3>Museums</h3>
                </div>
                <div className="heritage-item">
                    {/*<img src="/images/heritage3.jpg" alt="Heritage 3" />*/}
                    <h3>Festivals</h3>
                </div>
            </div>
        </div>
    );
}

export default CultureHeritageSection;
