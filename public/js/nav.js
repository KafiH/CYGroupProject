// -- * links need to be changed to match .ejs file paths as they are completed *

// ## Head 
var head = document.querySelector("head");
var link = document.createElement("link");
link.rel = "stylesheet";
href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&family=Roboto&family=Shadows+Into+Light&display=swap"
head.appendChild(link);

// ## Body

// # Nav div
const  nav = document.createElement('nav');
    nav.id="nav";
document.body.appendChild(nav);

// -- # Profile Link 
// -- *  requires code connected to a DB to pull user intitials *
// -- *  link to sign in page if user === 'Null'  *
const leftNavGroup = document.createElement('div');
    leftNavGroup.id='leftNavGroup';
nav.appendChild(leftNavGroup);






// -- profile icon
const profileIcon = document.createElement('a');
leftNavGroup.appendChild(profileIcon);
const profileInitials = document.createElement('p');
    profileInitials.innerHTML("JD");
    profileIcon.id="proCon";
profileIcon.appendChild(profileInitials);    



// -- Input initials from database code sample
// const funTest = document.getElementById('funTest').onClick = function(){
// const { Client } = require('pg');

// async function getInitials(uname) {
//   const client = new Client();
//   await client.connect();

//   const query = `SELECT initials FROM users WHERE username = '${uname}'`;
//   const result = await client.query(query);

//   await client.end();
  
//   return result.rows[0].initials;
// }

// }






















// -- # Leader Board Link
// -- * link to global leader board db to display user score *
const userScore = document.createElement('a');
    userScore.innerHTML = "<b>1000 Xp</b>"; // -- placeholder text
    userScore.href = "/leaderBoard";
    userScore.id="userScore";
leftNavGroup.appendChild(userScore);

// -- # Shop Link
// -- * Would like a 'present' icon with a notification counter *
const achievLink = document.createElement('a');
    achievLink.href="/shop";
leftNavGroup.appendChild(achievLink);

const achievements = document.createElement('img');
    achievements.src="/img/present.png"; // -- placeholder text
    achievements.link = "/shop";
    achievements.id="achiev"
achievLink.appendChild(achievements);

// -- # Home Button
const homeCon = document.createElement('a');
    homeCon.innerHTML = "KESHB Schools";
    homeCon.href="/";
    homeCon.id="homeLink";
nav.appendChild(homeCon);

const rightNavGroup = document.createElement('div');
    rightNavGroup.id='rightNavGroup';
nav.appendChild(rightNavGroup);

const about = document.createElement('a');
    about.innerHTML = "About";
    about.href="/about";
    about.className='rightNav';
rightNavGroup.appendChild(about);

const  curriculum = document.createElement('a');
    curriculum.innerHTML = "Curriculum";
    curriculum.href="/curriculum";
    curriculum.className='rightNav';
rightNavGroup.appendChild(curriculum);

const contact = document.createElement('a');
    contact.innerHTML = "Contact";
    contact.href="/contact";
    contact.className='rightNav';
rightNavGroup.appendChild(contact);