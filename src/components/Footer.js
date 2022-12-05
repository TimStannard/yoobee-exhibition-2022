import { Link } from "react-router-dom";
import igniteLogo from '../img/hero-logo-reversed.svg';
import yoobeeLogo from '../img/yoobee-logo-white.png';

const Footer = () => {
    return (
        <div id="footer">
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
            </div><div className="footer-section">
                <ul>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
            </div>
            <div id="bottom-bar">
                Copyright 2022© Yoobee Colleges | Website Design: Tim Stannard
            </div>
        </div>
    )
}

export default Footer