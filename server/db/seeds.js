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
        "toEarthRatio": "1,300,000 Times",
        "surface-temperature" : "5505",
        "day-length" : 588, //hours
        "fact" : "The temperature inside the Sun can reach 15 million degrees Celsius",
        "left_planet" : "Pluto",
        "right_planet" : "Mercury"
    },
    {
        "name" : "Mercury",
        "diameter" : 4880,
        "distanceFromEarth" : 77000000,
        "moons" : [],
        "discovered" : "265 BC",
        "toEarthRatio": "0.3 Times",
        "surface-temperature" : "-173 - 427",
        "day-length" : 4222, //hours,
        "fact" : "Mercury’s craters are named after famous artists, musicians and authors",
        "left_planet" : "Sun",
        "right_planet" : "Venus"
    },
    {
        "name" : "Venus",
        "diameter" : 12104, //km
        "distanceFromEarth" : 61000000, //km
        "moons" : [],
        "discovered" : "1610",
        "toEarthRatio": "0.9 Times",
        "surface-temperature" : "462", //degrees c
        "day-length" : 2803, //hours
        "fact" : "Venus is the hottest planet in the solar system",
        "left_planet" : "Mercury",
        "right_planet" : "Earth"
    },
    {
        "name" : "Earth",
        "diameter" : 12742, //km
        "distanceFromEarth" : 0, //km
        "moons" : [
            {"name" : "The Moon"}
        ],
        "discovered" : "Day 1",
        "toEarthRatio": "1 Times",
        "surface-temperature" : "-88 - 58",
        "day-length" : 24, //hours
        "fact" : "Earth’s atmosphere protects us from meteoroids and radiation from the Sun",
        "left_planet" : "Venus",
        "right_planet" : "Mars"
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
        "toEarthRatio": "0.5 Times",
        "surface-temperature" : "-87 - -5",
        "day-length" : 25, //hours
        "fact" : "There have been more missions to Mars than any other planet",
        "left_planet" : "Earth",
        "right_planet" : "Jupiter"
    },
    {
        "name" : "Jupiter",
        "diameter" : 139820, //km
        "distanceFromEarth" : 588000000, //km
        "moons" : 79,
        "discovered" : "1610",
        "toEarthRatio": "11 Times",
        "surface-temperature" : "-108",
        "day-length" : 10, //hours
        "fact" : "Jupiter has more than double the mass of all the other planets combined",
        "left_planet" : "Mars",
        "right_planet" : "Saturn"
    },
    {
        "name" : "Saturn",
        "diameter" : 116460, //km
        "distanceFromEarth" : 1200000000, //km
        "moons" : 82,
        "discovered" : "1610",
        "toEarthRatio": "9 Times",
        "surface-temperature" : "-139",
        "day-length" : 11, //hours
        "fact" : "Saturn has more moons than any other planet in the Solar System",
        "left_planet" : "Jupiter",
        "right_planet" : "Uranus"
    },
    {
        "name" : "Uranus",
        "diameter" : 50724, //km
        "distanceFromEarth" : 2600000000, //km
        "moons" : 27,
        "discovered" : "1781",
        "toEarthRatio": "4 Times",
        "surface-temperature" : "-197",
        "day-length" : 17, //hours
        "fact" : "Uranus has only been visited by a single spacecraft, Voyager 2",
        "left_planet" : "Saturn",
        "right_planet" : "Neptune"
    },
    {
        "name" : "Neptune",
        "diameter" : 49244, //km
        "distanceFromEarth" : 4300000000, //km
        "moons" : 14,
        "discovered" : "1846",
        "toEarthRatio": "3.9 Times",
        "surface-temperature" : "-201",
        "day-length" : 16, //hours
        "fact" : "It takes like more than 4 hours for light to reach Neptune from the Sun",
        "left_planet" : "Uranus",
        "right_planet" : "Pluto"
    },
    {
        "name" : "Pluto",
        "diameter" : 2377, //km
        "distanceFromEarth" : 4280000000, //km
        "moons" : 5,
        "discovered" : "1930",
        "toEarthRatio": "0.2 Times",
        "surface-temperature" : "-232",
        "day-length" : 154, //hours
        "fact" : "Pluto was reclassified in 2006 from a planet to a dwarf planet",
        "left_planet" : "Neptune",
        "right_planet" : "Sun"
    },
]);