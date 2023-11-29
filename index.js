const CardsList = [
    {icon:'bx bx-check-shield', NumberText:'+1',Text:'Year Of Experience'},
    {icon:'bx bx-check-circle', NumberText:'+20',Text:'Completed Projects'},
    {icon:'bx bx-happy-beaming', NumberText:'+20',Text:'Happy client'}
];
const skillsIconsList = [
    'bx bxl-html5','bx bxl-css3','bx bxl-javascript',
    'bx bxl-nodejs','bx bxl-mongodb','bx bxl-react',
    'bx bxl-git',
];

let cardsContainer = document.querySelector('.cardsContainer');
let iconsContainer = document.querySelector('.iconsContainer');
let nav = document.querySelector('.nav');
let navKey = document.querySelector('.nav__key');
let keyIcon = document.querySelector('.key__icon');
let keyIconBefore = document.querySelector('.key__icon__before');
let keyIconAfter = document.querySelector('.key__icon__after');

navKey.addEventListener('click',function(){
nav.classList.toggle('clicked');
navKey.classList.toggle('clicked');

})


for(i=0;i<CardsList.length;i++){
createNewCard(CardsList[i].icon,CardsList[i].NumberText,CardsList[i].Text);
}


for(i=0; i<skillsIconsList.length; i++){
    let iconContainer = document.createElement('div');
    let icon = document.createElement('i');

    icon.setAttribute('class',skillsIconsList[i]);

    iconsContainer.appendChild(iconContainer);
    iconContainer.appendChild(icon);

}
























function createNewCard(icon, NumberText, Text ){

let card = document.createElement('div');
let cardIconContainer = document.createElement('div');
let cardIcon = document.createElement('i');
let cardText = document.createElement('div');
let text_h1 = document.createElement('h1');
let text_p = document.createElement('p');
let cardTerminal = document.createElement('div');


card.setAttribute('class','card');
cardIconContainer.setAttribute('class','card__icon');
cardIcon.setAttribute('class',icon);
cardText.setAttribute('class','card__text');
cardTerminal.setAttribute('class','card__terminal');

text_h1.innerText = NumberText;
text_p.innerText = Text;
cardTerminal.innerText = '>'

cardsContainer.appendChild(card);
card.appendChild(cardIconContainer);
card.appendChild(cardText);
card.appendChild(cardTerminal);
cardIconContainer.appendChild(cardIcon);
cardText.appendChild(text_h1);
cardText.appendChild(text_p);
}



