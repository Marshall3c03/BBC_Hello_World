import React from "react";
import './AboutPage.css'

const AboutPage = () => {
    return(
        <div>
            <h1>The Team</h1>
            <div>
                <p>
                    Anita Safar
                    <img id='avatar' src='https://preview.redd.it/c4tc8qfdnfl61.png?width=640&crop=smart&auto=webp&s=6cb2d2f033823939489bb79d670abfe6f3b27329' alt='person avatar'/>
                </p>
            </div>
            <div>
                <p>
                    Craig Marshall
                    <img id='avatar' src='https://img2.pngdownload.id/20180619/juy/kisspng-chimpanzee-ham-ape-bicycle-helmets-helmet-astronaut-5b29c19bd4dfd6.976971231529463195872.jpg' alt='person avatar'/>
                </p>
            </div>
            <div>
                <p>
                    Ross Napier
                    <img id='avatar' src='https://image.pngaaa.com/891/1886891-middle.png' alt='person avatar'/>
                </p>
            </div>
            <div>
                <p>
                    Sam Spencer
                    <img id='avatar' src='' alt='person avatar'/>
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
