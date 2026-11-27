function drawTiles(tile){
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


// Tuiles de référence du Mahjong : 144 tuiles au total.
// type  = ce qu'on dessine (le nom utilisé dans drawTiles)
// pair  = ce qui sert à comparer : deux tuiles forment une paire si leur pair est identique
// count = nombre d'exemplaires de cette tuile dans le jeu

const tileSet = [
    // --------- CERCLES ---------
    { type: 'circleOne', pair: 'circleOne', count: 4 },
    { type: 'circleTwo', pair: 'circleTwo', count: 4 },
    { type: 'circleThree', pair: 'circleThree', count: 4 },
    { type: 'circleFour', pair: 'circleFour', count: 4 },
    { type: 'circleFive', pair: 'circleFive', count: 4 },
    { type: 'circleSix', pair: 'circleSix', count: 4 },
    { type: 'circleSeven', pair: 'circleSeven', count: 4 },
    { type: 'circleEight', pair: 'circleEight', count: 4 },
    { type: 'circleNine', pair: 'circleNine', count: 4 },
    // --------- BAMBOUS ---------
    { type: 'bambooOne', pair: 'bambooOne', count: 4 },
    { type: 'bambooTwo', pair: 'bambooTwo', count: 4 },
    { type: 'bambooThree', pair: 'bambooThree', count: 4 },
    { type: 'bambooFour', pair: 'bambooFour', count: 4 },
    { type: 'bambooFive', pair: 'bambooFive', count: 4 },
    { type: 'bambooSix', pair: 'bambooSix', count: 4 },
    { type: 'bambooSeven', pair: 'bambooSeven', count: 4 },
    { type: 'bambooEight', pair: 'bambooEight', count: 4 },
    { type: 'bambooNine', pair: 'bambooNine', count: 4 },
    // --------- CARACTERES ---------
    { type: 'characterOne', pair: 'characterOne', count: 4 },
    { type: 'characterTwo', pair: 'characterTwo', count: 4 },
    { type: 'characterThree', pair: 'characterThree', count: 4 },
    { type: 'characterFour', pair: 'characterFour', count: 4 },
    { type: 'characterFive', pair: 'characterFive', count: 4 },
    { type: 'characterSix', pair: 'characterSix', count: 4 },
    { type: 'characterSeven', pair: 'characterSeven', count: 4 },
    { type: 'characterEight', pair: 'characterEight', count: 4 },
    { type: 'characterNine', pair: 'characterNine', count: 4 },
    // --------- VENTS ---------
    { type: 'windEast', pair: 'windEast', count: 4 },
    { type: 'windSouth', pair: 'windSouth', count: 4 },
    { type: 'windWest', pair: 'windWest', count: 4 },
    { type: 'windNorth', pair: 'windNorth', count: 4 },
    // --------- DRAGONS ---------
    { type: 'dragonRed', pair: 'dragonRed', count: 4 },
    { type: 'dragonGreen', pair: 'dragonGreen', count: 4 },
    { type: 'dragonWhite', pair: 'dragonWhite', count: 4 },
    // --------- FLEURS : n'importe quelle fleur va avec n'importe quelle autre ---------
    { type: 'flowerPlum', pair: 'flower', count: 1 },
    { type: 'flowerOrchid', pair: 'flower', count: 1 },
    { type: 'flowerChrysanthemum', pair: 'flower', count: 1 },
    { type: 'flowerBamboo', pair: 'flower', count: 1 },
    // --------- SAISONS : n'importe quelle saison va avec n'importe quelle autre ---------
    { type: 'seasonSpring', pair: 'season', count: 1 },
    { type: 'seasonSummer', pair: 'season', count: 1 },
    { type: 'seasonAutumn', pair: 'season', count: 1 },
    { type: 'seasonWinter', pair: 'season', count: 1 }
];

// ---------- Contrôle au chargement (à retirer quand tout fonctionne) ----------
// const total = tileSet.reduce((somme , t) => somme + t.count , 0);
// console.log('Total de tuiles :' , total);     // doit afficher 144

// const parParPair = {};
// tileSet.forEach(t => {
//     parParPair[t.pair] = (parParPair[t.pair] || 0) + t.count;
// });
// for(const code in parParPair){
//     if(parParPair[code] % 2 !== 0) console.error('Nombre impair pour' , code);
// }

// Disposition « tortue » : 144 emplacements (positions seulement, pas de type).
// x et y sont en demi-tuiles : une tuile occupe 2 x 2 unités.
// z est l'étage (0 = sol).
// Taille du canvas conseillée : 800 x 600.

const layoutDifficult = [
    // --------- ETAGE 0 (87) ---------
    {x: 2, y: 0, z: 0}, {x: 4, y: 0, z: 0}, {x: 6, y: 0, z: 0}, {x: 8, y: 0, z: 0}, {x: 10, y: 0, z: 0}, {x: 12, y: 0, z: 0},
    {x: 14, y: 0, z: 0}, {x: 16, y: 0, z: 0}, {x: 18, y: 0, z: 0}, {x: 20, y: 0, z: 0}, {x: 22, y: 0, z: 0}, {x: 24, y: 0, z: 0},
    {x: 6, y: 2, z: 0}, {x: 8, y: 2, z: 0}, {x: 10, y: 2, z: 0}, {x: 12, y: 2, z: 0}, {x: 14, y: 2, z: 0}, {x: 16, y: 2, z: 0},
    {x: 18, y: 2, z: 0}, {x: 20, y: 2, z: 0}, {x: 4, y: 4, z: 0}, {x: 6, y: 4, z: 0}, {x: 8, y: 4, z: 0}, {x: 10, y: 4, z: 0},
    {x: 12, y: 4, z: 0}, {x: 14, y: 4, z: 0}, {x: 16, y: 4, z: 0}, {x: 18, y: 4, z: 0}, {x: 20, y: 4, z: 0}, {x: 22, y: 4, z: 0},
    {x: 2, y: 6, z: 0}, {x: 4, y: 6, z: 0}, {x: 6, y: 6, z: 0}, {x: 8, y: 6, z: 0}, {x: 10, y: 6, z: 0}, {x: 12, y: 6, z: 0},
    {x: 14, y: 6, z: 0}, {x: 16, y: 6, z: 0}, {x: 18, y: 6, z: 0}, {x: 20, y: 6, z: 0}, {x: 22, y: 6, z: 0}, {x: 24, y: 6, z: 0},
    {x: 2, y: 8, z: 0}, {x: 4, y: 8, z: 0}, {x: 6, y: 8, z: 0}, {x: 8, y: 8, z: 0}, {x: 10, y: 8, z: 0}, {x: 12, y: 8, z: 0},
    {x: 14, y: 8, z: 0}, {x: 16, y: 8, z: 0}, {x: 18, y: 8, z: 0}, {x: 20, y: 8, z: 0}, {x: 22, y: 8, z: 0}, {x: 24, y: 8, z: 0},
    {x: 4, y: 10, z: 0}, {x: 6, y: 10, z: 0}, {x: 8, y: 10, z: 0}, {x: 10, y: 10, z: 0}, {x: 12, y: 10, z: 0}, {x: 14, y: 10, z: 0},
    {x: 16, y: 10, z: 0}, {x: 18, y: 10, z: 0}, {x: 20, y: 10, z: 0}, {x: 22, y: 10, z: 0}, {x: 6, y: 12, z: 0}, {x: 8, y: 12, z: 0},
    {x: 10, y: 12, z: 0}, {x: 12, y: 12, z: 0}, {x: 14, y: 12, z: 0}, {x: 16, y: 12, z: 0}, {x: 18, y: 12, z: 0}, {x: 20, y: 12, z: 0},
    {x: 2, y: 14, z: 0}, {x: 4, y: 14, z: 0}, {x: 6, y: 14, z: 0}, {x: 8, y: 14, z: 0}, {x: 10, y: 14, z: 0}, {x: 12, y: 14, z: 0},
    {x: 14, y: 14, z: 0}, {x: 16, y: 14, z: 0}, {x: 18, y: 14, z: 0}, {x: 20, y: 14, z: 0}, {x: 22, y: 14, z: 0}, {x: 24, y: 14, z: 0},
    {x: 0, y: 7, z: 0}, {x: 26, y: 7, z: 0}, {x: 28, y: 7, z: 0},
    // --------- ETAGE 1 (36) ---------
    {x: 8, y: 2, z: 1}, {x: 10, y: 2, z: 1}, {x: 12, y: 2, z: 1}, {x: 14, y: 2, z: 1}, {x: 16, y: 2, z: 1}, {x: 18, y: 2, z: 1},
    {x: 8, y: 4, z: 1}, {x: 10, y: 4, z: 1}, {x: 12, y: 4, z: 1}, {x: 14, y: 4, z: 1}, {x: 16, y: 4, z: 1}, {x: 18, y: 4, z: 1},
    {x: 8, y: 6, z: 1}, {x: 10, y: 6, z: 1}, {x: 12, y: 6, z: 1}, {x: 14, y: 6, z: 1}, {x: 16, y: 6, z: 1}, {x: 18, y: 6, z: 1},
    {x: 8, y: 8, z: 1}, {x: 10, y: 8, z: 1}, {x: 12, y: 8, z: 1}, {x: 14, y: 8, z: 1}, {x: 16, y: 8, z: 1}, {x: 18, y: 8, z: 1},
    {x: 8, y: 10, z: 1}, {x: 10, y: 10, z: 1}, {x: 12, y: 10, z: 1}, {x: 14, y: 10, z: 1}, {x: 16, y: 10, z: 1}, {x: 18, y: 10, z: 1},
    {x: 8, y: 12, z: 1}, {x: 10, y: 12, z: 1}, {x: 12, y: 12, z: 1}, {x: 14, y: 12, z: 1}, {x: 16, y: 12, z: 1}, {x: 18, y: 12, z: 1},
    // --------- ETAGE 2 (16) ---------
    {x: 10, y: 4, z: 2}, {x: 12, y: 4, z: 2}, {x: 14, y: 4, z: 2}, {x: 16, y: 4, z: 2}, {x: 10, y: 6, z: 2}, {x: 12, y: 6, z: 2},
    {x: 14, y: 6, z: 2}, {x: 16, y: 6, z: 2}, {x: 10, y: 8, z: 2}, {x: 12, y: 8, z: 2}, {x: 14, y: 8, z: 2}, {x: 16, y: 8, z: 2},
    {x: 10, y: 10, z: 2}, {x: 12, y: 10, z: 2}, {x: 14, y: 10, z: 2}, {x: 16, y: 10, z: 2},
    // --------- ETAGE 3 (4) ---------
    {x: 12, y: 6, z: 3}, {x: 14, y: 6, z: 3}, {x: 12, y: 8, z: 3}, {x: 14, y: 8, z: 3},
    // --------- ETAGE 4 (1) ---------
    {x: 13, y: 7, z: 4}
];

// Dispositions plus petites que la tortue. Positions seulement, nombre d'emplacements pair.
// x et y en demi-tuiles (une tuile = 2 x 2 unités), z = étage.

// FACILE : 36 emplacements (18 paires), canvas conseillé : 400 x 350
const layoutEasy = [
    // --------- ETAGE 0 (24) ---------
    {x: 0, y: 0, z: 0}, {x: 2, y: 0, z: 0}, {x: 4, y: 0, z: 0}, {x: 6, y: 0, z: 0}, {x: 8, y: 0, z: 0}, {x: 10, y: 0, z: 0},
    {x: 0, y: 2, z: 0}, {x: 2, y: 2, z: 0}, {x: 4, y: 2, z: 0}, {x: 6, y: 2, z: 0}, {x: 8, y: 2, z: 0}, {x: 10, y: 2, z: 0},
    {x: 0, y: 4, z: 0}, {x: 2, y: 4, z: 0}, {x: 4, y: 4, z: 0}, {x: 6, y: 4, z: 0}, {x: 8, y: 4, z: 0}, {x: 10, y: 4, z: 0},
    {x: 0, y: 6, z: 0}, {x: 2, y: 6, z: 0}, {x: 4, y: 6, z: 0}, {x: 6, y: 6, z: 0}, {x: 8, y: 6, z: 0}, {x: 10, y: 6, z: 0},
    // --------- ETAGE 1 (8) ---------
    {x: 2, y: 2, z: 1}, {x: 4, y: 2, z: 1}, {x: 6, y: 2, z: 1}, {x: 8, y: 2, z: 1}, {x: 2, y: 4, z: 1}, {x: 4, y: 4, z: 1},
    {x: 6, y: 4, z: 1}, {x: 8, y: 4, z: 1},
    // --------- ETAGE 2 (4) ---------
    {x: 4, y: 2, z: 2}, {x: 6, y: 2, z: 2}, {x: 4, y: 4, z: 2}, {x: 6, y: 4, z: 2}
];

// MOYEN : 80 emplacements (40 paires), canvas conseillé : 500 x 480
const layoutMedium = [
    // --------- ETAGE 0 (48) ---------
    {x: 0, y: 0, z: 0}, {x: 2, y: 0, z: 0}, {x: 4, y: 0, z: 0}, {x: 6, y: 0, z: 0}, {x: 8, y: 0, z: 0}, {x: 10, y: 0, z: 0},
    {x: 12, y: 0, z: 0}, {x: 14, y: 0, z: 0}, {x: 0, y: 2, z: 0}, {x: 2, y: 2, z: 0}, {x: 4, y: 2, z: 0}, {x: 6, y: 2, z: 0},
    {x: 8, y: 2, z: 0}, {x: 10, y: 2, z: 0}, {x: 12, y: 2, z: 0}, {x: 14, y: 2, z: 0}, {x: 0, y: 4, z: 0}, {x: 2, y: 4, z: 0},
    {x: 4, y: 4, z: 0}, {x: 6, y: 4, z: 0}, {x: 8, y: 4, z: 0}, {x: 10, y: 4, z: 0}, {x: 12, y: 4, z: 0}, {x: 14, y: 4, z: 0},
    {x: 0, y: 6, z: 0}, {x: 2, y: 6, z: 0}, {x: 4, y: 6, z: 0}, {x: 6, y: 6, z: 0}, {x: 8, y: 6, z: 0}, {x: 10, y: 6, z: 0},
    {x: 12, y: 6, z: 0}, {x: 14, y: 6, z: 0}, {x: 0, y: 8, z: 0}, {x: 2, y: 8, z: 0}, {x: 4, y: 8, z: 0}, {x: 6, y: 8, z: 0},
    {x: 8, y: 8, z: 0}, {x: 10, y: 8, z: 0}, {x: 12, y: 8, z: 0}, {x: 14, y: 8, z: 0}, {x: 0, y: 10, z: 0}, {x: 2, y: 10, z: 0},
    {x: 4, y: 10, z: 0}, {x: 6, y: 10, z: 0}, {x: 8, y: 10, z: 0}, {x: 10, y: 10, z: 0}, {x: 12, y: 10, z: 0}, {x: 14, y: 10, z: 0},
    // --------- ETAGE 1 (24) ---------
    {x: 2, y: 2, z: 1}, {x: 4, y: 2, z: 1}, {x: 6, y: 2, z: 1}, {x: 8, y: 2, z: 1}, {x: 10, y: 2, z: 1}, {x: 12, y: 2, z: 1},
    {x: 2, y: 4, z: 1}, {x: 4, y: 4, z: 1}, {x: 6, y: 4, z: 1}, {x: 8, y: 4, z: 1}, {x: 10, y: 4, z: 1}, {x: 12, y: 4, z: 1},
    {x: 2, y: 6, z: 1}, {x: 4, y: 6, z: 1}, {x: 6, y: 6, z: 1}, {x: 8, y: 6, z: 1}, {x: 10, y: 6, z: 1}, {x: 12, y: 6, z: 1},
    {x: 2, y: 8, z: 1}, {x: 4, y: 8, z: 1}, {x: 6, y: 8, z: 1}, {x: 8, y: 8, z: 1}, {x: 10, y: 8, z: 1}, {x: 12, y: 8, z: 1},
    // --------- ETAGE 2 (8) ---------
    {x: 4, y: 4, z: 2}, {x: 6, y: 4, z: 2}, {x: 8, y: 4, z: 2}, {x: 10, y: 4, z: 2}, {x: 4, y: 6, z: 2}, {x: 6, y: 6, z: 2},
    {x: 8, y: 6, z: 2}, {x: 10, y: 6, z: 2}
];