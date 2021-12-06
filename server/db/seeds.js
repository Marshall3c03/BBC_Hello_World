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
        "day_length" : 588, //hours
    },
    {
        "name" : "Mercury",
        "diameter" : 4880,
        "distanceFromEarth" : 77000000,
        "moons" : [],
        "discovered" : "265 BC",
        "toEarthRatio": 0.3,
        "surface-temperature" : "-173 - 427",
        "day_length" : 4222, //hours
    },
    {
        "name" : "Venus",
        "diameter" : 12104, //km
        "distanceFromEarth" : 61000000, //km
        "moons" : [],
        "discovered" : "1610",
        "toEarthRatio": 0.9,
        "surface-temperature" : "462", //degrees c
        "day_length" : 2803, //hours
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
        "day_length" : 24, //hours
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
        "day_length" : 25, //hours
    },
    {
        "name" : "Jupiter",
        "diameter" : 139820, //km
        "distanceFromEarth" : 588000000, //km
        "moons" : 79,
        "discovered" : "1610",
        "toEarthRatio": 11,
        "surface-temperature" : "-108",
        "day_length" : 10, //hours
    },
    {
        "name" : "Saturn",
        "diameter" : 116460, //km
        "distanceFromEarth" : 1200000000, //km
        "moons" : 82,
        "discovered" : "1610",
        "toEarthRatio": 9,
        "surface-temperature" : "-139",
        "day_length" : 11, //hours
    },
    {
        "name" : "Uranus",
        "diameter" : 50724, //km
        "distanceFromEarth" : 2600000000, //km
        "moons" : 27,
        "discovered" : "1781",
        "toEarthRatio": 4,
        "surface-temperature" : "-197",
        "day_length" : 17, //hours
    },
    {
        "name" : "Neptune",
        "diameter" : 49244, //km
        "distanceFromEarth" : 4300000000, //km
        "moons" : 14,
        "discovered" : "1846",
        "toEarthRatio": 3.9,
        "surface-temperature" : "-201",
        "day_length" : 16, //hours
    },
    {
        "name" : "Pluto",
        "diameter" : 2377, //km
        "distanceFromEarth" : 4280000000, //km
        "moons" : 5,
        "discovered" : "1930",
        "toEarthRatio": 0.2,
        "surface-temperature" : "-232",
        "day_length" : 154, //hours
    },
]);