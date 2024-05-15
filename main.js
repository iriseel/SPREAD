const spread = document.querySelector('.spread');
const aboutBtn = document.querySelector('.about');
const scheduleBtn = document.querySelector('.schedule');
const visitingBtn = document.querySelector('.visiting');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup .container');
const closePopupBtn = document.querySelector('.closePopup');

const paginationsLeft = [
    {
        img: "assets/paginations/left/01.png",
        designer: "Sara Duell",
        title: "Notes for Rehearsal",
    }, {
        img: "assets/paginations/left/03.png",
        designer: "Simon Charwey",
        title: "Design by Chance, Chance by Design"
    }, {
        img: "assets/paginations/left/05.png",
        designer: "Siri Lee",
        title: "If it's not dead it's growing, even if it's dead it's growing"
    }, {
        img: "assets/paginations/left/07.png",
        designer: "Daedalus Guoning Li",
        title: "The First Bite of the Sugar Crust, the Last Bite of the Gooey Dough"
    }, {
        img: "assets/paginations/left/09.png",
        designer: "Neeta Patel",
        title: "What I Talk About When I Talk About Design"
    }, {
        img: "assets/paginations/left/11.png",
        designer: "Davy Dai",
        title: "square"
    }, {
        img: "assets/paginations/left/13.png",
        designer: "Xinyi Liu",
        title: "NPC in RPG"
    }, {
        img: "assets/paginations/left/15.png",
        designer: "Siri Lee",
        title: "If it's not dead it's growing, even if it's dead it's growing"
    }, {
        img: "assets/paginations/left/17.png",
        designer: "Kaming Lee",
        title: "Stir Fry Slow Stew"
    }, {
        img: "assets/paginations/left/19.png",
        designer: "Julio Correa Estrada",
        title: "Long time listener, first time caller"
    }, {
        img: "assets/paginations/left/21.png",
        designer: "Siri Lee",
        title: "If it's not dead it's growing, even if it's dead it's growing"
    }, {
        img: "assets/paginations/left/23.png",
        designer: "Qiang Wang",
        title: "113,282 Links from Browsing History and 123 Images of Trash"
    }, {
        img: "assets/paginations/left/25.png",
        designer: "Kayla Hawkins",
        title: "Still Becoming"
    }, {
        img: "assets/paginations/left/27.png",
        designer: "Davy Dai",
        title: "square"
    }, {
        img: "assets/paginations/left/29.png",
        designer: "Ken Wenrui Zhao",
        title: "Spring... Too Long..."
    }, {
        img: "assets/paginations/left/31.png",
        designer: "Sara Duell",
        title: "Notes for Rehearsal"
    }, {
        img: "assets/paginations/left/33.png",
        designer: "Qiang Wang",
        title: "113,282 Links from Browsing History and 123 Images of Trash"
    }, {
        img: "assets/paginations/left/35.png",
        designer: "Davy Dai",
        title: "square"
    }, {
        img: "assets/paginations/left/37.png",
        designer: "Xinyi Liu",
        title: "NPC in RPG"
    }, {
        img: "assets/paginations/left/39.png",
        designer: "Simon Charwey",
        title: "Design by Chance, Chance by Design"
    }, {
        img: "assets/paginations/left/41.png",
        designer: "Xinyi Liu",
        title: "NPC in RPG"
    }, {
        img: "assets/paginations/left/43.png",
        designer: "Orlando Porras",
        title: "Local Behavior (or How to Heat Up a Pile of Tortillas)"
    }, {
        img: "assets/paginations/left/45.png",
        designer: "Claire Hungerford",
        title: "Today was a very bad day! And other storys"
    }, {
        img: "assets/paginations/left/47.png",
        designer: "Julio Correa Estrada",
        title: "Long time listener, first time caller"
    }, {
        img: "assets/paginations/left/49.png",
        designer: "Claire Hungerford",
        title: "Today was a very bad day! And other storys"
    }, {
        img: "assets/paginations/left/51.png",
        designer: "Darnell Henderson",
        title: "Everything Must Stay"
    } 
];

