const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const rejouer = document.querySelector('button');
const difficulte = document.querySelector('select');
const endMessage = document.querySelector('h2');
const texte = document.querySelector('p');

let score;

let loop = null;
function stopLoop(){
    clearInterval(loop);
}

function game(vitesse){

    // ---------- DESSINER LA GRILLE ------------------------
    function drawGrid(){
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 0.3;
        const gridPos = {x: 0 , y: 0}

        for(let i = 0; i < 19; i++){
            ctx.beginPath();
            ctx.moveTo(gridPos.x,gridPos.y + 30);
            ctx.lineTo(gridPos.x + 600 , gridPos.y + 30);
            ctx.stroke();

            gridPos.y += 30;
        }

        gridPos.y = 0;

        for(let i = 0; i < 19; i++){
            ctx.beginPath();
            ctx.moveTo(gridPos.x + 30 ,gridPos.y);
            ctx.lineTo(gridPos.x + 30 , gridPos.y + 600);
            ctx.stroke();

            gridPos.x += 30;
        }

    }

    // ------ DESSINER LE SERPENT ------------------------------
    function drawSnake(snake){
        let snakePos = [];
        snake.forEach(element => {
            let x = (element.x * 30);
            let y = (element.y * 30);
            snakePos.push({x,y});
        });

        ctx.fillStyle = 'purple';
        ctx.strokeStyle = 'indigo';
        ctx.lineWidth = 2;

        snakePos.forEach(element => {
            ctx.beginPath();
            ctx.roundRect(element.x , element.y , 30 , 30 , 5);
            ctx.fill();
            ctx.stroke();
        });

        // Dessin de la tête
        ctx.fillStyle = 'indigo';
        ctx.strokeStyle = 'black';

        ctx.beginPath();
        ctx.roundRect(snakePos[0].x , snakePos[0].y , 30 , 30 , 5);
        ctx.fill();
        ctx.stroke();

    }

    function drawApple(apple){
        let applePos = {
            x: (apple.x * 30) + 15,
            y: (apple.y * 30) + 15
        }

        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'firebrick';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(applePos.x , applePos.y , 12 , 0 , Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }

    let serpent, direction, pomme;


    function initGame(vitesse){
        serpent = [{x:5,y:10} , {x:4,y:10} , {x:3,y:10} , {x:2,y:10}];
        direction = {x:1 , y:0};
        pomme = {x:15 , y:10};

        startLoop(vitesse);
    }
    initGame(vitesse);

    function startLoop(vitesse){
        clearInterval(loop);
        loop = setInterval(tick , vitesse);
    }

    function collisionQueue(tetePos){
        let result = false;
        // On compare avec la queue
        serpent.forEach(element => {
            if((element.x === tetePos.x) && (element.y === tetePos.y)) result = true;
        });
        return result;
    }
    function collisionMur(tetePos){
        let result = false;
        // On compare avec les murs
        if(tetePos.x < 0 || tetePos.x > 19 || tetePos.y < 0 || tetePos.y > 19) result =  true;
        return result;
    }
    function collisionPomme(tetePos){
        let result = false;
        // On compare avec la pomme
        if(tetePos.x === pomme.x && tetePos.y === pomme.y) return true;
        return result;
    }

    function replaceApple(){
        let x , y;
        do{
            x = Math.floor(Math.random()*20);
            y = Math.floor(Math.random()*20);
        }while(serpent.some(s => s.x === x && s.y === y));


        pomme.x = x;
        pomme.y = y;
    }


    function tick(){
        texte.innerText = 'Score : ' + score;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid();
        drawApple(pomme);

        const tete = serpent[0];
        const nouvelleTeteX = tete.x + direction.x;
        const nouvelleTeteY = tete.y + direction.y;
        const nouvelleTete = {x: nouvelleTeteX , y: nouvelleTeteY}

        let collisionPommeBool = collisionPomme(nouvelleTete);

        let collisionQueueBool = collisionQueue(nouvelleTete);
        let collisionMurBool = collisionMur(nouvelleTete);

        serpent.unshift(nouvelleTete);

        if(collisionPommeBool){
            replaceApple();
            score ++;
        }else{
            serpent.pop();
        }

        drawSnake(serpent);

        if(collisionQueueBool || collisionMurBool){
            stopLoop();
            endMessage.innerText = 'Perdu !';
        } 
    }

    // Verifier les input de fleches
    document.addEventListener('keydown' , (e) => {
        switch(e.key){
            case 'ArrowUp':
                if(direction.y === 0) direction = {x: 0 , y: -1};
                break;
            case 'ArrowDown':
                if(direction.y === 0) direction = {x: 0 , y: 1};
                break;
            case 'ArrowLeft':
                if(direction.x === 0) direction = {x: -1 , y: 0};
                break;
            case 'ArrowRight':
                if(direction.x === 0) direction = {x: 1 , y: 0};
                break;
            default:
                break;
        }
    });
}

function restart(niveau){
    stopLoop();
    
    endMessage.innerText = '';

    score = 0;

    switch(niveau){
        case 'facile':
            game(150);
            break;
        case 'moyen':
            game(100);
            break;
        case 'difficile':
            game(80);
            break;
        default:
            game(150);
    }
}

function startGame(){
    score = 0;

    game(150);

    difficulte.addEventListener('change' , (e) => {
        const niveau = e.target.value;  
        restart(niveau); 
    });

    rejouer.addEventListener('click' , () => {
        const niveau = difficulte.value;
        restart(niveau);
    });
}

startGame();
