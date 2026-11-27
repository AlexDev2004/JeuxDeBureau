const statScreen = document.querySelector('#stat');
let ctx = statScreen.getContext('2d');

// Dessin des briques d'exemples
let y = 1;
// I
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.roundRect(30,y*30,120,30,3);
ctx.stroke();

ctx.fillStyle = 'red';
ctx.strokeStyle = 'darkRed';
ctx.lineWidth = 2;
for(let i = 1 ; i < 5 ; i++){
    ctx.beginPath();
    ctx.roundRect(i*30,y*30,30,30,3);
    ctx.fill();
    ctx.stroke();
}
y += 2;
// O

ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.roundRect(30,y*30,60,60,3);
ctx.stroke();

ctx.fillStyle = 'blue';
ctx.strokeStyle = 'DarkBlue';
ctx.lineWidth = 2;
for(let i = 1 ; i < 3 ; i++){
    for(let j = y ; j < y+2 ; j++){
        ctx.beginPath();
        ctx.roundRect(i*30,j*30,30,30,3);
        ctx.fill();
        ctx.stroke();
    }
}
y += 3;
// T
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.roundRect(30,y*30,90,30,3);
ctx.stroke();
ctx.beginPath();
ctx.roundRect(60,(y+1)*30,30,30,3);
ctx.stroke();

ctx.fillStyle = 'limeGreen';
ctx.strokeStyle = 'green';
ctx.lineWidth = 2;
for(let i = 1 ; i < 4 ; i++){
    ctx.beginPath();
    ctx.roundRect(i*30,y*30,30,30,3);
    ctx.fill();
    ctx.stroke();
}
ctx.beginPath();
ctx.roundRect(60,(y+1)*30,30,30,3);
ctx.fill();
ctx.stroke();
y+=3;

// L
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.roundRect(30,y*30,30,30,3);
ctx.stroke();
ctx.beginPath();
ctx.roundRect(30,(y+1)*30,90,30,3);
ctx.stroke();

ctx.fillStyle = 'gold';
ctx.strokeStyle = 'goldenRod';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.roundRect(30,y*30,30,30,3);
ctx.fill();
ctx.stroke();
for(let i = 1 ; i < 4 ; i++){
    ctx.beginPath();
    ctx.roundRect(i*30,(y+1)*30,30,30,3);
    ctx.fill();
    ctx.stroke();
}
y+=3;

// S
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.roundRect(30,y*30,60,30,3);
ctx.stroke();
ctx.beginPath();
ctx.roundRect(60,(y+1)*30,60,30,3);
ctx.stroke();

ctx.fillStyle = 'darkViolet';
ctx.strokeStyle = 'indigo';
ctx.lineWidth = 2;
for(let i = 1 ; i < 3 ; i++){
    ctx.beginPath();
    ctx.roundRect(i*30,y*30,30,30,3);
    ctx.fill();
    ctx.stroke();
}
y++;
for(let i = 2 ; i < 4 ; i++){
    ctx.beginPath();
    ctx.roundRect(i*30,y*30,30,30,3);
    ctx.fill();
    ctx.stroke();
}
y+=2;
// J
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.roundRect(90,y*30,30,30,3);
ctx.stroke();
ctx.beginPath();
ctx.roundRect(30,(y+1)*30,90,30,3);
ctx.stroke();

ctx.fillStyle = 'PaleVioletRed';
ctx.strokeStyle = 'MediumVioletRed';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.roundRect(90,y*30,30,30,3);
ctx.fill();
ctx.stroke();
for(let i = 1 ; i < 4 ; i++){
    ctx.beginPath();
    ctx.roundRect(i*30,(y+1)*30,30,30,3);
    ctx.fill();
    ctx.stroke();
}
y+=3;
// Z
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.roundRect(60,y*30,60,30,3);
ctx.stroke();
ctx.beginPath();
ctx.roundRect(30,(y+1)*30,60,30,3);
ctx.stroke();

ctx.fillStyle = 'turquoise';
ctx.strokeStyle = 'teal';
ctx.lineWidth = 2;
for(let i = 2 ; i < 4 ; i++){
    ctx.beginPath();
    ctx.roundRect(i*30,y*30,30,30,3);
    ctx.fill();
    ctx.stroke();
}
y++;
for(let i = 1 ; i < 3 ; i++){
    ctx.beginPath();
    ctx.roundRect(i*30,y*30,30,30,3);
    ctx.fill();
    ctx.stroke();
}
