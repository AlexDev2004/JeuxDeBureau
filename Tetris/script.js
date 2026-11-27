// PDO
const canvas = document.querySelector('#canva');
ctx = canvas.getContext('2d');
const previewZone = document.querySelector('#preview');
const ctx2 = previewZone.getContext('2d');
const rejouer = document.querySelector('button');
const difficulte = document.querySelector('select');
const endMessage = document.querySelector('h2');
const scoreZone = document.querySelector('p');

// Initialisation
const bricks = {
    I: { color: 'red',           border: 'darkRed',         cells: [[3,0] , [4,0] , [5,0] , [6,0]] , pivot: [4.5,0.5] },
    O: { color: 'blue',          border: 'DarkBlue',        cells: [[4,0] , [5,0] , [4,1] , [5,1]] , pivot: [4.5,0.5] },
    T: { color: 'limeGreen',     border: 'green',           cells: [[3,0] , [4,0] , [5,0] , [4,1]] , pivot: [4,0] },
    J: { color: 'gold',          border: 'goldenRod',       cells: [[3,0] , [3,1] , [4,1] , [5,1]] , pivot: [4,1] },
    Z: { color: 'darkViolet',    border: 'indigo',          cells: [[3,0] , [4,0] , [4,1] , [5,1]] , pivot: [4,1] },
    L: { color: 'PaleVioletRed', border: 'MediumVioletRed', cells: [[5,0] , [3,1] , [4,1] , [5,1]] , pivot: [4,1] },
    S: { color: 'turquoise',     border: 'teal',            cells: [[4,0] , [5,0] , [3,1] , [4,1]] , pivot: [4,1] }
}

let brickFall = {};
let brickNext = {};
let boucle = null;
let moveInfo = 'none';
let blocs = [];
let blocId;
let score;
let fallTime;

// Dessin
function drawGrid(){
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 0.3;

    for(let i = 1; i < 10 ; i++){
        ctx.beginPath();
        ctx.moveTo(i*30 , 0);
        ctx.lineTo(i*30 , canvas.height);
        ctx.stroke();
    }
    for(let i = 1; i < 21 ; i++){
        ctx.beginPath();
        ctx.moveTo(0,i*30);
        ctx.lineTo(canvas.width , i*30);
        ctx.stroke();
    }
}

function drawBrick(){
    ctx.strokeStyle = brickFall.border;
    ctx.fillStyle = brickFall.color;
    ctx.lineWidth = 2;

    brickFall.cells.forEach(bloc => {
        ctx.beginPath();
        ctx.roundRect(bloc[0]*30 , bloc[1]*30 , 30 , 30 , 3);
        ctx.fill();
        ctx.stroke();
    });
}

function drawNext(){
    ctx2.strokeStyle = brickNext.border;
    ctx2.fillStyle = brickNext.color;
    ctx2.lineWidth = 2;

    brickNext.cells.forEach(bloc => {
        ctx2.beginPath();
        ctx2.roundRect((bloc[0]-2)*30 , (bloc[1]+2)*30 , 30 , 30 , 3);
        ctx2.fill();
        ctx2.stroke();
    });
}
function drawBlocs(){
    ctx.lineWidth = 2;

    blocs.forEach(bloc => {
        ctx.fillStyle = bloc.color;
        ctx.strokeStyle = bloc.border;

        ctx.beginPath();
        ctx.roundRect(bloc.x*30 , bloc.y*30 , 30 , 30 , 3);
        ctx.fill();
        ctx.stroke();
    });
}

// Système
function randomBrick(){
    const cles = Object.values(bricks);
    return cles[Math.floor(Math.random()*cles.length)];
}

