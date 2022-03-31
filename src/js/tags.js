
const colorGreen = document.createElement('div');
const colorYellow = document.createElement('div');
const middle = document.createElement('div');
const colorRed = document.createElement('div');
const colorBlue = document.createElement('div');
const scoree = document.createElement('div');


function creation() {
    const title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.innerText = 'GENIUS';

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    const leftSide = document.createElement('div');
    leftSide.setAttribute('class', 'left-side');

    colorGreen.setAttribute('class', 'color-green');
    colorYellow.setAttribute('class','color-yellow');
    middle.setAttribute('class' , 'middle');
    scoree.setAttribute('id', 'score');

    const start = document.createElement('button');
    start.setAttribute('id', 'start');
    start.innerText = 'Jogar';

    const rightSide = document.createElement('div');
    rightSide.setAttribute('class' , 'right-side');

    colorRed.setAttribute('class', 'color-red');
    colorBlue.setAttribute('class', 'color-blue');

    document.body.appendChild(title);
    document.body.appendChild(container);
    container.appendChild(leftSide);
    leftSide.appendChild(colorGreen);
    leftSide.appendChild(colorYellow);
    container.appendChild(middle);
    middle.appendChild(scoree);
    middle.appendChild(start);
    container.appendChild(rightSide);
    rightSide.appendChild(colorRed);
    rightSide.appendChild(colorBlue);
    


}

creation();





















