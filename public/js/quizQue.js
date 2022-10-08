// let quiz = [
//     {
//         q: "Q. What is the square root of 144?",
//         option: ["12", "7", "11", "16"],
//         ans: 0,
//         theme: "img/math.png",
//         learn: "The positive number, when multiplied by itself, represents the square of the number. The square root of the square of a positive number gives the original number. For example, the square of 3 is 9, 32 = 9 and the square root of 9, √9 = 3. Since 9 is a perfect square, hence it is easy to find the square root."
//     },
//     {
//         q: "Q. What is Earth’s only natural satellite?",
//         option: ["Sun", "Mars", "Moon", "Venus"],
//         ans: 2,
//         theme: "img/earth.png",
//         learn: "Although the Moon is Earth's only natural satellite, there are a number of near-Earth objects (NEOs) with orbits that are in resonance with Earth. These have been called "second" moons of Earth. 469219 Kamoʻoalewa, an asteroid discovered on 27 April 2016, is possibly the most stable quasi-satellite of Earth."
//     },
//     {
//         q: "Q. What star shines in the day and provides light?",
//         option: ["Neptune", "Mars", "Sun", "Jupiter"],
//         ans: 2,
//         theme: "img/solar.png",
//         learn: "The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light, ultraviolet light, and infrared radiation."
//     },
//     {
//         q: "Q. What tissue connects muscles to bones?",
//         option: ["Skin", "Blood vessels", "Fat", "Tendon"],
//         ans: 3,
//         theme: "img/connect.png",
//         learn: "A tendon is a fibrous connective tissue that attaches muscle to bone. Tendons may also attach muscles to structures such as the eyeball. A tendon serves to move the bone or structure."
//     },
//     {
//         q: "Q. Which nutrient plays an essential role in muscle-building?",
//         option: ["Proteins", "Carbohydrates", "Iron", "Fat"],
//         ans: 1,
//         theme: "img/muscle.png",
//         learn: "Carbohydrates, or carbs, are sugar molecules. Along with proteins and fats, carbohydrates are one of three main nutrients found in foods and drinks. Your body breaks down carbohydrates into glucose. Glucose, or blood sugar, is the main source of energy for your body's cells, tissues, and organs"
//     },
//     {
//         q: "Q. Name the acid that is secreted in the stomach?",
//         option: ["Sulphric acid", "Nitric Acid", "Hydrochloric acid", "Phosphoric acid"],
//         ans: 2,
//         theme: "img/stomach.png",
//         learn: "Stomach secretions are made up of hydrochloric acid, several enzymes, and a mucus coating that protects the lining of your stomach. Hydrochloric acid helps your body to break down, digest, and absorb nutrients such as protein. It also eliminates bacteria and viruses in the stomach, protecting your body from infection.Hydrochloric acid [H+(aq) Cl−(aq) or H3O+ Cl−], also known as muriatic acid, is an aqueous solution of hydrogen chloride (chemical formula: HCl)."
//     },
//     {
//         q: "Q. Which system of the body controls the senses?",
//         option: ["Circulatory system", "Digestive system", "Skeletal system", "Nervous system"],
//         ans: 3,
//         theme: "img/sense.png",
//         learn: "Broadly speaking, the nervous system is organised into two main parts, the central nervous system (CNS) and the peripheral nervous system (PNS). The CNS is the processing centre of the body and consists of the brain and the spinal cord. Both of these are protected by three layers of membranes known as meninges."
//     },
//     {
//         q: "Q. Which scientist proposed the three laws of motion?",
//         option: ["Isaac Newton", "Thomas Alva Edison", "Albert Einstein", "Stephen Hawking"],
//         ans: 0,
//         theme: "img/scientist.png",
//         learn: "Newton's laws of motion, three statements describing the relations between the forces acting on a body and the motion of the body, first formulated by English physicist and mathematician Isaac Newton, which are the foundation of classical mechanics."
//     },
//     {
//         q: "Q. Which is the largest animal on earth?",
//         option: ["Shark", "Elephant", "Giraffe", "Blue Whale"],
//         ans: 3,
//         theme: "img/animal.png",
//         learn: `Blue Whales Can Grow More Than 100 Feet Long. They are gigantic. Generally ranging in length from 80 to 100 feet (24 to 30 meters), the longest one ever recorded was a magnificent 108 feet (33 meters) long. That's about as long as three school buses lined up end to end.`
//     }
//     // ,
//     // {
//     //     q: "Q. Blue is located at which number in a rainbow from top?",
//     //     option: ["Sixth", "Third", "Fifth", "Fourth"],
//     //     ans: 2,
//     //     theme: "",
//     //     learn: "From top to bottom the colors of the rainbow follow the sequence Red, Orange, Yellow, Green, Blue, Indigo Violet."
//     // },
//     // {
//     //     q: "Q. Soil is eroded heavily due to deforestation; it affects the flowing of surface water badly. Which of the following is badly affected by these causes?",
//     //     option: ["Human Resource", "Ecological System", "Climate", "Local Plants"],
//     //     ans: 2,
//     //     theme: "",
//     //     learn: "Soil is eroded heavily due to deforestation; it affects the flowing of surface water badly. Ecological System is badly affected by these causes. An ecosystem or ecological system is the base of habitats of species. In ecosystem biotic boings (living organisms) interact with abiotic beings (non-living things), Deforestation leads to soil erosion vanishing the habitats thus damaging ecosystem"
//     // },
//     // {
//     //     q: "Q. What is the cause of Greenhouse effect?",
//     //     option: ["Nitrogen", "Carbon Dioxide", "Carbon Monoxide", "Nitrogen Dioxide"],
//     //     ans: 2,
//     //     theme: "",
//     //     learn: "Carbon Dioxide is the cause of 'Greenhouse effect As Co2 shows greenhouse tendency i.e.. it allows the solar light to reach earth but does not allow it to escape back into space &leads to global warming (Greenhouse effect) through rise in temperature."
//     // },
//     // {
//     //     q: "Q. Richter scale is a __. ",
//     //     option: ["Logarithmic scale", "Calculus scale ", "Volumetric scale", "Area to vibration ratio scale"],
//     //     ans: 0,
//     //     theme: "",
//     //     learn: "The Richter scale is a logarithmic scale used to express the total amount of energy released by an earthquake. Each number increase on the Richter scale indicates an intensity ten times stronger. For example, an earthquake of magnitude 5 is ten times stronger than an earthquake of magnitude 4."
//     // },
//     // {
//     //     q: "Q. Which of the following river is named as the Dakshina Ganga?",
//     //     option: ["Mahanadi", "Krishna", "Godavari", "Cauvery"],
//     //     ans: 2,
//     //     theme: "",
//     //     learn: "The Godavari is India's second longest river after the Ganga and third largest in India, drains about 10% of India's total geographical area. In terms of length, catchment area and discharge, the Godavari is the largest in peninsular India, and had been dubbed as the Dakshina Ganga (Ganges of the South)."
//     // },
//     // {
//     //     q: "Q. River Narmada flows to __",
//     //     option: ["Bay of Bengal", "Arabian Sea", "Indian Ocean", "None of These"],
//     //     ans: 1,
//     //     theme: "",
//     //     learn: "The river flows through Madhya Pradesh, Maharashtra and Gujarat between Vindhya and Satpura hill ranges before falling into the Gulf of Cambay in the Arabian Sea about 10 km north of Bharuch, Gujarat. The total length of the river from the head to its outfall into the Arabian Sea is 1,333 km."
//     // },
//     // {
//     //     q: "Q. Extensive planting of trees to increase forest cover is called  ___",
//     //     option: ["Afforestration", "Agroforestry", "Deforestation", "Social Forestry"],
//     //     ans: 0,
//     //     theme: "",
//     //     learn: "Afforestation involves extensive planting of trees in areas that haven't recently had any tree cover, in order to create a forest. The type of land planted could include areas that have turned into desert, places that have long been used for grazing, disused agricultural fields, or industrial areas."
//     // },
//     // {
//     //     q: "Q. The ocean covers........ percentage of Earth's surface?",
//     //     option: ["51%", "61%", "71%", "91%"],
//     //     ans: 2,
//     //     theme: "",
//     //     learn: "About 71 % of the Earth's surface is water-covered, and the oceans hold about 96.5 % of all Earth's water. Water also exists in the air as water vapor, in rivers and lakes, in icecaps and glaciers, in the ground as soil moisture and in aquifers."
//     // },
//     // {
//     //     q: "Q. The main energy source for the environment is....  ?",
//     //     option: ["Solar Energy", "Chemical Energy", "Biochemical Energy", "Electrical Energy"],
//     //     ans: 0,
//     //     theme: "",
//     //     learn: "Solar Enerygy is the  main energy source of the environment as it is the most available and cleanest renewable energy source. Solar power harvests the energy of the sun through using collector panels to create conditions that can then be turned into a kind of power. Energy from this source can be used in a variety of uses like generating electricity, providing light, or a comfortable interior environment."
//     // }
// ];

