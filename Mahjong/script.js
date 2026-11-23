const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const tileWidth = 50;
const tileHeight = 70;
let tileX = 0;
let tileY = 0;

const layout = [
    // étage 0 : une rangée de 4 tuiles
    {x: 0, y: 0, z: 0, type: 'circleOne'},
    {x: 2, y: 0, z: 0, type: 'circleTwo'},
    {x: 4, y: 0, z: 0, type: 'bambooOne'},
    {x: 6, y: 0, z: 0, type: 'bambooTwo'},
    // étage 1 : deux tuiles posées à cheval
    {x: 1, y: 0, z: 1, type: 'characterOne'},
    {x: 5, y: 0, z: 1, type: 'windEast'}
];

let zMax = 0;
layout.forEach(element => {
    if(element.z > zMax) zMax = element.z;
});

function drawLayout(){
    ctx.clearRect(0,0,canvas.width , canvas.height);
    for(let i = 0; i <= zMax ; i++){
        layout.forEach(element => {
            if(element.z === i && !element.retiree){
                tileX = element.x * (tileWidth / 2) - (element.z*4) + 10;
                tileY = element.y * (tileHeight / 2) - (element.z*4) + 10;
                drawTiles(element.type);
            }
        });
    }
}
drawLayout();

function check(tile){
    let result;
    
}