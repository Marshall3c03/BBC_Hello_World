import React from "react";
import './AboutPage.css'

const AboutPage = () => {
    return(
        <div className="theTeam">
            <div className="brief-container">
                <div className="row">
                    <h2 >BBC Educational App</h2>
                    <p className="brief-item">The BBC are looking to improve their online offering of educational content by developing some interactive browser applications that display information in a fun and interesting way. Your task is to make an a Minimum Viable Product or prototype to put forward to them - this may only be for a small set of information, and may only showcase some of the features to be included in the final app.</p>
                </div>
            </div>
            <h1>The Team</h1>
            <div className="avatars">
                <div className="person">
                    <h3 className="names">
                        Anita Safar
                    </h3>
                    <img id='avatar' src='https://cdna.artstation.com/p/assets/images/images/010/502/410/original/dave-cockburn-psmonkey800400.gif?1524758817' alt='person avatar' width="100px"/>
                </div>
                <div className="person">
                    <h3 className="names">
                        Craig Marshall
                    </h3>
                    <img id='avatar' src='https://i.giphy.com/media/xT8qBhrlNooHBYR9f2/giphy.webp' alt='person avatar'/>
                </div>
                <div className="person">
                    <h3 className="names">
                        Ross Napier
                    </h3>
                    <img id='avatar' src='https://i.giphy.com/media/xTk9ZGZc51feh9BqX6/giphy.webp' alt='person avatar'/>
                </div>
                <div className="person">
                    <h3 className="names">
                        Sam Spencer
                    </h3>
                    <img id='avatar' src='https://i.giphy.com/media/biHH61yRTp0RZGNvxi/giphy.webp' alt='person avatar'/>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
