const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const endMesage = document.querySelector('h2');
const difficulte = document.querySelector('select');
const rejouer = document.querySelector('button');
const nomTuile = document.querySelector('p');

const tileWidth = 50;
const tileHeight = 70;
let tileX = 0;
let tileY = 0;

let tiles = [];

function buildTiles(){
    tiles = [];
    tileSet.forEach(tile => {
        for(let i = 0; i < tile.count; i++){
            tiles.push({pair: tile.pair, type: tile.type});
        }
        
    });
}

let layout = [];
let countTryLayout = 0;

function makeLayout(){
    buildTiles();
    layout = layoutModel.map(element => ({...element , retiree: false}));

    while(layout.some(slot => !slot.retiree)){
        let slotFree = layout.filter(slot => !slot.retiree && check(slot));
        if(slotFree.length < 2){
            countTryLayout++;
            if(countTryLayout <= 50) return makeLayout();
            return false;
        }

        // Sélectionner 2 cases libres et accessibles
        if(slotFree.length < 2) {
            countTryLayout ++;
            if(countTryLayout <= 50) makeLayout();
            return;
        }

        let slot1 = slotFree.splice(Math.floor(Math.random()*slotFree.length) , 1)[0];
        let slot2 = slotFree[Math.floor(Math.random()*slotFree.length)];

        // Sélectionner 2 tuiles
        let tile1;
        let tile2;
        tile1 = Math.floor(Math.random()*tiles.length);
        do{
            tile2 = Math.floor(Math.random()*tiles.length);
        }while(tile1 === tile2 || tiles[tile1].pair != tiles[tile2].pair);

        // Ajouter ces tuiles dans les emplacements
        slot1.type = tiles[tile1].type;
        slot2.type = tiles[tile2].type;
        slot1.pair = tiles[tile1].pair;
        slot2.pair = tiles[tile2].pair;
        slot1.retiree = true;
        slot2.retiree = true;

        tiles.splice(Math.max(tile1 , tile2) , 1);
        tiles.splice(Math.min(tile1 , tile2) , 1);
    }
    layout.forEach(element => {
        element.retiree = false;
    });
    return true;
}

function drawLayout(){
    ctx.clearRect(0,0,canvas.width , canvas.height);
    for(let i = 0; i <= zMax ; i++){
        layout.forEach(element => {
            if(element.z === i && !element.retiree){
                const p = tilePosition(element);
                tileX = p.x;
                tileY = p.y;

                // Tuile
                ctx.fillStyle = 'BlanchedAlmond';
                ctx.strokeStyle = 'DarkSalmon';
                ctx.lineWidth = 2;

                ctx.beginPath();
                ctx.roundRect(tileX , tileY , tileWidth , tileHeight , 5);
                ctx.fill();
                ctx.stroke();
                
                if(check(element)){
                    ctx.fillStyle = 'Cornsilk';
                    ctx.strokeStyle = 'DarkSalmon';
                    ctx.lineWidth = 2;      
                    ctx.beginPath();
                    ctx.roundRect(tileX , tileY , tileWidth , tileHeight , 5);
                    ctx.fill();
                    ctx.stroke();
                }

                drawTiles(element.type);
            }
        });
    }
    if(tileHovered != null){
        const p = tilePosition(tileHovered);
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 3;
        ctx.strokeRect(p.x , p.y , tileWidth , tileHeight);
    }
    if(tileClicked != null){
        const p = tilePosition(tileClicked);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 3;
        ctx.strokeRect(p.x , p.y , tileWidth , tileHeight);

    }
}

function checkLeft(tileA , tileB){
    if(tileB.retiree) return false;
    if(tileA.z === tileB.z && Math.abs(tileA.y - tileB.y) <= 1){
        if(tileA.x - tileB.x === 2) return true;
    }
    return false;
}
function checkRight(tileA , tileB){
    if(tileB.retiree) return false;
    if(tileA.z === tileB.z && Math.abs(tileA.y - tileB.y) <= 1){
        if(tileB.x - tileA.x === 2) return true;
    }
    return false;
}
function checkTop(tileA , tileB){
    if(tileB.retiree) return false;
    if(tileA.z < tileB.z){
        if(Math.abs(tileA.x - tileB.x) <= 1 && Math.abs(tileA.y - tileB.y) <= 1) return true;
    }
    return false;
}
function check(tile){
    const lockTop = layout.some(element => checkTop(tile , element));
    const lockLeft = layout.some(element => checkLeft(tile , element));
    const lockRight = layout.some(element => checkRight(tile , element));

    const lockSide = lockRight && lockLeft;

    return !lockTop && !lockSide;
}

