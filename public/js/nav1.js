

// -- 19-01-2023 basic copy to improve function


// ## Head 
var head = document.querySelector("head");
var link = document.createElement("link");
link.rel = "stylesheet";
href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&family=Roboto&family=Shadows+Into+Light&display=swap";
head.appendChild(link);

// ## Body

// # Nav div
const  nav = document.createElement('nav');
    nav.id="nav";
document.body.appendChild(nav);




// -- LEFT NAV CONTAINER
const leftNavGroup = document.createElement('div');
    leftNavGroup.id='leftNavGroup';
nav.appendChild(leftNavGroup);


// -- Profile Icon
const profileIcon = document.createElement('a');
    profileIcon.innerHTML="JD"; 
    profileIcon.href= "/profile";   
    profileIcon.id="proCon";
leftNavGroup.appendChild(profileIcon);

// -- # Redemptions Link
const achievLink = document.createElement('a');
    achievLink.href="/achiev";
    achievLink.id="achievLink";
leftNavGroup.appendChild(achievLink);

// -- * DYNAMIC ADDITONS: Would like a 'present' icon with a notification counter *
const achievements = document.createElement('img');
// -- * DYNAMIC ADDITIONS: image needs a div with a function that displays the number of 'achievements' *
    achievements.src="/img/presentExample.png"; 
    achievements.link = "/shop";
    achievements.id="achiev"
achievLink.appendChild(achievements);

// -- Leader board
const userScore = document.createElement('a');
// --  (Placeholder Text)
//-- * DYNAMIC ADDITIONS: create function that displays from leaderboard *
    userScore.innerHTML = "<b>1000 Xp</b>"; 
    userScore.href = "/leaderBoard";
    userScore.id="userScore";
leftNavGroup.appendChild(userScore);

// -- # Home Button
const homeCon = document.createElement('a');
    homeCon.innerHTML = "KESHB Schools";
    homeCon.href="/";
    homeCon.id="homeLink";
nav.appendChild(homeCon);

// -- RIGHT NAV CONTAINER
const rightNavGroup = document.createElement('div');
    rightNavGroup.id='rightNavGroup';
nav.appendChild(rightNavGroup);

// -- right nav links
const about = document.createElement('a');
    about.innerHTML = "About";
    about.href="/about";
    about.className='rightNav';
rightNavGroup.appendChild(about);

const  curriculum = document.createElement('a');
    curriculum.innerHTML = "Curriculum";
    curriculum.href="/roadMap";
    curriculum.className='rightNav';
rightNavGroup.appendChild(curriculum);

const contact = document.createElement('a');
    contact.innerHTML = "Contact";
    contact.href="/contactus";
    contact.className='rightNav';
rightNavGroup.appendChild(contact);