// function curtain() {
//     const curtain = document.querySelector("section");
//     const header = document.querySelector("header");
//     const main = document.querySelector("main");
//     const footer = document.querySelector("footer");
//     setTimeout(() => {
//         footer.style.display = "block";
//         main.style.display = "block";
//         header.style.display = "block";
//     }, 2800);
//     setTimeout(() => {
//         footer.style.opacity = "100";
//         main.style.opacity = "100";
//         header.style.opacity = "100";
//         curtain.style.display = "none";
//     }, 3000);
//     curtain.style.top = "-100%";
// }

// let toggle = true;

// function learnSection() {
//     const queBox = document.querySelector('.que');
//     const question = document.querySelector(".question");
//     const options = document.querySelector(".options");
//     const learnBox = document.querySelector(".learn-box");

//     const learnBtn = document.querySelector('.learn-btn');
//     const crossBtn = document.querySelector('.crossBtn');
//     const nextBtn = document.querySelector('button');

//     if (toggle == true) {
//         question.style.opacity = '0';
//         options.style.opacity = '0';

//         queBox.style.height = '60vh';
//         nextBtn.style.opacity = '0';
//         crossBtn.style.display= 'block';
//         learnBox.style.display = 'block';
//         setTimeout(() => {
//             learnBtn.style.display = 'none';
//             options.style.display = 'none';
//             learnBox.style.opacity = '100';
//             crossBtn.style.opacity = '100';
//         }, 500);
//         return toggle = false;
//     } else {
//         options.style.display = 'block';