const paginationsRight = [
    {
        img: "assets/paginations/right/02.png",
        designer: "Lobbin Liu",
        title: "scraps. scripts, but"
    }, {
        img: "assets/paginations/right/04.png",
        designer: "Kaming Lee",
        title: "Stir Fry Slow Stew"
    }, {
        img: "assets/paginations/right/06.png",
        designer: "June Lihua Yu",
        title: "The Story of a Feeling"
    }, {
        img: "assets/paginations/right/08.png",
        designer: "Darnell Henderson",
        title: "Everything Must Stay"
    }, {
        img: "assets/paginations/right/10.png",
        designer: "Claire Hungerford",
        title: "Today was a very bad day! And other storys"
    }, {
        img: "assets/paginations/right/12.png",
        designer: "Simon Charwey",
        title: "Design by Chance, Chance by Design"
    }, {
        img: "assets/paginations/right/14.png",
        designer: "Lobbin Liu",
        title: "scraps. scripts, but"
    }, {
        img: "assets/paginations/right/16.png",
        designer: "Julio Correa Estrada",
        title: "Long time listener, first time caller"
    }, {
        img: "assets/paginations/right/18.png",
        designer: "Neeta Patel",
        title: "What I Talk About When I Talk About Design"
    }, {
        img: "assets/paginations/right/20.png",
        designer: "Junyan Hu",
        title: "Surface Tension"
    }, {
        img: "assets/paginations/right/22.png",
        designer: "Orlando Porras",
        title: "Local Behavior (or How to Heat Up a Pile of Tortillas)"
    }, {
        img: "assets/paginations/right/24.png",
        designer: "Daedalus Guoning Li",
        title: "The First Bite of the Sugar Crust, the Last Bite of the Gooey Dough"
    }, {
        img: "assets/paginations/right/26.png",
        designer: "Darnell Henderson",
        title: "Everything Must Stay"
    }, {
        img: "assets/paginations/right/28.png",
        designer: "Junyan Hu",
        title: "Surface Tension"
    }, {
        img: "assets/paginations/right/30.png",
        designer: "Ken Wenrui Zhao",
        title: "Spring... Too Long..."
    }, {
        img: "assets/paginations/right/32.png",
        designer: "Kayla Hawkins",
        title: "Still Becoming"
    }, {
        img: "assets/paginations/right/34.png",
        designer: "Kaming Lee",
        title: "Stir Fry Slow Stew"
    }, {
        img: "assets/paginations/right/36.png",
        designer: "June Lihua Yu",
        title: "The Story of a Feeling"
    }, {
        img: "assets/paginations/right/38.png",
        designer: "Orlando Porras",
        title: "Local Behavior (or How to Heat Up a Pile of Tortillas)"
    }, {
        img: "assets/paginations/right/40.png",
        designer: "Daedalus Guoning Li",
        title: "The First Bite of the Sugar Crust, the Last Bite of the Gooey Dough"
    }, {
        img: "assets/paginations/right/42.png",
        designer: "Neeta Patel",
        title: "What I Talk About When I Talk About Design"
    }, {
        img: "assets/paginations/right/44.png",
        designer: "June Lihua Yu",
        title: "The Story of a Feeling"
    }, {
        img: "assets/paginations/right/46.png",
        designer: "Qiang Wang",
        title: "113,282 Links from Browsing History and 123 Images of Trash"
    }, {
        img: "assets/paginations/right/48.png",
        designer: "Lobbin Liu",
        title: "scraps. scripts, but"
    }, {
        img: "assets/paginations/right/50.png",
        designer: "Junyan Hu",
        title: "Surface Tension"
    }, {
        img: "assets/paginations/right/52.png",
        designer: "Kayla Hawkins",
        title: "Still Becoming"
    }
]

// Iterate over paginationsLeft to add pageNum property
paginationsLeft.forEach(pagination => {
    pagination.pageNum = findPageNum(pagination.img);
});
paginationsRight.forEach(pagination => {
    pagination.pageNum = findPageNum(pagination.img);
});

