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
    },
    {
        "name" : "Mercury",
        "diameter" : 4880,
        "distanceFromEarth" : 77000000,
        "moons" : [],
        "discovered" : "265 BC",
        "toEarthRatio": "0.3 Times",
        "surface-temperature" : "-173 - 427",
        "day-length" : 4222, //hours
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
    },
]);


db.solarsystem.insertMany([{ 
        "description": "The Solar System is the gravitationally bound system of the Sun and the objects that orbit it",
        "age": "4.571 billion years",
        "stars": [ {"name": "Sun"} ],
        "planets": [ 
            {"name": "Mercury"}, 
            {"name": "Venus"}, 
            {"name": "Earth"}, 
            {"name": "Mars"}, 
            {"name": "Jupiter"}, 
            {"name": "Saturn"}, 
            {"name": "Uranus"}, 
            {"name": "Neptune"}],
        "dwarfplanets": [
            {"name": "Ceres"}, 
            {"name": "Orcus"}, 
            {"name": "Pluto"}, 
            {"name": "Haumea"}, 
            {"name": "Quaoar"}, 
            {"name": "Makemake"}, 
            {"name": "Gonggong"}, 
            {"name": "Eris"}, 
            {"name": "Sedna"}],
        "location": "Local Interstellar Cloud, Local Bubble, Orion–Cygnus Arm, Milky Way", 
        "fact1": "The hottest planet isn’t closest to the sun.",
        "fact2": "The edge of the solar system is 1,000 times farther away than Pluto.",
        "fact3": "Sunlight Takes Around 8 Minutes To Reach Earth.",
        "fact4": "Space junk can move at more than 17,500 mph.",
        "fact5": "One object on our Solar System orbits the Sun backwards."
    },       
]);