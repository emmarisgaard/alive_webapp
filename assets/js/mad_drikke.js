const boder = [
    {
        name: "Bryggen",
        type: "Mad",
        sell: "Flæsekestegssandwich, dumplings, pommes og crispy chicken burger",
        img: "../assets/img/bryggen.png",
        link: "./html_undersider/bryggen.html"
    },

    {
        name: "Bryghusbar",
        type: "Drikke",
        sell: "Øko Humle, Limefjordsporteren, Hvedeøllen samt lokale nyheder",
        img: "../assets/img/boder_bryghusbar.jpg",
        link: "./html_undersider/bryggen.html"
    },

    {
        name: "Bærbar",
        type: "Drikke",
        sell: "Håndlavede drinks med økologiske bærsirupper fra Thy Økobær",
        img: "../assets/img/boder_baerbar.jpg",
        link: "./html_undersider/bryggen.html"
    },

    {
        name: "Cocktailbar",
        type: "Drikke",
        sell: "Cocktails, mocktails og sodavand",
        img: "assets/img/boder_cocktailbar.jpg",
        link: "./html_undersider/bryggen.html"
    },

    {
        name: "Den Grønne Fe",
        type: "Mad",
        sell: "Velsmagende og nærende for både øjne, krop og jord",
        img: "assets/img/boder_denGronneFe.png",
        link: "./html_undersider/bryggen.html"
    },

    {
        name: "Gadens Gastronomer",
        type: "Mad",
        sell: "Prisbelønnede burgere og sprøde fritter af kvalitetsråverer",
        img: "assets/img/boder_gadensGastronomer.jpg",
        link: "./html_undersider/bryggen.html"
    },

    {
        name: "Havebar",
        type: "Drikke",
        sell: "Lokal øl og cocktails",
        img: "assets/img/boder_havebar.jpg",
        link: "./html_undersider/bryggen.html"
    },

    {
        name: "Mikuna",
        type: "Mad",
        sell: "Danmarks bedste burger - 100% vegansk og hjemmelavet",
        img: "assets/img/mikuna.png",
        link: "./html_undersider/bryggen.html"
    },

    {
        name: "Salke",
        type: "Mad",
        sell: "Friske råvarer, lokal fisk og meget mere",
        img: "assets/img/salke.png",
        link: "./html_undersider/bryggen.html"
    },

    {
        name: "Skovbar",
        type: "Drikke",
        sell: "Lokal øl og cocktails",
        img: "assets/img/skovbar.png",
        link: "./html_undersider/bryggen.html"
    },

    {
        name: "Street Bites Thai",
        type: "Mad",
        sell: "Panang karry med ris og kylling, og grøn thaikarry med nudler",
        img: "assets/img/street_bites_thai.png",
        link: "./html_undersider/bryggen.html"
    },

    {
        name: "The Taco Truck",
        type: "Mad",
        sell: "Autentiske mexicanske tacos",
        img: "assets/img/the_taco_truck.png",
        link: "./html_undersider/bryggen.html"
    },

    {
        name: "Thypisk Pizza",
        type: "Mad",
        sell: "Hvid eller rød pizza og sandwiches",
        img: "assets/img/thypisk_pizza.png",
        link: "./html_undersider/bryggen.html"
    },

    {
        name: "Vadebar",
        type: "Drikke",
        sell: "Lokal øl og cocktails",
        img: "assets/img/vadebar.png",
        link: "./html_undersider/bryggen.html"
    },

    {
        name: "Vin- og Whiskeyloungen",
        type: "Drikke",
        sell: "Et godt glas, live jazz og whisky-workshop",
        img: "assets/img/vin_og_whiskeybar.png",
        link: "./html_undersider/bryggen.html"
    }


];



// Filter funktion - filtrere mad og drikke

const mainBoder = document.querySelector(".boder"); //Fanger div med class boder

// Vis alle boder når siden loader, ved brug af data fra array
boder.forEach(function (bod) {
    mainBoder.innerHTML +=
        `<section class="bod">
    <div class="bod_overskrift_like">
    <a href="${bod.link}">
    <h2>${bod.name}</h2>
    </a>
    <a href="#"><i class="fa-regular fa-heart"></i></a>
    </div>
    <p>${bod.sell}</p><br>
    <a href="./html_undersider/bryggen.html">
    <img src="${bod.img}" alt="${bod.name}">
    </a>
    </section> `;
});


//Nedenstående filter og like funktion er en demo af hvordan vi vil have vores filter funktion til at virke. Koden er lavet i samarbejde med chatgpt.

// const typeEl = document.querySelector("#bodType"); //Fang filter/select elementet med id bodType

// typeEl.addEventListener("change", function () {
//     const selectedType = typeEl.value;

//     const filteredBoder = boder.filter(function (bod) {
//         return bod.type === selectedType || selectedType === "all";
//     });

//     mainBoder.innerHTML = "";

//     filteredBoder.forEach(function (bod) {
//         mainBoder.innerHTML +=
//             `<section class="bod">
// 				<div class="bod_overskrift_like">
// 					<a href="./html_undersider/bryggen.html">
// 						<h2>${bod.name}</h2>
// 					</a>
// 					<a href="#"><i class="fa-regular fa-heart"></i></a>
// 				</div>
// 				<p>${bod.sell}</p><br>
//                 <a href="./html_undersider/bryggen.html">
// 				<img src="${bod.img}" alt="${bod.name}">
//                 </a>

// 			</section> `;
//     });
// });


// // Like funktion - hjerte toggle og gemme tilstand i localStorage

// // Finder alle elementer med klassen "fa-heart"
// const heartIcons = document.querySelectorAll('.fa-heart');

// // Gennemgår hvert hjerte-ikon ét ad gangen
// heartIcons.forEach((heart, index) => {

//     const savedState = localStorage.getItem(`heart_${index}`);

//     // Hvis den gemte tilstand er "filled",
//     // skal hjertet vises som fyldt, når siden loader
//     if (savedState === 'filled') {
//         heart.classList.remove('fa-regular'); // Fjerner tomt hjerte
//         heart.classList.add('fa-solid');      // Tilføjer fyldt hjerte
//     }

//     // Tilføjer en klik-hændelse til hvert hjerte
//     heart.addEventListener('click', () => {

//         // Tjekker om hjertet lige nu er tomt
//         if (heart.classList.contains('fa-regular')) {

//             // Hvis det er tomt → gør det fyldt
//             heart.classList.remove('fa-regular');
//             heart.classList.add('fa-solid');

//             // Gemmer tilstanden som "filled" i localStorage
//             localStorage.setItem(`heart_${index}`, 'filled');

//         } else {

//             // Hvis det allerede er fyldt → gør det tomt igen
//             heart.classList.remove('fa-solid');
//             heart.classList.add('fa-regular');

//             // Gemmer tilstanden som "regular" i localStorage
//             localStorage.setItem(`heart_${index}`, 'regular');
//         }
//     });
// });

