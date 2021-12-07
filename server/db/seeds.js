use planets;

db.dropDatabase();

db.planets.insertMany([
    {
        "name" : "Sun",
        "diameter" : 1392700, //km
        "distanceFromEarth" : 150000000, //km
        "moons" : [
            { "name" : "3122 Florence"},
            { "name" : "90482 Orcus"}
        ],
        "discovered" : "Day 1",
        "toEarthRatio": 1300000,
        "surface-temperature" : "5505",
        "day-length" : 588, //hours
        "fact" : "The temperature inside the Sun can reach 15 million degrees Celsius",
        "left_planet" :
            {"name" : "Pluto",
            "diameter" : 2377,
            "day_length" : 4222},
        "right_planet" : 
            {"name" : "Mercury",
            "diameter" : 154,
            "day_length" : 4222}
    },
    {
        "name" : "Mercury",
        "diameter" : 4880,
        "distanceFromEarth" : 77000000,
        "moons" : [],
        "discovered" : "265 BC",
        "toEarthRatio": 0.3,
        "surface-temperature" : "-173 - 427",
        "day-length" : 4222, //hours,
        "fact" : "Mercury's craters are named after famous artists, musicians and authors",
        "left_planet" :
            {"name" : "Sun",
            "diameter" : 1392700,
            "day_length" : 588},
        "right_planet" : 
            {"name" : "Venus",
            "diameter" : 12104,
            "day_length" : 2803}
    },
    {
        "name" : "Venus",
        "diameter" : 12104, //km
        "distanceFromEarth" : 61000000, //km
        "moons" : [],
        "discovered" : "1610",
        "toEarthRatio": 0.9,
        "surface-temperature" : "462", //degrees c
        "day-length" : 2803, //hours
        "fact" : "Venus is the hottest planet in the solar system",
        "left_planet" :
            {"name" : "Mercury",
            "diameter" : 4880,
            "day_length" : 4222},
        "right_planet" : 
            {"name" : "Earth",
            "diameter" : 12742,
            "day_length" : 24}
    },
    {
        "name" : "Earth",
        "diameter" : 12742, //km
        "distanceFromEarth" : 0, //km
        "moons" : [
            {"name" : "The Moon"}
        ],
        "discovered" : "Day 1",
        "toEarthRatio": 1,
        "surface-temperature" : "-88 - 58",
        "day-length" : 24, //hours
        "fact" : "Earth's atmosphere protects us from meteoroids and radiation from the Sun",
        "left_planet" :
            {"name" : "Venus",
            "diameter" : 12104,
            "day_length" : 2803},
        "right_planet" : 
            {"name" : "Mars",
            "diameter" : 6779,
            "day_length" : 25}
    },
    {
        "name" : "Mars",
        "diameter" : 6779, //km
        "distanceFromEarth" : 54600000, //km
        "moons" : [
            {"name" : "Phobos"},
            {"name" : "Deimos"} 
        ],
        "discovered" : "1610",
        "toEarthRatio": 0.5,
        "surface-temperature" : "-87 - -5",
        "day-length" : 25, //hours
        "fact" : "There have been more missions to Mars than any other planet",
        "left_planet" :
            {"name" : "Earth",
            "diameter" : 12742,
            "day_length" : 24},
        "right_planet" : 
            {"name" : "Jupiter",
            "diameter" : 139820,
            "day_length" : 10}
    },
    {
        "name" : "Jupiter",
        "diameter" : 139820, //km
        "distanceFromEarth" : 588000000, //km
        "moons" : 79,
        "discovered" : "1610",
        "toEarthRatio": 11,
        "surface-temperature" : "-108",
        "day-length" : 10, //hours
        "fact" : "Jupiter has more than double the mass of all the other planets combined",
        "left_planet" :
            {"name" : "Mars",
            "diameter" : 6779,
            "day_length" : 25},
        "right_planet" : 
            {"name" : "Saturn",
            "diameter" : 116460,
            "day_length" : 11}
    },
    {
        "name" : "Saturn",
        "diameter" : 116460, //km
        "distanceFromEarth" : 1200000000, //km
        "moons" : 82,
        "discovered" : "1610",
        "toEarthRatio": 9,
        "surface-temperature" : "-139",
        "day-length" : 11, //hours
        "fact" : "Saturn has more moons than any other planet in the Solar System",
        "left_planet" :
            {"name" : "Jupiter",
            "diameter" : 139820,
            "day_length" : 10},
        "right_planet" : 
            {"name" : "Uranus",
            "diameter" : 50742,
            "day_length" : 17}
    },
    {
        "name" : "Uranus",
        "diameter" : 50724, //km
        "distanceFromEarth" : 2600000000, //km
        "moons" : 27,
        "discovered" : "1781",
        "toEarthRatio": 4,
        "surface-temperature" : "-197",
        "day-length" : 17, //hours
        "fact" : "Uranus has only been visited by a single spacecraft, Voyager 2",
        "left_planet" :
            {"name" : "Saturn",
            "diameter" : 116460,
            "day_length" : 11},
        "right_planet" : 
            {"name" : "Neptune",
            "diameter" : 49244,
            "day_length" : 16}
    },
    {
        "name" : "Neptune",
        "diameter" : 49244, //km
        "distanceFromEarth" : 4300000000, //km
        "moons" : 14,
        "discovered" : "1846",
        "toEarthRatio": 3.9,
        "surface-temperature" : "-201",
        "day-length" : 16, //hours
        "fact" : "It takes like more than 4 hours for light to reach Neptune from the Sun",
        "left_planet" :
            {"name" : "Uranus",
            "diameter" : 50742,
            "day_length" : 17},
        "right_planet" : 
            {"name" : "Pluto",
            "diameter" : 2377,
            "day_length" : 4222}
    },
    {
        "name" : "Pluto",
        "diameter" : 2377, //km
        "distanceFromEarth" : 4280000000, //km
        "moons" : 5,
        "discovered" : "1930",
        "toEarthRatio": 0.2,
        "surface-temperature" : "-232",
        "day-length" : 154, //hours
        "fact" : "Pluto was reclassified in 2006 from a planet to a dwarf planet",
        "left_planet" :
            {"name" : "Neptune",
            "diameter" : 49244,
            "day_length" : 16},
        "right_planet" : 
            {"name" : "Sun",
            "diameter" : 1392700,
            "day_length" : 588}
    },
]);

