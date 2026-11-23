function drawTiles(tile){
    // Tuile
    ctx.fillStyle = 'BlanchedAlmond';
    ctx.strokeStyle = 'DarkSalmon';
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.roundRect(tileX , tileY , tileWidth , tileHeight , 5);
    ctx.fill();
    ctx.stroke();

    switch(tile){
        // -------- CERCLES ----------------------------
        case 'circleOne':
            ctx.lineWidth = 3;
            circle(0.5 , 0.5 , 0.3 , 0.2);
            break;
        case 'circleTwo':
            ctx.lineWidth = 2;
            circle(0.5 , 0.28 , 0.25 , 0.18);
            circle(0.5 , 0.72 , 0.25 , 0.18);
            break;
        case 'circleThree':
            ctx.lineWidth = 2;
            circle(0.28 , 0.2 , 0.2 , 0.15);
            circle(0.5 , 0.5 , 0.2 , 0.15);
            circle(0.72 , 0.8 , 0.2 , 0.15);
            break;
        case 'circleFour':
            ctx.lineWidth = 1.5;
            circle(0.28 , 0.28 , 0.18 , 0.12);
            circle(0.28 , 0.72 , 0.18 , 0.12);
            circle(0.72 , 0.28 , 0.18 , 0.12);
            circle(0.72 , 0.72 , 0.18 , 0.12);
            break;
        case 'circleFive':
            ctx.lineWidth = 1.5;
            circle(0.28 , 0.2 , 0.18 , 0.12);
            circle(0.28 , 0.8 , 0.18 , 0.12);
            circle(0.72 , 0.2 , 0.18 , 0.12);
            circle(0.72 , 0.8 , 0.18 , 0.12);
            circle(0.5 , 0.5 , 0.18 , 0.12);
            break;
        case 'circleSix':
            ctx.lineWidth = 1.5;
            circle(0.28 , 0.2 , 0.18 , 0.12);
            circle(0.28 , 0.8 , 0.18 , 0.12);
            circle(0.72 , 0.2 , 0.18 , 0.12);
            circle(0.72 , 0.8 , 0.18 , 0.12);
            circle(0.28 , 0.5 , 0.18 , 0.12);
            circle(0.72 , 0.5 , 0.18 , 0.12);
            break;
        case 'circleSeven':
            ctx.lineWidth = 1.5;
            circle(0.28 , 0.2 , 0.15 , 0.1);
            circle(0.2 , 0.8 , 0.12 , 0.08);
            circle(0.72 , 0.2 , 0.15 , 0.1);
            circle(0.8 , 0.8 , 0.12 , 0.08);
            circle(0.28 , 0.5 , 0.15 , 0.1);
            circle(0.72 , 0.5 , 0.15 , 0.1);
            circle(0.5 , 0.8 , 0.12 , 0.08);
            break;
        case 'circleEight':
            ctx.lineWidth = 1.5;
            circle(0.25 , 0.15 , 0.12 , 0.08);
            circle(0.75 , 0.15 , 0.12 , 0.08);
            circle(0.25 , 0.38 , 0.12 , 0.08);
            circle(0.75 , 0.38 , 0.12 , 0.08);
            circle(0.25 , 0.62 , 0.12 , 0.08);
            circle(0.75 , 0.62 , 0.12 , 0.08);
            circle(0.25 , 0.85 , 0.12 , 0.08);
            circle(0.75 , 0.85 , 0.12 , 0.08);
            break;
        case 'circleNine':
            ctx.lineWidth = 1.5;
            circle(0.2 , 0.15 , 0.12 , 0.08);
            circle(0.8 , 0.15 , 0.12 , 0.08);
            circle(0.5 , 0.15 , 0.12 , 0.08);
            circle(0.2 , 0.5 , 0.12 , 0.08);
            circle(0.8 , 0.5 , 0.12 , 0.08);
            circle(0.5 , 0.5 , 0.12 , 0.08);
            circle(0.2 , 0.85 , 0.12 , 0.08);
            circle(0.8 , 0.85 , 0.12 , 0.08);
            circle(0.5 , 0.85 , 0.12 , 0.08);
            break;
        // --------- BAMBOO -------------------------------
        case 'bambooOne':
            ctx.lineWidth = 5;
            bamboo(0.5 , 0.5 , 50);
            break;
        case 'bambooTwo':
            ctx.lineWidth = 5;
            bamboo(0.5 , 0.25 , 25);
            bamboo(0.5 , 0.75 , 25);
            break;
        case 'bambooThree':
            ctx.lineWidth = 5;
            bamboo(0.5 , 0.3 , 25);
            bamboo(0.3 , 0.7 , 25);
            bamboo(0.7 , 0.7 , 25);
            break;
        case 'bambooFour':
            ctx.lineWidth = 5;
            bamboo(0.3 , 0.28 , 25);
            bamboo(0.7 , 0.28 , 25);
            bamboo(0.3 , 0.72 , 25);
            bamboo(0.7 , 0.72 , 25);
            break;
        case 'bambooFive':
            ctx.lineWidth = 5;
            bamboo(0.25 , 0.28 , 25);
            bamboo(0.75 , 0.28 , 25);
            bamboo(0.25 , 0.72 , 25);
            bamboo(0.75 , 0.72 , 25);
            bamboo(0.5 , 0.5 , 25);
            break;
        case 'bambooSix':
            ctx.lineWidth = 5;
            bamboo(0.25 , 0.28 , 25);
            bamboo(0.75 , 0.28 , 25);
            bamboo(0.25 , 0.72 , 25);
            bamboo(0.75 , 0.72 , 25);
            bamboo(0.5 , 0.28 , 25);
            bamboo(0.5 , 0.72 , 25);
            break;
        case 'bambooSeven':
            ctx.lineWidth = 5;
            bamboo(0.25 , 0.5 , 18);
            bamboo(0.75 , 0.5 , 18);
            bamboo(0.25 , 0.8 , 18);
            bamboo(0.75 , 0.8 , 18);
            bamboo(0.5 , 0.5 , 18);
            bamboo(0.5 , 0.8 , 18);
            bamboo(0.5 , 0.2 , 18);
            break;
        case 'bambooEight':
            ctx.lineWidth = 5;
            bamboo(0.2 , 0.72 , 25);
            bamboo(0.4 , 0.72 , 25);
            bamboo(0.6 , 0.72 , 25);
            bamboo(0.8 , 0.72 , 25);
            bamboo(0.2 , 0.28 , 25);
            bamboo(0.4 , 0.28 , 25);
            bamboo(0.6 , 0.28 , 25);
            bamboo(0.8 , 0.28 , 25);
            break;
        case 'bambooNine':
            ctx.lineWidth = 5;
            bamboo(0.25 , 0.5 , 18);
            bamboo(0.75 , 0.5 , 18);
            bamboo(0.25 , 0.8 , 18);
            bamboo(0.75 , 0.8 , 18);
            bamboo(0.5 , 0.5 , 18);
            bamboo(0.5 , 0.8 , 18);
            bamboo(0.25 , 0.2 , 18);
            bamboo(0.75 , 0.2 , 18);
            bamboo(0.5 , 0.2 , 18);
            break;
        // --------- CARACTERES -------------------------------
        case 'characterOne':
            character('一');
            break;
        case 'characterTwo':
            character('二');
            break;
        case 'characterThree':
            character('三');
            break;
        case 'characterFour':
            character('四');
            break;
        case 'characterFive':
            character('五');
            break;
        case 'characterSix':
            character('六');
            break;
        case 'characterSeven':
            character('七');
            break;
        case 'characterEight':
            character('八');
            break;
        case 'characterNine':
            character('九');
            break;
        // --------- VENTS -------------------------------------
        case 'windEast':
            honor('東' , 'MidnightBlue');
            break;
        case 'windSouth':
            honor('南' , 'MidnightBlue');
            break;
        case 'windWest':
            honor('西' , 'MidnightBlue');
            break;
        case 'windNorth':
            honor('北' , 'MidnightBlue');
            break;
        // --------- DRAGONS -----------------------------------
        case 'dragonRed':
            honor('中' , 'Crimson');
            break;
        case 'dragonGreen':
            honor('發' , 'DarkGreen');
            break;
        case 'dragonWhite':
            whiteDragon();
            break;
        // --------- FLEURS ------------------------------------
        case 'flowerPlum':
            bonus('梅' , '一' , 'DarkMagenta');
            break;
        case 'flowerOrchid':
            bonus('蘭' , '二' , 'DarkMagenta');
            break;
        case 'flowerChrysanthemum':
            bonus('菊' , '三' , 'DarkMagenta');
            break;
        case 'flowerBamboo':
            bonus('竹' , '四' , 'DarkMagenta');
            break;
        // --------- SAISONS -----------------------------------
        case 'seasonSpring':
            bonus('春' , '一' , 'Teal');
            break;
        case 'seasonSummer':
            bonus('夏' , '二' , 'Teal');
            break;
        case 'seasonAutumn':
            bonus('秋' , '三' , 'Teal');
            break;
        case 'seasonWinter':
            bonus('冬' , '四' , 'Teal');
            break;
        default:
    }
}
// Remplace tes deux fonctions circle() et bamboo() par celles-ci.
// Les case de drawTiles() ne changent pas.

