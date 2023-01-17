// -- * links need to be changed to match page links on server *

// ## Head 
// -- * I would like to dynamically link favicon here *
// var head = document.querySelector("head");
// var link = document.createElement("link");
// link.rel = "stylesheet";
// link.href = "/css/nav.css"; 
// head.appendChild(link);

// ## Body

// # Nav div
const  nav = document.createElement('nav');
    nav.id="nav";
document.body.appendChild(nav);

// -- # Profile Link 
// -- *  requires code connected to a DB to pull user intitials *
// -- *  link to sign in page if user === 'Null'  *
const profileIcon = document.createElement('a');
    profileIcon.innerHTML="JD";
    profileIcon.href="/profile";
    profileIcon.id="proCon";
nav.appendChild(profileIcon);


// -- # Leader Board Link
// -- * link to global leader board db to display user score *
const userScore = document.createElement('a');
    userScore.innerHTML = "Score"; // -- placeholder text
    userScore.href = "/leaderBoard";
    userScore.id="userScore";
nav.appendChild(userScore);

// -- # Shop Link
// -- * Would like a 'present' icon with a notification counter *
const achivements = document.createElement('a');
    achivements.innerHTML = "Present"; // -- placeholder text
    achivements.href = "/leaderBoard";
    achivements.id="achiev"
nav.appendChild(achivements);

// -- # Home Button
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



// -- #Site Nav Links: Basic
// -- * would like these to be hidden by the menu button onclick
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


// -- Hidden Nav function

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