// Position (en pixels) du coin haut-gauche d'une tuile
function tilePosition(tile){
    return {
        x: tile.x * (tileWidth / 2) - (tile.z * 4) + 40,
        y: tile.y * (tileHeight / 2) - (tile.z * 4) + 40
    };
}

// Renvoie la tuile visible sous la souris, ou null s'il n'y en a pas
function findTileAt(mouseX , mouseY){
    let found = null;
    layout.forEach(tile => {
        if(tile.retiree) return;

        const p = tilePosition(tile);
        const inside = mouseX >= p.x && mouseX < p.x + tileWidth
                    && mouseY >= p.y && mouseY < p.y + tileHeight;
        if(inside && (found === null || tile.z > found.z)) found = tile;
    });
    return found;
}

// Jeu
    let zMax = 0;
    let tileHovered = null;
    let tileClicked = null;
    let layoutModel = [];
    let difficulteActu;

function startGame(niveau){
    layoutModel = [];
    switch(niveau){
        case 1:
            layoutModel = layoutEasy.map(element => ({...element}));
            canvas.width = 390;
            canvas.height = 360;
            difficulteActu = 1;
            break;
        case 2:
            layoutModel = layoutMedium.map(element => ({...element}));
            canvas.width = 490;
            canvas.height = 500;
            difficulteActu = 2;
            break;
        case 3:
            layoutModel = layoutDifficult.map(element => ({...element}));
            canvas.width = 830;
            canvas.height = 640;
            difficulteActu = 3;
    }
    endMesage.innerText = '';
    tileHovered = null;
    tileClicked = null;
    countTryLayout = 0;
    makeLayout();

    zMax = 0;
    layout.forEach(element => {
        if(element.z > zMax) zMax = element.z;
    });

    drawLayout();
}
startGame(1);


// Event
canvas.addEventListener('mousemove' , (e) => {
    let tile = findTileAt(e.offsetX , e.offsetY);
    if(tile !== null && !check(tile)) tile = null;   // vide ou tuile non jouable : pas de survol

    if(tile === tileHovered) return;                 // rien n'a changé : pas de redessin
    tileHovered = tile;
    drawLayout();                                    // le contour disparaît si tileHovered vaut null
});

canvas.addEventListener('mouseleave' , () => {
    tileHovered = null;
    drawLayout();
});

canvas.addEventListener('click' , (e) => {
    let tile = findTileAt(e.offsetX , e.offsetY);
    if(tile !== null && !check(tile)) tile = null;  
    if(tile == null){
        tileClicked = null;
        drawLayout();
        nomTuile.innerText = '';
        return;
    }
    if(tile === tileClicked) {
        tileClicked = null;
        drawLayout();
        nomTuile.innerText = '';
        return;
    }     
    if(tileClicked != null && tileClicked.pair === tile.pair){
        tileClicked.retiree = true;
        tile.retiree = true;
        tileClicked = null;
        tileHovered = null;
        drawLayout();
        nomTuile.innerText = '';

        if(layout.every(t => t.retiree)){
            endMesage.innerText = 'Gagné !';
        }else if(!hasMove()){
            endMesage.innerText = 'Perdu !';
        }        return;
    }            
    tileClicked = tile;
    drawLayout();
    nomTuile.innerText = tile.type;
});

function hasMove(){
    const free = layout.filter(t => !t.retiree && check(t));
    const seen = new Set();
    for(const t of free){
        if(seen.has(t.pair)) return true;     // deux tuiles libres de même paire
        seen.add(t.pair);
    }
    return false;
}

rejouer.addEventListener('click', () => {
    startGame(difficulteActu);
});

difficulte.addEventListener('change' , (e) => {
    const niveau = Number(e.target.value);
    startGame(niveau);
});