import React from 'react';
import './ProgressBar.css'
const ProgressBar = () => {
    return (
        // <div className='container'>
        //     <div className="skills">

        //         <h1>HTML</h1>
        //         <div className="progress-bar">
        //             <div className="html">
        //                 <span>90%</span>
        //             </div>
        //         </div>

        //         <h1>CSS</h1>
        //         <div className="progress-bar">
        //             <div className="html">
        //                 <span>90%</span>
        //             </div>
        //         </div>

        //         <h1>JAVASCRIPT</h1>
        //         <div className="progress-bar">
        //             <div className="html">
        //                 <span>90%</span>
        //             </div>
        //         </div>

        //         <h1>Node Js</h1>
        //         <div className="progress-bar">
        //             <div className="html">
        //                 <span>90%</span>
        //             </div>
        //         </div>
        //         <h1>React Js</h1>
        //         <div className="progress-bar">
        //             <div className="html">
        //                 <span>90%</span>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div>
            <div class="skill-container">
                <ul>

                    <li class="html">HTML/CSS</li>
                    <li class="css">Web Design</li>
                    <li class="js">JavaScript</li>
                    <li class="rs">React JS</li>
                    <li class="ex">Express.JS</li>
                    <li class="node">Node.JS</li>

                </ul>
            </div>
        </div>
    );
};

export default ProgressBar;