const texts = [
    "<p>SPREAD<br>" + 
    "2024 MFA Thesis Show in Graphic Design</p>" +
    
    "<p>May 13&ndash;21, 2024<br>" +
    "Public reception on Saturday, May 18 from 6&ndash;8PM<br>" +
    "With programming throughout May 16&ndash;18</p>" +

    "<div class='block'>" +
        "<p>Spread: a technical term in graphic design, refers to two adjacent pages whose connection is revealed as one opens a book. A paired set, hinged at its shared edge, the spread functions much like a diptych &mdash; perpetually in relation. We open up spreads, and they open up for us. Like the spread, we have found ourselves and our practices momentarily fixed to one another, fastened into relation, our perspectives fused together, like the left eye and the right eye.</p>" +
        "<p>SPREAD features work by the 2024 MFA candidates in Graphic Design presented in conversation with one another, reproducing and remixing the culmination of our time &mdash; our thesis books &mdash; in order to amplify our connections and expand the definition of graphic design as a way of relating. The polysemic title also functions as an invitation: as a verb, SPREAD further expresses our collective desire to share this work outside of the graphic design program through additional public programming during and after the exhibition.</p>" +
    "</div>" +
    
    "<p>Featuring work by Simon Charwey, Julio Correa Estrada, Davy Dai, Sara Duell, Kayla Hawkins, Darnell Henderson, Junyan Hu, Claire Hungerford, Kaming Lee, Siri Lee, Daedalus Guoning Li, Lobbin Liu, Xinyi Liu, Neeta Patel, Orlando Porras, June Lihua Yu, Qiang Wang, and Ken Wenrui Zhao.</p>",

    ////////////////////////////////////////////////

    "<h1>Program Schedule, May 16–18, 2024</h1>" +

    
    "<div class='block'>" +
    "<ul>May 16 Thursday</ul>" +

    "<li>2 – 3 pm</li>" +
    "<li>Floor 1 &emsp; Ground</li>" +
    "<li>Decompression </li>" +
    "<li>with Kayla Hawkins</li>" + 
    "<br>" +

    "<li>3 – 5 pm</li>" +
    "<li>Floor 2 Mezzanine</li>" +
    "<li>Notes for Rehearsal. Production and Distribution of thesis books</li>" +
    "<li>with Sara Duell</li>" + 
    "<br>" +

    "</div>" +

    "<div class='block'>" +
    "<ul>May 17 Friday</ul>" +

    "<li>3 – 5 pm</li>" +
    "<li>Floor 2 M</li>" +
    "<li>Notes for Rehearsal. Production and Distribution of thesis books</li>" +
    "<li>with Sara Duell</li>" + 
    "<br>" +

    "<li>5 – 6 pm</li>" +
    "<li>Floor 1 G</li>" +
    "<li>Chance-based Musical Composition with Healing Drummers in collaboration </li>" +
    "<li>with Simon Charway and the Signature Musical Drums Trope (Michael Mills and Brian Jawara Gray)</li>" + 
    "<br>" +

    "<li>6 – 6 : 15 pm</li>" +
    "<li>Floor 2 M</li>" +
    "<li>Screening of Spring... Too Long...</li>" +
    "<li>with Ken Wenrui Zhao</li>" + 
    "<br>" +

    "<li>6 : 15 – 6 : 30 pm</li>" +
    "<li>Floor 2 M</li>" +
    "<li>SML CONFESSIONS</li>" +
    "<li>with Qiang Wang</li>" + 
    "<br>" +

    "<li> 6 : 30 – 6 : 45 pm</li>" +
    "<li>Floor 2 M</li>" +
    "<li>Everything Must Stay!</li>" +
    "<li>with Darnell Henderson</li>" + 
    "<br>" +

    "<li>6 : 45 – 7 : 00 pm</li>" +
    "<li>Floor 2 M</li>" +
    "<li>Here I am Pressing Buttons</li>" +
    "<li>with Junyan Hu</li>" + 
    "<br>" +

    "<li>7 : 15 – 7 : 30 pm</li>" +
    "<li>Floor 2 M</li>" +
    "<li>Today was a Very Bad Day</li>" +
    "<li>with Claire Hungerford</li>" + 
    "<br>" +

    "<li>7 : 30 – 7 : 45 pm</li>" +
    "<li>Floor 2 M</li>" +
    "<li>Long Time Listener, First Time Caller</li>" +
    "<li>with Julio Correa Estrada</li>" + 
    "<br>" +

    "<li>7 : 45 – 8 : 00 pm</li>" +
    "<li>Floor 2 M</li>" +
    "<li>Scraps, Scripts, but</li>" +
    "<li>with Lobbin Liu</li>" + 
    "<br>" +

    "<li>8 : 15 – 8 : 30 pm</li>" +
    "<li>Floor 2 M</li>" +
    "<li>Suite for Sandbox</li>" +
    "<li>with Xinyi Liu and Joesph Ehrenpreis</li>" + 
    "<br>" +

    "<li>8 : 30 pm</li>" +
    "<li>Floor 3 Basement</li>" +
    "<li>Yale by Yale</li>" +
    "<li>presented by Orlando Porras and Darby Routtenberg</li>" + 
    "<br>" +

    "</div>" +

    "<div class='block'>" +
    "<ul>May 18 Saturday</ul>" +

    "<li>9am – 1 pm</li>" +
    "<li>Floor 2 M</li>" +
    "<li>The Laminator & the Shapeshifter: A Durational Performance </li>" +
    "<li>with Daedalus Guoning Li</li>" + 
    "<br>" +

    "<li>3 – 5 pm</li>" +
    "<li>Floor 2 M</li>" +
    "<li>Notes for Rehearsal. Production and Distribution of thesis books</li>" +
    "<li>with Sara Duell</li>" + 
    "<br>" +

    "<li>6 – 8 pm</li>" +
    "<li>Thesis Show Reception</li>" +
    "<li>Free And Open To The Public</li>" +
    "<br>",


    ////////////////////////////////////////////////

    "<h1>Visiting</h1>" +
    "<p>Yale School of Art’s Spring 2024 receptions are open to the public. All visitors are encouraged to be fully vaccinated and boosted. Masks are also recommended.</p>" +

    "<p>During all other gallery hours, exhibitions are only open to the Yale community (current ID holders) and their invited, accompanied guests.</p>" +
    
    "<div class='block'>" +
        "<p>Spring 2024 gallery hours for the Yale community & guests:<br>" +
        "Monday&ndash;Friday: 11AM&ndash;6PM, Saturday + Sunday: Noon&ndash;4PM.</p>" + 
    "</div>"

]