//         question.style.opacity = '1';
//         options.style.opacity = '1';

//         queBox.style.height = '17.6vh';

//         learnBox.style.opacity = '0';
//         learnBtn.style.display = 'block';
//         crossBtn.style.opacity = '0';
//         nextBtn.style.opacity = '1';
//         setTimeout(() => {
//             crossBtn.style.display= 'none';
//             learnBox.style.display = 'none';
//         }, 1000);
//         return toggle = true;
//     }
// }

{
    q: "Q. Which of the following International Tennis Tournaments is held on grass court?",
    option: ["US Open", "French Open", "Wimbledon", "Australian Open"],
    ans: 2,
    theme: "",
    learn: "Wimbledon Championships, byname of All-England Championships, internationally known tennis championships played annually in London at Wimbledon. The tournament, held in late June and early July, is one of the four annual “Grand Slam” tennis events—along with the Australian, French, and U.S. Opens—and is the only one still played on natural grass. The first Wimbledon championship was held in 1877 on one of the croquet lawns of the All England Croquet and Lawn Tennis Club (since 1882 the All England Lawn Tennis and Croquet Club)."
},
{
    q: "Q. What is the distance of Marathon Race?",
    option: ["21.2 miles", "25.3 miles ", "26.2 miles", "29.2 miles"],
    ans: 2,
    theme: "",
    learn: "The marathon is a long-distance foot race with a distance of 42.195 kilometres (26.2 miles), usually run as a road race, but the distance can be covered on trail routes. There are also wheelchair divisions. More than 800 marathons are held throughout the world each year, with the vast majority of competitors being recreational athletes, as larger marathons can have tens of thousands of participants.Marathons are set at 42.195 kilometers (26.2 miles) because the International Association of Athletic Federations (IAAF) officially adopted that in 1921."
},
{
    q: "Q. In which year was the first Olympic started?",
    option: ["1858", "1896", "1872", "1892"],
    ans: 1,
    theme: "",
    learn: "Their creation was inspired by the ancient Olympic Games (Ancient Greek: Ὀλυμπιακοί Ἀγῶνες), held in Olympia, Greece from the 8th century BC to the 4th century AD. Baron Pierre de Coubertin founded the International Olympic Committee (IOC) in 1894, leading to the first modern Games in Athens in 1896. The IOC is the governing body of the Olympic Movement, with the Olympic Charter defining its structure and authority."
},
{
    q: "Q. Birdie, eagle and albatross are all terms used in __?",
    option: ["Polo", "Golf", "Football", "Golf"],
    ans: 1,
    theme: "",
    learn: "Par is an abbreviation for ‘professional average result’. This is the standard score for a hole or an entire course, which state the number of shots a professional is expected to take to hole the ball or complete the round. Birdie is a hole played one stroke better than the expected standard (one under par). Eagle is a hole completed in two strokes under par. Albatross is a score given for a hole that has been completed three strokes under par and is sometimes known as a ‘double eagle’."
},
{
    q: "Q. The term ‘Duckworth-Lewis’ is associated with which sport?",
    option: ["Cricket", "Squash", "Hockey", "Tennis"],
    ans: 0,
    theme: "",
    learn: "The DLS method (Duckworth-Lewis-Stern) in cricket plays a key role in deciding the winner in an unavoidable situation for the team batting second in limited-over cricket. The Duckworth–Lewis method (often written as D/L method) is a mathematical formulation designed to calculate the target score for the team batting second in a limited-overs cricket match interrupted by weather or other circumstances. The Duckworth Lewis Method was first used in a match played between Zimbabwe versus England in 1996-97. This method was approved by the ICC in 1999."
},
{
    q: "Q. How many Cricket World Cups did India win?",
    option: ["4", "3", "1", "2"],
    ans: 3,
    theme: "",
    learn: "The Indian cricket team are two times World Champions. In addition to winning the 1983 Cricket World Cup, they triumphed over Sri Lanka in the 2011 Cricket World Cup on home soil."
},
{
    q: "Q. Which Indian pair won the Wimbledon and US Open titles in 1999?",
    option: ["Ramkumar Ramanathan and Rohan Bopanna", "Leander Paes and Mahesh Bhupathi", "Yuki Bhambri and Vijay Amritraj", "Rohan Bopanna and Somdev Devvarman"],
    ans: 1,
    theme: "",
    learn: "Leander Paes and Mahesh Bhupathi, created history by reaching the Doubles Finals of all four Grand Slams and also winning the Wimbledon and US Open Doubles titles in 1999."
},
{
    q: "Q. Which is the highest governing body of Badminton in the world?",
    option: ["International Badminton Association", "Badminton Association of the World", "Badminton World Federation", "International Badminton Federation"],
    ans: 2,
    theme: "",
    learn: "The Badminton World Federation (BWF) is recognised by the International Olympic Committee (IOC) and the International Paralympic Committee (IPC) as the world governing body for badminton. The International Badminton Federation (IBF), as it was originally called, was established in London, on 5 July 1934 with nine founding member associations. The BWF is a federation of 196 members."
},
{
    q: "Q. In which year, the first FIFA Football World Cup was held?",
    option: ["1927", "1928", "1929", "1930"],
    ans: 3,
    theme: "",
    learn: "The 1930 FIFA World Cup was the inaugural FIFA World Cup, the world championship for men's national association football teams. It took place in Uruguay from 13 to 30 July 1930. FIFA, football's international governing body, selected Uruguay as host nation, as the country would be celebrating the centenary of its first constitution and the Uruguay national football team had successfully retained their football title at the 1928 Summer Olympics. All matches were played in the Uruguayan capital, Montevideo, the majority at the Estadio Centenario, which was built for the tournament."
}


