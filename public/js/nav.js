// -- Head 
// var head = document.querySelector("head");
// var link = document.createElement("link");
// link.rel = "stylesheet";
// link.href = "/css/nav.css"; 
// head.appendChild(link);

// -- Body

// -- Nav div
const  nav = document.createElement('nav');

    nav.id="nav";

document.body.appendChild(nav);

// -- Profile Icon requires code connected to a DB to pull user intitials
const profileIcon = document.createElement('a');

    profileIcon.innerHTML="JD";
    profileIcon.href="/profile";
    profileIcon.id="proCon";

nav.appendChild(profileIcon);

// -- Display User Score as link to global leader board
const userScore = document.createElement('a');

    userScore.innerHTML = "Score"; // -- placeholder text
    userScore.href = "/leaderBoard";
    userScore.id="userScore";

nav.appendChild(userScore);

// -- present icon with notification counter that links to the shop (achievement redemption, customizables)
const achivements = document.createElement('a');

    achivements.innerHTML = "Present"; // -- placeholder text
    achivements.href = "/leaderBoard";
    achivements.id="achiev"

nav.appendChild(achivements);

// -- Home Button
const homeCon = document.createElement('a');

    homeCon.innerHTML = "WD101";
    homeCon.href="/";
    homeCon.id="homeLink";

nav.appendChild(homeCon);



// -- Menu Button
// const menButn = document.createElement('button');
//     menButn.innerHTML="|||";
//     menButn.id="menButn"
// nav.appendChild(menButn);

// -- * links need to be changed to match page links on server *
// -- Defining hidden nav links
const about = document.createElement('a');
    about.innerHTML='About';
    about.href='/about';
    about.className="hiddenNav";
nav.appendChild(about);

const curriculum = document.createElement('a');
    curriculum.innerHTML='Curriculum';
    curriculum.href='/curriculum';
    curriculum.className="hiddenNav";
nav.appendChild(curriculum);
const contactUs = document.createElement('a');
    contactUs.innerHTML='Contact Us';
    contactUs.href='/contactus';
    contactUs.className="hiddenNav";
nav.appendChild(contactUs);


// var options = document.getElementsByClassName('hiddenNav');
// menButn.addEventListener("click", function() {
//     console.log("fun test"); 

   
//     var optionsContainer = document.createElement('div');
//         optionsContainer.id="optionsContainer";
//         optionsContainer.style.display="none";
//     menButn.appendChild(optionsContainer);
    
//     if (optionsContainer.style.display === "none") {
//         optionsContainer.innerHTML = "";
        
//         console.log(options);
//         for (var i = 0; i < options.length; i++) {
//             console.log("for loop");
//             var option = document.createElement("div");
//                 option.innerHTML = options[i]; 
//             optionsContainer.style.cssText=`
//                 display: flex;
//                 flex-direction: row;
//                 float:left;

//             `
//         }
//     } else {
//         optionsContainer.style.display = "none";
//         console.log("else statement");
//     }

// });