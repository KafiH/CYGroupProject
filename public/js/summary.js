// const mainCont = document.getElementsByTagName('main');
// const contentContainer = document.createElement('div');
// contentContainer.id='contentContainer';
// mainCont.appendChild(contentContainer);

var introPoint = document.querySelector("#introPoint");
let localIntro = JSON.parse(localStorage.getItem("scoreList"));
let intro = (localIntro[0].score)
introPoint.textContent = (intro + "%");

