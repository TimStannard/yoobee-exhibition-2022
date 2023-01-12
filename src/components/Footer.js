// dependencies
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// img
import igniteLogo from '../img/hero-logo-reversed.svg';
import yoobeeLogo from '../img/yoobee-logo-white.png';
// util
import { randomStudentLink } from '../util/randomStudentLink';

const Footer = () => {
    // react router
    let navigate = useNavigate();

    // store link in state to update it
    const [link, setLink] = useState(randomStudentLink());

    // run this for random student
    const goToRandomStudent = () => {
        setLink(randomStudentLink());
        navigate(link);
        navigate(0);
    }

    return (
        // <div id="footer" style={{
        //     backgroundImage: "url(" + "../img/txture.png" + ")"
        // }}>
        <div id="footer">
            <div id="footer-section-container">
                <div className="footer-section">
                    <ul>
                        <li id="ignite-logo">
                            <Link to="/">
                                <img src={igniteLogo} alt="star icon" />
                            </Link>
                        </li>
                        <li id="yoobee-logo">
                            <Link to="/">
                                <img src={yoobeeLogo} alt="star icon" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h5>Faculties</h5>
                    <div className="grey-heading-divider"></div>
                    <ul id="footer-faculties">
                        <li>
                            <Link to="/webUx">
                                Web & UX
                            </Link>
                        </li>
                        <li>
                            <Link to="/animation">
                                Animation
                            </Link>
                        </li>
                        <li>
                            <Link to="/film">
                                Film & Television
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h5>Random Student</h5>
                    <div className="grey-heading-divider"></div>
                    <ul>
                        <li>
                            <p onClick={() => goToRandomStudent()}>
                                Surprise me!
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="bottom-bar">
                Copyright 2022© Yoobee Colleges | Website Design: Tim Stannard
            </div>
        </div>
    )
}

export default Footer