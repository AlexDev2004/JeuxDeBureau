// DOM -----------------------------------
const difficulte = document.querySelector('select');
const rejouer = document.querySelector('button');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const endMessage = document.querySelector('h2');

// Initialisations ------------------------
const touches = {
    ArrowLeft: false,
    ArrowRight: false
}

let finPartie;

let boucle = null;

let brickTab = [];

const barre = {
    x: 15,
    y: 28,
    l: 5,
    e: 10,
    v: 0.3
}

function pos(n){
    return n * 20;
}

let vitesse = 0.2;

const balle = {
    x: 15,
    y: 15,
    r: 8,
    vx: 0,
    vy: vitesse
}

const brique = {
    x: 0,
    y: 0,
    l: 3,
    h: 1,
    n: 1
}

const couleurs1 = ['' , 'Crimson' , 'BlueViolet' , 'LimeGreen'];
const couleurs2 = ['' , 'DarkRed' , 'DarkBlue' , 'Green'];

// Boucle ------------------------------------
function stop(){
    clearInterval(boucle);
}
function loop(){
    clearInterval(boucle);
    boucle = setInterval(tick , 16);
}
function tick(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    placeBricks();
    moveBar();
    moveBall();
    drawBarre();
    drawBall();

    if(brickTab.every(b => b.n === 0)) {
        endMessage.innerText = 'Gagné !';
        stop();
        finPartie = true;0
    }
}

// Dessins -----------------------------------
function drawBarre(){
    // Contour foncé
    ctx.strokeStyle = 'black';
    ctx.lineWidth = barre.e;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(pos(barre.x) - (pos(barre.l) / 2) , pos(barre.y));
    ctx.lineTo(pos(barre.x) + (pos(barre.l) / 2) , pos(barre.y));
    ctx.stroke();

    // Barre claire
    ctx.strokeStyle = 'lightGray';
    ctx.lineWidth = barre.e - 2;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo((pos(barre.x)) - (pos(barre.l) / 2) , pos(barre.y));
    ctx.lineTo((pos(barre.x)) + (pos(barre.l) / 2) , pos(barre.y));
    ctx.stroke();
}

function drawBall(){
    ctx.fillStyle = 'white';

    ctx.beginPath();
    ctx.arc(pos(balle.x) , pos(balle.y) , balle.r , 0 , Math.PI * 2);
    ctx.fill();
}

function drawBrick(){
    ctx.fillStyle = couleurs1[brique.n];
    ctx.strokeStyle = couleurs2[brique.n];
    ctx.lineWidth = 1;

    ctx.fillRect(pos(brique.x) +2 , pos(brique.y) +2 , pos(brique.l) -4 , pos(brique.h) -4)
    ctx.strokeRect(pos(brique.x) +2 , pos(brique.y) +2 , pos(brique.l) -4 , pos(brique.h)-4);
}

// Systeme ----------------------------------------------
function placeBricks(){
    brique.y = 0;
    for(let i = 0; i < brickTab.length; i++){
        brique.x = brickTab[i].x;
        brique.y = brickTab[i].y;
        brique.n = brickTab[i].n;
        if(brique.n > 0) drawBrick();
    }
}

function moveBar(){
    if(finPartie) return;
    if(touches.ArrowLeft && (barre.x - (barre.l / 2 + barre.v)) > 0) barre.x -= barre.v;
    if(touches.ArrowRight && (barre.x + (barre.l / 2 + barre.v)) < 30) barre.x += barre.v;
}

function moveBall(){
    collision();
    collisionBrick();
    balle.x += balle.vx;
    balle.y += balle.vy;
} 

function collision(){
    if(balle.y >= 29){
        stop();
        finPartie = true;
        endMessage.innerText = 'Perdu !'
    }else if(balle.x >= 29){
        changeDirection('mur');
        balle.x -= 0.5;
    }else if(balle.x <= 1){
        changeDirection('mur')
        balle.x += 0.5;
    }else if(balle.y <= 1){
        changeDirection('haut');
        balle.y += 0.5;
    }else if((balle.y >= barre.y -0.5 && balle.y <= barre.y) && (balle.x >= barre.x - (barre.l /2 + 0.5)  && balle.x <= barre.x + (barre.l /2 + 0.5))){
        changeDirection('barre');
        balle.y -= 0.5;
    }
}

function changeDirection(zone){
    switch(zone){
        case 'mur':
            balle.vx *= -1;
            break;
        case 'haut':
            balle.vy *= -1;
            break;
        case 'barre':
            collisionBarre();
            break; 
    }
}

function collisionBarre(){
    const pas = vitesse * 0.25;     // 0.05 quand vitesse = 0.2
    const max = vitesse * 0.75;     // 0.15 quand vitesse = 0.2

    if(balle.x < barre.x - barre.l / 6){
        balle.vx = Math.max(balle.vx - pas, -max);
    }else if(balle.x > barre.x + barre.l / 6){
        balle.vx = Math.min(balle.vx + pas, max);
    }
    balle.vy = -(vitesse - Math.abs(balle.vx));   // toujours vers le haut
}

function collisionBrick(){
    const rayon = balle.r / 20;
    const posX = balle.x - balle.vx;
    const posY = balle.y - balle.vy;

    for(const element of brickTab) {
        if(element.n === 0) continue;

        if((balle.x >= element.x  - rayon && balle.x <= element.x + element.l + rayon) && (balle.y >= element.y - rayon && balle.y <= element.y + element.h + rayon)){
            if(posX >= element.x - rayon && posX <= element.x + element.l + rayon){
                balle.vy *= -1;
            }else if(posY >= element.y - rayon && posY <= element.y + element.h + rayon){
                balle.vx *= -1;
            }else{
                balle.vx *= -1;
                balle.vy *= -1;
            }

            element.n --;
            break;
        }

    }
}

// Event -----------------------------------------------
document.addEventListener('keydown' , (e) => {
    if(e.key in touches){
        touches[e.key] = true;
        e.preventDefault();
    }
});
document.addEventListener('keyup' , (e) => {
    if(e.key in touches){
        touches[e.key] = false;
    }
});

window.addEventListener('blur' , () => {
    touches.ArrowLeft = false;
    touches.ArrowRight = false;
});

rejouer.addEventListener('click' , () => {
    startGame(vitesse);
});

difficulte.addEventListener('change' , (e) => {
    niveau = Number(e.target.value);
    startGame(niveau);
});

// Jeu
function startGame(speed){
    console.log(speed);
    endMessage.innerText = '';
    finPartie = false;
    brickTab = [];
    for(let i = 0; i < 10; i++){
        for(let j = 2; j < 10; j++){
            brickTab.push({
                x: i * brique.l,
                y: j * brique.h,
                l: brique.l,
                h: brique.h,
                n: Math.floor(Math.random()*3) + 1
            });
        }
    }

    barre.x = 15;
    barre.y = 28;

    balle.x = 15;
    balle.y = 15;
    balle.vx = 0;
    balle.vy = speed;

    vitesse = balle.vy

    loop();
}


startGame(vitesse);