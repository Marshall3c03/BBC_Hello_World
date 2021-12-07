import React from "react";
import '../static/CSS/EasterEgg.css';


const EasterEgg = () => {

    return(
        <>
        <div id = "info">
        <h1>Animals in Space!</h1>
        <p>
            Animals in space originally served to test the survivability of
            spaceflight, before human spaceflights were attempted.
        </p>
        <p>
            A wide variety of animals have been launched into space,
            including monkeys and apes, dogs, cats, tortoises, mice,
            rats, rabbits, birds, frogs, and insects.
        </p>
        <p>
            Two tortoises and a variety of insects were the first inhabitants of Earth to
            circle the Moon.
        </p>
        </div>

        <img id = "monkey" src = {require('../static/Monkey.png').default} alt="space monkey"/>
        <img id = "tortoise" src = {require('../static/Tortoise.png').default} alt="space monkey"/>
        <img id = "rocket" src = {require('../static/Rocket.png').default} alt="space monkey"/>
        </>
    );
};

export default EasterEgg;