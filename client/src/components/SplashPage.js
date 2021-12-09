import React from "react";
import NASAclip from '../static/one_small_step.mp3';

//CSS ===============
import '../static/CSS/splashPage_style.css' ;
//CSS ===============

const SplashPage = () => {

    const splashOneShot = new Audio (NASAclip);

    React.useEffect(() => {
        splashOneShot.play()

        // return(
        //     splashOneShot.pause()
        // )
    }, [])

    return (
        <>
        <audio src="mysong.mp3" id="my_audio" autoplay="autoplay"></audio>
        <img id = "moon" src = {require('../static/moonlanding_apollo11.jpg').default} alt="moon"/>
        <p>YOU HAVE LANDED</p>

        </>
    )
}

export default SplashPage;