// dependancies
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

// this function will redirect the user to the front page after inactivity 
// useful as this is a public app for an event

export const IdleRedirect = () => {
    // const [checked, setChecked] = useState(false);
    // const [videoExists, setVideo] = useState(false);

    // get router methods
    const navigate = useNavigate();
    const location = useLocation();

    // check if video exists on page
    // useEffect(() => {
    //     const videoElement = document.getElementsByTagName('video');
    //     if (videoElement.length > 0) {
    //         // console.log("video found");
    //         setVideo(true);
    //         idleDurationSecs = 100000;
    //     }
    //     //  else {
    //     //     // console.log("no video found");
    //     //     setVideo(false);
    //     // }
    //     // setChecked(true);
    // });

    let idleDurationSecs = 180;

    let idleTimeout; // variable to hold the timeout

    const resetIdleTimeout = () => {
        // Clears the existing timeout
        if (idleTimeout) clearTimeout(idleTimeout);
        // Set a new idle timeout to load the redirectUrl after idleDurationSecs
        idleTimeout = setTimeout(() => {
            navigate("/")
        }, idleDurationSecs * 1000);
    };

    // Init on page load
    resetIdleTimeout();

    // Reset the idle timeout on any of the events listed below
    ['click', 'touchstart', 'mousemove', 'wheel', 'mousewheel'].forEach(e =>
        document.addEventListener(e, resetIdleTimeout, false)
    );
}