db.questions.insertMany([
    {
        phrase: "Where is the asteroid belt?",
        answer: ["Between Earth and Venus", "Between Jupiter and Saturn", "Between Earth and Mars", "Between Mars and Jupiter"],
        fact: "The asteroid belt is found in a region between the planets Mars and Jupiter",
        correctAnswer: "Between Mars and Jupiter"
    },
    {
        phrase: "Which of these planets is the smallest?",
        answer: ["Uranus", "Earth", "Jupiter", "Mercury"],
        fact: "Mercury is 4,879km Wide and is the smallest planet",
        correctAnswer: "Mercury"
    },
    {
        phrase: "What is the Sun mainly made from?",
        answer: ["Liquid lava", "Gas", "Rock", "Molten iron"],
        fact: "The Sun is mainly made from hydrogen and helium gas",
        correctAnswer: "Gas"
    },
    {
        phrase: "What are comets mostly made of?",
        answer: ["Rusty metal", "Dirty ice and dust", "Hot, liquid rock", "Poisonous liquid"],
        fact: "Comets are mostly made of snow, ice and dust.",
        correctAnswer: "Dirty ice and dust"
    },
    {
        phrase: "Which of these best describes the atmosphere surrounding Venus?",
        answer: ["Bright and sunny", "Cold and snowy", "Cold and wet", "Hot and Poisonous"],
        fact: "Venus is surrounded by thick, acidic clouds around 50km above its surface.",
        correctAnswer: "Hot and Poisonous"
    },
    {
        phrase: "Which is the closest planet to the Sun?",
        answer: ["Mercury", "Venus", "Neptune", "Earth"],
        fact: "Mercury is the closest planet to the sun",
        correctAnswer: "Mercury"
    },
    {
        phrase: "How many moons does Mars have?",
        answer: ["50 Moons", "1 Moon", "13 Moons", "2 Moons"],
        fact: "Mars has two moons.",
        correctAnswer: "2 Moons"
    },
    {
        phrase: "What is the Great Red Spot on Jupiter?",
        answer: ["A crater", "A storm", "A volcano", "A lake"],
        fact: "The Great Red Spot is a massive storm in Jupiter's atmosphere",
        correctAnswer: "A storm"
    },
    {
        phrase: "Which planet do the moons Oberon and Titania belong to?",
        answer: ["Earth", "Jupiter", "Uranus", "Venus"],
        fact: "Oberon and Titania are two of Uranus's 27 moons.",
        correctAnswer: "Uranus"
    },
    {
        phrase: "The largest volcano in the Solar System is called Olympus Mons. Which planet holds it?",
        answer: ["Earth", "Mars", "Jupiter", "Venus"],
        fact: "Olympus Mons, the largest volcano in the Solar System, is on Mars.",
        correctAnswer: "Mars"
    },
])