const liste = document.querySelector('ul');
const canvas = document.querySelector('canvas');
const clavier = document.querySelector('section');
const difficulte = document.querySelector('select');
const rejouer = document.querySelector('button');
const endMessage = document.querySelector('h2');
const ctx = canvas.getContext('2d');

function game(tableau){
    // Initialisations ---------------------------------------------
    liste.replaceChildren();
    clavier.replaceChildren();

    const lettres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i = 0; i < lettres.length; i++){
        const lettre = document.createElement('div');
        lettre.innerText = lettres[i];
        clavier.appendChild(lettre);
    }

    let lettresValides = [];
    let lettresFails = [];

    let finPartie = false;
    let win = false;
    let loose = false;

    // Sélection du mot -------------------------------------------
    const mot = tableau[Math.floor(Math.random() * tableau.length)];
    console.log(mot);

    // Affichage des emplacements des lettres cachées -------------
    
    for(let i = 0; i < mot.length; i++){
        const lettre = document.createElement('li');
        lettre.innerText = '_';
        liste.appendChild(lettre);
    }

    // Récupérer ces lettres du clavier ------------------------------------
    const lettresDivList = document.querySelectorAll('div');
    const lettreDivTab = Array.from(lettresDivList);

    // Récupérer les emplacement de lettres du mot -------------------------------
    const motSlotList = document.querySelectorAll('li');

    // Clic sur les lettres -------------------------------------
    lettreDivTab.forEach(lettreDiv => {
        lettreDiv.addEventListener('click', () => {
            if(lettreDiv.classList.contains('valide') || lettreDiv.classList.contains('fail')) return;
            if(finPartie) return;

            const lettre = lettreDiv.textContent;
            
            if(mot.includes(lettre)){ /* Valide */
                lettreDiv.classList.add('valide');
                
                for(let i = 0; i < mot.length; i++){
                    if(mot[i] === lettre){
                        motSlotList[i].innerText = lettre;
                        lettresValides.push(lettre);
                    }
                }

                if(lettresValides.length === mot.length) {
                    endMessage.innerText = 'Gagné !';
                    finPartie = true;
                    win = true;
                }

            }else{ /* Fail */
                lettresFails.push(lettre);
                lettreDiv.classList.add('fail');

                draw(lettresFails.length);

                if(lettresFails.length === 8) {
                    endMessage.innerText = 'Perdu !';
                    finPartie = true;
                    loose = true;

                    for(let i = 0; i < mot.length; i++){
                        motSlotList[i].innerText = mot[i];
                    }
                }
            }
        });
    });
}

function restart(niveau){
    draw(0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    endMessage.innerText = '';

    switch(niveau){
        case 'facile':
            game(motsFacile);
            break;
        case 'moyen':
            game(motsMoyen);
            break;
        case 'difficile':
            game(motsDifficile);
            break;
        default:
            game(motsFacile);
    }
}

function startGame(){

    game(motsFacile);

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


//  ---------------- Dessin ----------------------------

function draw(erreur){
    const centreX = canvas.width / 2;
    const centreY = canvas.height / 2;
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    
    if(erreur === 0) return;

    if(erreur === 1){
        // Base
        ctx.beginPath();
        ctx.moveTo(centreX - 100 , centreY + 175);
        ctx.lineTo(centreX + 100 , centreY + 175);
        ctx.stroke();

        // Mât
        ctx.beginPath();
        ctx.moveTo(centreX - 50 , centreY + 175);
        ctx.lineTo(centreX - 50 , centreY - 175);
        ctx.stroke();
    } 

    if(erreur === 2){
        // Haut
        ctx.beginPath();
        ctx.moveTo(centreX - 50 , centreY - 175);
        ctx.lineTo(centreX + 75 , centreY - 175);
        ctx.stroke();

        // Corde
        ctx.moveTo(centreX + 75 , centreY - 175);
        ctx.lineTo(centreX + 75 , centreY - 125);
        ctx.stroke();
    }

    if(erreur === 3){
        // Tête
        ctx.beginPath();
        ctx.arc(centreX + 75 , centreY - 100 , 25 , 0 , Math.PI * 2);
        ctx.stroke();
    }

    if(erreur === 4){
        ctx.beginPath();
        ctx.moveTo(centreX + 75 , centreY - 75);
        ctx.lineTo(centreX + 75 , centreY + 25);
        ctx.stroke();
    }

    if(erreur === 5){
        ctx.beginPath();
        ctx.moveTo(centreX + 75 , centreY - 50);
        ctx.lineTo(centreX + 25 , centreY);
        ctx.stroke();
    }
    
    if(erreur === 6){        
        ctx.beginPath();
        ctx.moveTo(centreX + 75 , centreY - 50);
        ctx.lineTo(centreX + 125 , centreY);
        ctx.stroke();
    }

    if(erreur === 7){
        ctx.beginPath();
        ctx.moveTo(centreX + 75 , centreY + 25);
        ctx.lineTo(centreX + 25 , centreY + 100);
        ctx.stroke();
    }

    if(erreur === 8){
        ctx.beginPath();
        ctx.moveTo(centreX + 75 , centreY + 25);
        ctx.lineTo(centreX + 125 , centreY + 100);
        ctx.stroke();
    }
}