function fall(){
    let checkP = true;
    brickFall.cells.forEach(cell => cell[1]++);

    if(brickFall.cells.some(cell => cell[1] > 20 || (blocs.some(bloc => cell[0] === bloc.x && cell[1] === bloc.y)))){
        brickFall.cells.forEach(cell => {
            cell[1]--;
            checkP = false;
        });

        brickFall.cells.forEach(cell => {
            blocs.push({
                x: cell[0],
                y: cell[1],
                color: brickFall.color,
                border: brickFall.border
            });
        });
        brickFall = structuredClone(brickNext);
        brickNext = randomBrick();

        if(brickFall.cells.some(cell => (blocs.some(bloc => cell[0] === bloc.x && cell[1] === bloc.y)))){
            stop();
            endMessage.innerText = 'Perdu !'
        }
    }
    if(checkP) brickFall.pivot[1] ++;
}
function left(){
    let check = true;
    let checkP = false;
    brickFall.cells.forEach(element => {
        if(element[0] <= 0) check = false;
    });
    brickFall.cells.forEach(element => {
        if(check) {
            element[0]--;
            checkP = true;
        }
    });
    if(checkP) brickFall.pivot[0] --;
}
function right(){
    let check = true;
    let checkP = false;
    brickFall.cells.forEach(element => {
        if(element[0] >= 9) check = false;
    });
    brickFall.cells.forEach(element => {
        if(check) {
            element[0]++;
            checkP = true;
        }
    });
    if(checkP) brickFall.pivot[0] ++;
}

function line(){
    let lignes = [];
    blocs.forEach(bloc => {
        const ligne = blocs.filter(element => element.y === bloc.y);
        if(ligne.length === 10 && !lignes.includes(bloc.y)) lignes.push(bloc.y);
    });
    blocs = blocs.filter(bloc => !lignes.includes(bloc.y));
    blocs.forEach(bloc => {
        bloc.y += lignes.filter(ligne => ligne > bloc.y).length;
    }); 
    if(lignes.length > 0) {
        score++;
        scoreZone.innerText = 'Score : '+score;
    } 
}

function rotate(sens){
    let pX = brickFall.pivot[0];
    let pY = brickFall.pivot[1];

    let newCells = [];
    if(sens === 'rotateRight'){
        brickFall.cells.forEach(cell => {
            newCells.push([
                pX + pY - cell[1] , 
                pY - pX + cell[0]
            ]);
        });
    }else if(sens === 'rotateLeft'){
        brickFall.cells.forEach(cell => {
            newCells.push([
                pX - pY + cell[1] , 
                pY + pX - cell[0]
            ]);
        });
    }

    if(!newCells.some(cell => blocs.some(bloc => cell[0] === bloc.x && cell[1] === bloc.y) || cell[0] < 0 || cell[0] > 9 || cell[1] > 20)){
        brickFall.cells = newCells;
    }
}

// Jeu
function tick(){
    let positions = brickFall.cells.map(cell => [...cell]);
    switch(moveInfo){
        case 'left':
            left();
            break;
        case 'right':
            right();
            break;
        case 'rotateRight':
            rotate('rotateRight');
            break;
        case 'rotateLeft':
            rotate('rotateLeft');
            break;
    }
    blocs.forEach(bloc => {
        if(brickFall.cells.some(cell => cell[0] === bloc.x && cell[1] === bloc.y)){
            brickFall.cells = positions;
        }
    });

    moveInfo = 'none';

    if(fallTime % 2 === 0) fall();
    fallTime ++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);

    drawGrid();
    drawBrick();
    drawNext();
    drawBlocs();
    line();
    drawBlocs();
}

function loop(){
    clearInterval(boucle);
    boucle = setInterval(tick , 200);
}

function stop(){
    clearInterval(boucle);
}

function startGame(){
    blocId = 0;
    score = 0;
    fallTime = 0;
    scoreZone.innerText = 'Score : ' + score;
    brickNext = randomBrick();
    brickFall = structuredClone(randomBrick());
    loop();
}

startGame();

// Event
document.addEventListener('keydown' , (e) => {
    e.preventDefault();
    switch(e.key){
        case 'ArrowLeft':
            moveInfo = 'left';
            break;
        case 'ArrowRight':
            moveInfo = 'right';
            break;
        case 'ArrowUp':
            moveInfo = 'rotateLeft';
            break;
        case 'ArrowDown':
            moveInfo = 'rotateRight';
            break;
    }
});