{
        q: "Q. Work of a convex lens is",
        option: ["It converges light rays", "It diverges light ray", "Always forms real images", "Always form virtual images"],
        ans: 0,
        theme: "",
        learn: "Convex lens always converge light and it is because of the property of the convex lens. In this lens thickness is on the center and it converges all the light that are incident on it. So convex lens always converge light as it has the property of converging light."
    },
    {
        q: "Q. What are the two terminals of a diode called?",
        option: ["Pentode and Triode", "Gate and Drain", "Drain and Source", "Anode and Cathode"],
        ans: 3,
        theme: "",
        learn: "A diode is basically a two-terminal device that is formed by dopping intrinsic semiconductors by trivalent impurities (Barium, Aluminium, Galium, etc.) on one side results in P-type semiconductor and pentavalent impurities (Phosphorus, Arsenic, Antimony, etc.) on another side results in N-type semiconductor. The two terminals of a diode are called the anode (positive terminal) and cathode(negative terminal)."
    },
    {
        q: "Q. The redness in atmosphere at sunrise and sun-set is dye to:",
        option: ["Scattering of light ", "Dispersion of light", "Refraction of light", "Reflection of light"],
        ans: 0,
        theme: "",
        learn: "Within the visible range of light, red light waves are scattered the least by atmospheric gas molecules. So at sunrise and sunset, when the sunlight travels a long path through the atmosphere to reach our eyes, the blue light has been mostly removed, leaving mostly red and yellow light remaining. The result is that the sunlight takes on an orange or red cast, which we can see reflected from clouds or other objects as a colorful sunset (or sunrise)."
    },
    {
        q: "Q. Albert Sabin is known for developing which of the following?",
        option: ["Smallpox Vaccine", "Penicillin", "Polio Vaccine", "Hepatitis B Vaccine"],
        ans: 2,
        theme: "",
        learn: "Convinced the polio virus lived primarily in the intestines, Dr. Sabin focused on isolating a mutant form of the polio virus incapable of producing the disease and thereby safe for introduction to the human body. This avirulent virus would reproduce rapidly in the intestines, displacing lethal forms of the polio virus and providing protection from the disease. Dr. Sabin's ultimate vision was to identify a live, safe variant polio virus that could be administered orally to combat poliomyelitis.Dr. Sabin and his research associates first ingested the live avirulent viruses themselves before experimenting on others. The oral vaccine was first tested outside the USA from 1957 to 1959. Ultimately, a successful Sabin vaccine was used to eradicate polio throughout the world."
    },
    {
        q: "Q. Which of the following river is named as the Dakshina Ganga?",
        option: ["Mahanadi", "Krishna", "Godavari", "Cauvery"],
        ans: 2,
        theme: "",
        learn: "The Godavari is India's second longest river after the Ganga and third largest in India, drains about 10% of India's total geographical area. In terms of length, catchment area and discharge, the Godavari is the largest in peninsular India, and had been dubbed as the Dakshina Ganga (Ganges of the South)."
    },
    {
        q: "Q. Indian Space Research Organization (ISRO) launched India’s first lunar probe Chandrayaan-1 in ___?",
        option: ["March 2008", "October 2008", "August 2009", "October 2009"],
        ans: 1,
        theme: "",
        learn: "Chandrayaan-1, India's first mission to Moon, was launched successfully on October 22, 2008 from SDSC SHAR, Sriharikota. The spacecraft was orbiting around the Moon at a height of 100 km from the lunar surface for chemical, mineralogical and photo-geologic mapping of the Moon. The spacecraft carried 11 scientific instruments built in India, USA, UK, Germany, Sweden and Bulgaria."
    },
    {
        q: "Q. What is the thin layer that forms the outer boundary of a cell?",
        option: ["Wall", "Sheath", "Membrane", "Partition"],
        ans: 2,
        theme: "",
        learn: "The cell membrane, also called the plasma membrane, is found in all cells and separates the interior of the cell from the outside environment. The cell membrane consists of a lipid bilayer that is semipermeable. The cell membrane regulates the transport of materials entering and exiting the cell. The plasma membrane, or the cell membrane, provides protection for a cell. It also provides a fixed environment inside the cell, and that membrane has several different functions. One is to transport nutrients into the cell and also to transport toxic substances out of the cell. Another is that the membrane of the cell, which would be the plasma membrane, will have proteins on it which interact with other cells."
    },
    {
        q: "Q. On August 1, 1774, which English chemist “discovered” oxygen when he obtained a colourless gas by heating red mercuric oxide?",
        option: ["Joseph Priestly", "Henry Canvendish", "Joseph Black", "Joseph Priestly"],
        ans: 3,
        theme: "",
        learn: "Priestley’s lasting reputation in science is founded upon the discovery he made on August 1, 1774, when he obtained a colourless gas by heating red mercuric oxide. Finding that a candle would burn and that a mouse would thrive in this gas, he called it “dephlogisticated air,” based upon the belief that ordinary air became saturated with phlogiston once it could no longer support combustion and life. Joseph Priestley was the first person to report the discovery of oxygen and describe some of its extraordinary properties."
    },
    {
        q: "Q. What is the chemical element for the symbol Se?",
        option: ["Seaborgium", "Silver", "Selenium", "Scandium"],
        ans: 2,
        theme: "",
        learn: "Selenium (Se), a chemical element in the oxygen group (Group 16 [VIa] of the periodic table), closely allied in chemical and physical properties with the elements sulfur and tellurium. Selenium is rare, composing approximately 90 parts per billion of the crust of Earth. It is occasionally found uncombined, accompanying native sulfur, but is more often found in combination with heavy metals (copper, mercury, lead, or silver) in a few minerals."
    }


