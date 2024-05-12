const spread = document.querySelector('.spread');
let previousIndex1 = null;

const scans = [
   "assets/scans/Zhao_Ken-01.png", "assets/scans/Charwey_Simon-01.png", "assets/scans/Charwey_Simon-02.png", "assets/scans/Charwey_Simon-03.png", "assets/scans/Correa_Julio-01.png", "assets/scans/Correa_Julio-02.png", "assets/scans/Correa_Julio-03.png", "assets/scans/Dai_Davy-01.png", "assets/scans/Dai_Davy-02.png", "assets/scans/Dai_Davy-03.png", "assets/scans/Duell_Sara-01.png", "assets/scans/Duell_Sara-02.png", "assets/scans/Duell_Sara-03.png", "assets/scans/Duell_Sara-04.png", "assets/scans/Hawkins_Kayla-01.png", "assets/scans/Hawkins_Kayla-02.png", "assets/scans/Hawkins_Kayla-03.png", "assets/scans/Henderson_Darnell-01.png", "assets/scans/Henderson_Darnell-02.png", "assets/scans/Henderson_Darnell-03.png", "assets/scans/Hu_Junyan-01.png", "assets/scans/Hu_Junyan-02.png", "assets/scans/Hu_Junyan-03.png", "assets/scans/Hungerford_Claire-01.png", "assets/scans/Hungerford_Claire-02.png", "assets/scans/Hungerford_Claire-03.png", "assets/scans/Lee_Kaming-01.png", "assets/scans/Lee_Kaming-02.png", "assets/scans/Lee_Kaming-03.png", "assets/scans/Lee_Siri-01.png", "assets/scans/Lee_Siri-02.png", "assets/scans/Lee_Siri-03.png", "assets/scans/Li_Daedalus-01.png", "assets/scans/Li_Daedalus-02.png", "assets/scans/Li_Daedalus-03.png", "assets/scans/Liu_Lobbin-01.png", "assets/scans/Liu_Lobbin-02.png", "assets/scans/Liu_Lobbin-03.png", "assets/scans/Liu_Xinyi-01.png", "assets/scans/Liu_Xinyi-02.png", "assets/scans/Liu_Xinyi-03.png", "assets/scans/Patel_Neeta-01.png", "assets/scans/Patel_Neeta-02.png", "assets/scans/Patel_Neeta-03.png", "assets/scans/Porras_Orlando-01.png", "assets/scans/Porras_Orlando-02.png", "assets/scans/Porras_Orlando-03.png", "assets/scans/Wang_Qiang-01.png", "assets/scans/Wang_Qiang-02.png", "assets/scans/Wang_Qiang-03.png", "assets/scans/Yu_June-01.png", "assets/scans/Yu_June-02.png"
];