// Cercle : anneau vert foncé + point rouge au centre
function circle(x, y, c , r){
    ctx.strokeStyle = 'DarkGreen';
    ctx.fillStyle = 'Crimson';

    ctx.beginPath();
    ctx.arc(tileX + tileWidth *x , tileY + tileHeight *y , tileWidth *c , 0 , Math.PI *2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(tileX + tileWidth *x , tileY + tileHeight *y , tileWidth *r , 0 , Math.PI *2);
    ctx.fill();
}

// Bambou : tige aux bouts arrondis, avec un petit nœud au milieu
// (la longueur totale reste l, comme avant)
function bamboo(x , y , l){
    const w = ctx.lineWidth;                       // épaisseur réglée dans le case
    const posX = tileX + tileWidth *x;
    const posY = (tileY + tileHeight *y) - l /2;

    // tige
    ctx.strokeStyle = 'DarkGreen';
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(posX , posY + w /2);
    ctx.lineTo(posX , posY + l - w /2);
    ctx.stroke();

    // nœud : un petit trait de la couleur de la tuile en travers
    ctx.strokeStyle = 'BlanchedAlmond';
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'butt';
    ctx.beginPath();
    ctx.moveTo(posX - w /2 - 1 , posY + l /2);
    ctx.lineTo(posX + w /2 + 1 , posY + l /2);
    ctx.stroke();

    ctx.lineWidth = w;                             // on remet l'épaisseur d'origine
}

function text(symbol , x , y , size , color){
    ctx.fillStyle = color;
    ctx.font = `bold ${tileWidth * size}px "Noto Sans CJK TC", "Noto Sans CJK SC", "PingFang TC", "Microsoft JhengHei", "Microsoft YaHei", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(symbol , tileX + tileWidth *x , tileY + tileHeight *y);
}

function character(number){
    text(number , 0.5 , 0.28 , 0.55 , 'MidnightBlue');
    text('萬' , 0.5 , 0.72 , 0.55 , 'Maroon');
}

function honor(symbol , color){
    text(symbol , 0.5 , 0.5 , 0.8 , color);
}
function whiteDragon(){
    ctx.strokeStyle = 'RoyalBlue';
    ctx.lineWidth = 3;
    ctx.strokeRect(tileX + tileWidth *0.22 , tileY + tileHeight *0.2 , tileWidth *0.56 , tileHeight *0.6);
}

function bonus(symbol , number , color){
    text(symbol , 0.5 , 0.4 , 0.7 , color);
    text(number , 0.5 , 0.82 , 0.3 , 'DimGray');
}