const contentsLeft = [
    ...paginationsLeft.map(pagination => `
    <img src="${pagination.img}">
    <div class="metadata">
        <div class="title"><span class="black"><i>${pagination.title}</i></span></div>
        <div class="designer"><span class="black">${pagination.designer}</span></div>
    </div>
    <div class="pageNum left">${pagination.pageNum}</div>
    `),
    ...texts.map(text => `<div class="text">${text}</div>`)
];

const contentsRight = [
    ...paginationsRight.map(pagination => `
    <img src="${pagination.img}">
    <div class="metadata">
        <div class="title"><span class="black"><i>${pagination.title}</i></span></div>
        <div class="designer"><span class="black">${pagination.designer}</span></div>
    </div>
    <div class="pageNum left">${pagination.pageNum}</div>
    `),
    ...texts.map(text => `<div class="text">${text}</div>`)
];

// console.log(contentsLeft);
// console.log(contentsRight);

// Function to populate left and right pages with random images
function populatePages() {
    const leftPage = document.querySelector('.left-page');
    const rightPage = document.querySelector('.right-page');

    // Generate random indices for images
    const randomIndex1 = getRandomIndexWithProbability(0, contentsLeft.length, [26, 27, 28], 0.3);
    let randomIndex2;

    // If randomIndex1 is 26, 27, or 28 (one of the texts), generate randomIndex2 excluding the same number
    if (randomIndex1 === 26 || randomIndex1 === 27 || randomIndex1 === 28) {
        do {
            randomIndex2 = getRandomIndexWithProbability(0, contentsRight.length, [26, 27, 28], 0.3);
        } while (randomIndex2 === randomIndex1);
    } else {
        randomIndex2 = getRandomIndexWithProbability(0, contentsRight.length, [26, 27, 28], 0.3);
    }


    // Populate left and right pages with random images
    leftPage.innerHTML = contentsLeft[randomIndex1];
    rightPage.innerHTML = contentsRight[randomIndex2];
}

spread.addEventListener('click', populatePages);
aboutBtn.addEventListener('click', () => showPopup(0));
scheduleBtn.addEventListener('click', () => showPopup(1));
visitingBtn.addEventListener('click', () => showPopup(2));

closePopupBtn.addEventListener('click', () => hidePopup());

// Initially populate the pages with random images
populatePages();

function showPopup(textIndex) {
    popup.style.display = "flex";
    popupContainer.innerHTML = texts[textIndex];
}

function hidePopup() {
    popup.style.display = "none";
}


// GENERAL FUNCTIONS
// Function to generate a random number between min (inclusive) and max (exclusive)
function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Extract pageNums from the image URLs
function findPageNum(img) {
    const parts = img.split('/');
    const pageNumWithExtension = parts[parts.length - 1];
    const pageNumWithoutExtension = pageNumWithExtension.split('.')[0]; // Get the part before the '.png'
    return pageNumWithoutExtension;
}

function getRandomIndexWithProbability(min, max, targetIndices, probability) {
    let availableIndices = Array.from({ length: max - min }, (_, i) => i + min); // Generate an array of available indices

    // Generate a random number to decide whether to return a target index or a random index
    if (Math.random() < probability) {
        // Return a random target index from the targetIndices array
        return targetIndices[Math.floor(Math.random() * targetIndices.length)];
    } else {
        // Return a random index from availableIndices
        return availableIndices[Math.floor(Math.random() * availableIndices.length)];
    }
}