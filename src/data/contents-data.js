const contents = [
    {
        id: "california-temps-precip",
        headline: "California Temperatures and Precipitation",
        subHeadline: "Interactive scatter plots, 50 years of weather data in the Golden State",
        src: "california-temps-precip",
        alt: "a female surfer wades into the waves",
        thumbHead: "California Weather",
        thumbSub: "Fifty years of NOAA data across the state",
        caption: "Surfer in Malibu, California. Photo: Terrell Woods",
        summary: "This interface lets users explore California's changing climate. It looks at NOAA data over a 50-year period. Specifically, it dynamically creates interactive scatter plots that display (1) the number of days each year with temperature over 90 degrees F, and (2) the annual precipitation in inches. The interface was built with Vue.js, Chart.js, and Mapbox. Data is stored locally, which proved more reliable and efficient than continually fetching historical data from NOAA using its API. Research was challenging. NOAA has numerous weather stations. But very few had continuous records for a 50-year period.",
        platform: "Netlify",
        buttons: {
            netlify: true,
            herokuSimple: false,
            herokuComplex: false,
            herokuComplexId: null
        },
        techs: "Vue.js, Vite, Mapbox, Chart.js, NOAA API, Git, GitHub, ESLint, Stylelint, Figma",
        wireframes: [
            {   
                src: "california-temps-precip1a",
                alt: "wireframe drawing of page, without styling",
                caption: "Wireframe 1A - Low fidelity with placeholders for image, map of California, and scatter plots"
            },
            {   
                src: "california-temps-precip1b",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 1B - High fidelity with image, map of California, and scatter plots"
            }
        ]
    },
    {
        id: "obama-scotus",
        headline: "Nominees",
        subHeadline: "Barack Obama's influence on Supreme Court nominees",
        src: "obama-scotus",
        alt: "Barack Obama walks arm and arm with Elena Kagan in the Oval Office",
        thumbHead: "Nominees",
        thumbSub: "Barack Obama's influence on the Supreme Court",
        caption: "Barack Obama walks newly confirmed Justice Elena Kagan into the Oval Office before a public ceremony at the White House, August 6, 2010. Photo: Pete Souza",
        summary: "This interface lets users explore a chronological timeline of Senator and President Barack Obama's influence over Supreme Court nominees. The interface features full-screen background images and smaller callouts with text and portraits. As the user scrolls, a callout moves into and eventually out of view. The background image and its caption update to match. Each scene has a small, medium, and large version of its background image so it remains readable across viewports. The interface was built with Vue.js.",
        platform: "Netlify",
        buttons: {
            netlify: true,
            herokuSimple: false,
            herokuComplex: false,
            herokuComplexId: null
        },
        techs: "Vue, Vite, Git, GitHub, ESLint, Stylelint, Figma",
        wireframes: [
            {   
                src: "obama-scotus1a",
                alt: "wireframe drawing of page, without styling",
                caption: "Wireframe 1A - Low fidelity with placeholder for image"
            },
            {   
                src: "obama-scotus1b",
                alt: "wireframe drawing of page, without styling",
                caption: "Wireframe 1B - Low fidelity as user scrolls and callout comes into view"
            },
            {   
                src: "obama-scotus1c",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 1C - High fidelity with images"
            },
            {   
                src: "obama-scotus2",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 2 - High fidelity with Sonia Sotomayor"
            },
            {   
                src: "obama-scotus3",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 3 - High fidelity with Merrick Garland"
            },
            {   
                src: "obama-scotus4",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 4 - High fidelity with Neal Gorsuch"
            }

        ]
    },
    {
        id: "global-fertility-rates",
        headline: "Global Fertility",
        subHeadline: "Interactive map, lists, and search for fertility rates around the world",
        src: "global-fertility-rates",
        alt: "children play soccer on gravel",
        thumbHead: "Global Fertility",
        thumbSub: "Rates from nations around the world",
        caption: "A game of beach soccer in Ashkutu, Iran. Photo: Mostafameraji",
        summary: "This interface lets users explore fertility rates around the world. Using data from the Central Intelligence Agency (CIA), it dynamically creates an interactive world map where users can toggle on/off specific rates and highlight/unhighlight the matching nations. Users can also toggle a pop-up info box for each nation which reveals its exact fertility rate. The interface also contains a list of fertility rates for all nations, a list of regional averages, and a search bar to look up a specific nation's rate. It was built with Vue.js and Mapbox, with data stored locally.",
        platform: "Netlify",
        buttons: {
            netlify: true,
            herokuSimple: false,
            herokuComplex: false,
            herokuComplexId: null
        },
        techs: "Vue, Vite, Mapbox, Git, GitHub, ESLint, Stylelint, Figma",
        wireframes: [
            {   
                src: "global-fertility-rates1a",
                alt: "wireframe drawing of page, without styling",
                caption: "Wireframe 1A - Low fidelity with placeholder for map"
            },
            {   
                src: "global-fertility-rates1b",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 1B - High fidelity with map"
            },
            {   
                src: "global-fertility-rates1c",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 1C - High fidelity with several fertility ranges highlighed on map and results for Spain in search bar"
            }
        ]
    },
    {
        id: "mt-washington-temps",
        headline: "Mt. Washington Temperatures",
        subHeadline: "Interactive line graph, average monthly summit temperatures, 2005 - 2023",
        src: "mt-washington-temps",
        alt: "climber holds the Marine Corps flag on a frigid summit",
        thumbHead: "Mt. Washington",
        thumbSub: "Average monthly summit temperatures",
        caption: "Marine Jonathan Szylobryt on the summit of Mt. Washington, January 2008. Photo: Department of Defense",
        summary: "This interface lets users explore data from the Mt. Washington Observatory. Specifically, it dynamically creates an interactive line graph that displays average monthly temperatures over several decades. The Observatory is located on the summit of Mt. Washington in North Conway, New Hampshire and is the highest point in the Northeastern United States. The interface was built with Vue.js and Chart.js. Data was downloaded from the Observatory and stored locally.",
        platform: "Netlify",
        buttons: {
            netlify: true,
            herokuSimple: false,
            herokuComplex: false,
            herokuComplexId: null
        },
        techs: "Vue, Vite, Chart.js, Git, GitHub, ESLint, Stylelint, Figma",
        wireframes: [
            {   
                src: "mt-washington-temps1a",
                alt: "wireframe drawing of page, without styling",
                caption: "Wireframe 1A - Low fidelity with placeholder for image and line graph"
            },
            {   
                src: "mt-washington-temps1b",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 1B - High fidelity with image and line graph"
            }

        ]
    },
    {
        id: "us-national-parks-alerts",
        headline: "US National Parks",
        subHeadline: "Interactive search feature for conditions at National Park Service properties",
        src: "us-national-parks-alerts",
        alt: "park ranger smiles on snowy field",
        thumbHead: "US National Parks",
        thumbSub: "Alerts from the National Park Service",
        caption: "Park Ranger Lydia Faller in Yellowstone National Park. Photo: Jacob W. Frank",
        summary: "This interface offers users a means to easily access alerts from the National Park Service (NPS) on conditions at any of its 471 areas. Alerts are drawn through an API managed by the NPS. The interface was built with Vue.js and Express.js. The Express server is used mainly to hide the API's access token in an environmental variable. It follows the design aesthetic of the National Park Service's digital products.",
        platform: "Heroku",
        buttons: {
            netlify: false,
            herokuSimple: false,
            herokuComplex: true,
            herokuComplexId: "fa601db96052"
        },
        techs: "Vue, Vite, Express, NPS API, Git, GitHub, ESLint, Stylelint, Figma",
        wireframes: [
            {   
                src: "us-national-parks-alerts1a",
                alt: "wireframe drawing of page, without styling",
                caption: "Wireframe 1A - Low fidelity with placeholders for logo and image"
            },
            {
                src: "us-national-parks-alerts1b",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 1B - High fidelity with logo and image"
            },
            {
                src: "us-national-parks-alerts2a",
                alt: "wireframe drawing of page, without styling",
                caption: "Wireframe 2A - Low fidelity with search for Acadia National Park"
            },
            {
                src: "us-national-parks-alerts2b",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 2B - High fidelity with search for Acadia National Park"
            },
            {
                src: "us-national-parks-alerts3a",
                alt: "wireframe drawing of page, without styling",
                caption: "Wireframe 3A - Low fidelity with results for Acadia National Park"
            },
            {
                src: "us-national-parks-alerts3b",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 3B - High fidelity with results for Acadia National Park"
            }
        ]
    },
    {
        id: "map-coordinates-dms",
        headline: "Map Coordinates",
        subHeadline: "Guided interface to convert Degree, Minutes, Seconds to Digital Degrees for computer-based mapping",
        src: "map-coordinates-dms",
        alt: "hikers gaze on snow covered hills ahead of them",
        thumbHead: "Map Coordinates",
        thumbSub: "DMS to DD converter for mapping software",
        caption: "Hikers on their way to the summit of Valijiya in Qom province, Iran. Photo: Mostafameraji",
        summary: "This interface lets users convert map coordinates from the traditional Degrees, Minutes, and Seconds (DMS) format to the Digital Degrees (DD) format used in computer-based mapping like Google Maps and Mapbox. It offers users a step by step guided interface to convert coordinates. It also dynamically generates a map of the location. The interface was built with Vue.js and Mapbox.",
        platform: "Netlify",
        buttons: {
            netlify: true,
            herokuSimple: false,
            herokuComplex: false,
            herokuComplexId: null
        },
        techs: "Vue, Vite, Mapbox, Git, GitHub, ESLint, Stylelint, Figma",
        wireframes: [
            {   
                src: "map-coordinates-dms1",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 1 - step 1, introduction"
            },
            {   
                src: "map-coordinates-dms2",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 2 - step 2, enter your coordinates or choose a sample location"
            },
            {   
                src: "map-coordinates-dms3",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 3 - step 3, longitude coordinates"
            },
            {   
                src: "map-coordinates-dms4",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 4 - step 4, latitude coordinates"
            },
            {   
                src: "map-coordinates-dms5",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 5 - step 5, level of precision"
            },
            {   
                src: "map-coordinates-dms6",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 6 - step 6, review the data"
            },
            {   
                src: "map-coordinates-dms7",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 7 - step 7, see converted coordinates and map of location"
            }
        ]
    },
    {
        id: "us-senate-directory",
        headline: "United States Senate",
        subHeadline: "Searchable and filterable directory of current Senators",
        src: "us-senate-directory",
        alt: "United States Capitol under a blue sky",
        thumbHead: "US Senate",
        thumbSub: "Current Senators by demographics",
        caption: "The United States Capitol in Washington, DC. Photo: Paul Sableman",
        summary: "This interface lets users explore current United States Senators. Using data from the US Senate, users can filter senators by state, gender, party, re-election date, or any combination of these. There is also a search bar so users can search for a senator by first, last, or full name. Since some senators have less formal and more formal names, the search was built to try to accommodate these variables. For example, people can search for Bob or Robert Casey, Dick or Richard Durbin. The interface was built with Vue.js, with data stored locally.",
        platform: "Netlify",
        buttons: {
            netlify: true,
            herokuSimple: false,
            herokuComplex: false,
            herokuComplexId: null
        },
        techs: "Vue, Vite, Git, GitHub, ESLint, Stylelint, Figma",
        wireframes: [
            {   
                src: "us-senate-directory1a",
                alt: "wireframe drawing of page, without styling",
                caption: "Wireframe 1A - Low fidelity with placeholders for seal and images"
            },
            {   
                src: "us-senate-directory1b",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 1B - High fidelity with seal and images"
            },
            {   
                src: "us-senate-directory2a",
                alt: "wireframe drawing of pop-up menu, without styling",
                caption: "Wireframe 2A - Low fidelity with menu for filtering"
            },
            {   
                src: "us-senate-directory2b",
                alt: "wireframe drawing of pop-up menu, with styling",
                caption: "Wireframe 2B - High fidelity with menu for filtering"
            },
            {   
                src: "us-senate-directory3a",
                alt: "wireframe drawing of independent senators search result, with styling",
                caption: "Wireframe 3A - High fidelity with results for Independent Senators"
            }
        ]
    },
    {
        id: "nyc-shooting-incidents",
        headline: "New York City Shootings",
        subHeadline: "Year to date dashboard, stats, and map on gunplay in the five boroughs",
        src: "nyc-shooting-incidents",
        alt: "police officer flanked by Manhattan skyscrapers",
        thumbHead: "NYC Shootings",
        thumbSub: "Year to date dashboard, stats and map",
        caption: "A member of New York's Finest keeps watch on a summer day. Photo: See-ming Lee",
        summary: "This interface lets users explore a dashboard and interactive map of year-to-date shooting incidents in New York City. The interface utilizes Open Data NYC's API to gather a list of individual shootings compiled by the NYPD. From there, it dynamically creates an interactive map with pins (and info pop-ups) for each shooting. It then sorts and compiles the data into statistics and populates a chart with them. The interface was built with Vue.js, Express.js, and Mapbox. The Express server is used mainly to hide the API's access token in an environmental variable. It follows the design aesthetic of NYC government's digital products.",
        platform: "Heroku",
        buttons: {
            netlify: false,
            herokuSimple: true,
            herokuComplex: false,
            herokuComplexId: null
        },
        techs: "Vue, Vite, Express, Mapbox, Open Data NYC API, Git, GitHub, ESLint, Stylelint, Figma",
        wireframes: [
            {   
                src: "nyc-shooting-incidents1a",
                alt: "wireframe drawing of page, without styling",
                caption: "Wireframe 1A - Low fidelity with placeholders for logos and map"
            },
            {   
                src: "nyc-shooting-incidents1b",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 1B - High fidelity with logos and map"
            }
        ]
    },
    {
        id: "nyc-public-pools",
        headline: "New York City Public Pools",
        subHeadline: "Searchable and filterable directory of public, city-owned swimming pools in the five boroughs",
        src: "nyc-public-pools",
        alt: "big beautiful pool awaits swimmers",
        thumbHead: "NYC Pools",
        thumbSub: "Public, city owned swimming pools",
        caption: "Swimming pool in Astoria Park, Queens. Photo: Global Jet",
        summary: "This interface lets users explore public, city-owned swimming pools in New York City. Using data from NYC's Parks Department, it creates a list of pools that can be filtered by borough, pool type, swim type, or a combination of the three. There is also a search bar to search for a pool by name. Returned pools appear as boxes with basic information (name, address, telephone). When clicked or tapped, the boxes pop up and expand to reveal more information such a pool dimensions and depth. The interface was built with Vue.js, with data stored locally. It follows the design aesthetic of NYC government's digital products.",
        platform: "Netlify",
        buttons: {
            netlify: true,
            herokuSimple: false,
            herokuComplex: false,
            herokuComplexId: null
        },
        techs: "Vue, Vite, Git, GitHub, ESLint, Stylelint, Figma",
        wireframes: [
            {   
                src: "nyc-public-pools1a",
                alt: "wireframe drawing of page, without styling",
                caption: "Wireframe 1A - Low fidelity with placeholder for logo"
            },
            {   
                src: "nyc-public-pools1b",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 1B - High fidelity with logo"
            },
            {   
                src: "nyc-public-pools2a",
                alt: "wireframe drawing of page, without styling",
                caption: "Wireframe 2A - Low fidelity with results for indoor, swimming, Queens"
            },
            {   
                src: "nyc-public-pools2b",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 2B - High fidelity with results for indoor, swimming, Queens"
            },
            {   
                src: "nyc-public-pools3a",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 3A - High fidelity with details for Roy Wilkins Pool"
            }
        ]
    },
    {
        id: "nyc-firehouses",
        headline: "New York City Firehouses",
        subHeadline: "Interactive map of firehouses in the five boroughs",
        src: "nyc-firehouses",
        alt: "firefighters, trucks, and tangle of hoses on scene",
        thumbHead: "FDNY",
        thumbSub: "Map of firehouses in the five boroughs",
        caption: "FDNY on scene at a fire in Brooklyn. Photo: Billie Grace Ward",
        summary: "This interface lets users explore firehouses in NYC. Using data from the FDNY, it dynamically creates an interactive map with pins (and info pop-ups) of firehouses within the five boroughs. The interface was built with Vue.js and Mapbox, with data stored remotely at Mapbox. It follows the design aesthetic of FDNY digital products.",
        platform: "Netlify",
        buttons: {
            netlify: true,
            herokuSimple: false,
            herokuComplex: false,
            herokuComplexId: null
        },
        techs: "Vue.js, Vite, Mapbox, Open Data NYC API, Git, GitHub, ESLint, Stylelint, Figma",
        wireframes: [
            {   
                src: "nyc-firehouses1a",
                alt: "wireframe drawing of page, without styling",
                caption: "Wireframe 1A - Low fidelity with placeholders for logos and map"
            },
            {   
                src: "nyc-firehouses1b",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 1B - High fidelity with logos and map"
            },
            {   
                src: "nyc-firehouses1c",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 1C - High fidelity with pop-up displayed"
            }
        ]
    },
    {
        id: "img-gallery",
        headline: "Image Gallery",
        subHeadline: "Utility image carousel with arrows",
        src: "img-gallery",
        alt: "young women smiling for selfies outdoors",
        thumbHead: "Image Gallery",
        thumbSub: "Carousel of photos with viewing options",
        caption: "Snapshots at Hokitika Gorge on the west coast of New Zealand. Photo: Stewart Nimmo",
        summary: "This interface lets users explore images in a carousel. It loops through an object of data (file names, captions, alt tags, etc.) to dynamically create the carousel. From there, users can navigate images by clicking/tapping directional arrows or directly on thumbnails. The selected thumbnail is shaded to indicate its state. The interface was built with Vue.js with data stored locally.",
        platform: "Netlify",
        buttons: {
            netlify: true,
            herokuSimple: false,
            herokuComplex: false,
            herokuComplexId: null
        },
        techs: "Vue, Vite, Git, GitHub, ESLint, Stylelint, Figma",
        wireframes: [
            {   
                src: "img-gallery1a",
                alt: "wireframe drawing of page, without styling",
                caption: "Wireframe 1A - Low fidelity with placeholders for images"
            },
            {   
                src: "img-gallery1b",
                alt: "wireframe drawing of page, with styling",
                caption: "Wireframe 1B - High fidelity with images"
            }
        ]
    }
];

export { contents };