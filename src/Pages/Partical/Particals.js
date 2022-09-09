import React from 'react';
import Particles from "react-particles-js";
import './Particals.css'
const Particals = () => {
    return (
        <div>
            <div id="particles-js"></div>

            {/* <!-- stats - count particles --> */}
            <div class="count-particles">
                <span class="js-count-particles">--</span> particles
            </div>
        </div>
    );
};

export default Particals;