const texts = [
    "<h1>SPREAD</h1>" + 
    "<p>2024 MFA Thesis Exhibition in Graphic Design</p>" +
    
    "<p>May 13 – 21, 2024</p>" +
    "<p>Public reception on Saturday, May 18 from 6–8PM</p>" +
    "<p>With programming throughout May 16–18 (see full schedule below)</p>" +
    
    "<p>Spread: a technical term in graphic design, refers to two adjacent pages whose connection is revealed as one opens a book. A paired set, hinged at its shared edge, the spread functions much like a diptych––perpetually in relation. We open up spreads, and they open up for us. Like the spread, we have found ourselves and our practices momentarily fixed to one another, fastened into relation, our perspectives fused together, like the left eye and the right eye.</p>" +
    
    "<p>SPREAD features work by the 2024 MFA candidates in Graphic Design presented in conversation with one another, reproducing and remixing the culmination of our time––our thesis books––in order to amplify our connections and expand the definition of graphic design as a way of relating. The polysemic title also functions as an invitation: as a verb, SPREAD further expresses our collective desire to share this work outside of the graphic design program through additional public programming during and after the exhibition.</p>" +
    
    "<p>Featuring work by Simon Charwey, Julio Correa Estrada, Davy Dai, Sara Duell, Kayla Hawkins, Darnell Henderson, Junyan Hu, Claire Hungerford, Kaming Lee, Siri Lee, Daedalus Guoning Li, Lobbin Liu, Xinyi Liu, Neeta Patel, Orlando Porras, June Lihua Yu, Qiang Wang, and Ken Wenrui Zhao.</p>",

    ////////////////////////////////////////////////

    "<h1>PROGRAM SCHEDULE, MAY 16–18, 2024</h1>" +

    "<p>May 16–18: Durational performances between 1PM–6PM</p>" +

    "<p>The Laminator & the Shapeshifter: A Durational Performance by Daedalus Guoning Li</p>" +
    "<p>Notes for Rehearsal. Production and distribution of thesis books with Sara Duell</p>" +
    "<p>Stir Fry/Slow Stew conversations with Kaming Lee and guests</p>" +
    "<p>Candlelit reading of The Diaries of Cai Yongchun with Siri Lee</p>" +
    "<p>Herbal Tea Tasting with Kayla Hawkins</p>" +
    "<p>Chance-based Musical Composition with Simon Charwey and guests</p>" +

    "<p>May 17: Evening programming between 6-8PM</p>" +

    "<p>Screening of Today was a Very Bad Day with Claire Hungerford</p>" +
    "<p>Screening of Spring... Too Long... by Ken Wenrui Zhao</p>" +
    "<p>Everything Must Stay! a talk by Darnell Henderson</p>" +
    "<p>Here I am Pressing Buttons a talk by Junyan Hu</p>" +
    "<p>Musical Set with Xinyi Liu and guest</p>" +
    "<p>Scraps, Scripts, but a talk by Lobbin Liu</p>" +
    "<p>Screening of Confessions by Qiang Wang.</p>" +
    "<p>Long Time Listener, First Time Caller a presentation by Julio Correa Estrada</p>" +
    "<p>Yale by Yale presented by Orlando Porras and Darby Routtenberg</p>",

    ////////////////////////////////////////////////

    "<h1>VISITING</h1>" +
    "<p>Yale School of Art’s Spring 2024 receptions are open to the public. All visitors are encouraged to be fully vaccinated and boosted. Masks are also recommended.</p>" +

    "<p>During all other gallery hours, exhibitions are only open to the Yale community (current ID holders) and their invited, accompanied guests. Spring 2024 gallery hours for the Yale community & guests: Monday-Friday: 11AM-6PM, Saturday + Sunday: Noon-4PM.</p>"
        

]

const contents = [
    ...scans.map(scan => `<img src="${scan}" alt="Image">`),
    ...texts.map(text => `<div class="text">${text}</div>`)
];

// console.log(contents);

// Function to populate left and right pages with random images
function populatePages() {
    const leftPage = document.querySelector('.left-page');
    const rightPage = document.querySelector('.right-page');

    // Generate random indices for images
    const randomIndex1 = getRandomIndexWithProbability(0, contents.length, [52, 53, 54], 0.3, previousIndex1);
    let randomIndex2;
    do {
        randomIndex2 = getRandomIndex(0, contents.length);
    } while (randomIndex2 === randomIndex1);

    previousIndex1 = randomIndex1;

    // Populate left and right pages with random images
    leftPage.innerHTML = contents[randomIndex1];
    rightPage.innerHTML = contents[randomIndex2];
}

spread.addEventListener('click', populatePages);

// Initially populate the pages with random images
populatePages();


// GENERAL FUNCTIONS


// Function to generate a random number between min (inclusive) and max (exclusive)
function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomIndexWithProbability(min, max, targetIndices, probability, previousIndex1) {
    let availableIndices = Array.from({ length: max - min }, (_, i) => i + min); // Generate an array of available indices

    // Remove previousIndex from availableIndices if it's not null
    if (previousIndex1 !== null) {
        availableIndices = availableIndices.filter(index => index !== previousIndex1);
    }

    // Generate a random number to decide whether to return a target index or a random index
    if (Math.random() < probability) {
        // Return a random target index from the targetIndices array
        return targetIndices[Math.floor(Math.random() * targetIndices.length)];
    } else {
        // Return a random index from availableIndices
        return availableIndices[Math.floor(Math.random() * availableIndices.length)];
    }
}