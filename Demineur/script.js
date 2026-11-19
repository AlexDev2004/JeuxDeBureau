const tableau = document.querySelector('section');
const difficulte = document.querySelector('select');
const endMessage = document.querySelector('h2');
const rejouer = document.querySelector('button');

let nombreCase = 9;

const tailleCase = 40;

let finPartie = false;
let loose = false;
let win = false;


const mineSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50"><g fill="#000" stroke="#000" stroke-linecap="round"><line x1="50" y1="16" x2="50" y2="84" stroke-width="8"/><line x1="16" y1="50" x2="84" y2="50" stroke-width="8"/><line x1="26" y1="26" x2="74" y2="74" stroke-width="8"/><line x1="74" y1="26" x2="26" y2="74" stroke-width="8"/><circle cx="50" cy="50" r="26" stroke="none"/></g></svg>' ;   
const flagSvg = '<svg class="flag" style="display: flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect x="48" y="8" width="6" height="64" fill="#000"/><polygon points="51,8 14,31 51,54" fill="#e00000"/></svg>' ;

const couleurs = ['','blue' , 'green' , 'red' , 'purple' , 'brown' , 'teal' , 'black' , 'gray'];


function game(){
    let count = 0;

    const nombreMines = Math.floor(nombreCase * nombreCase * 0.15);

    const espacement = (nombreCase * 5) + 5;

    const tailleTableau = (nombreCase * tailleCase) + espacement;

    tableau.style.width = tailleTableau + 'px';
    tableau.style.height = tailleTableau + 'px';
    tableau.style.gridTemplateColumns = `repeat(${nombreCase} , 1fr)`;
    tableau.style.gridTemplateRows = `repeat(${nombreCase} , 1fr)`;

    tableau.replaceChildren();
    for(let i=0 ; i<nombreCase*nombreCase ; i++){
        const slot = document.createElement('div');
        slot.setAttribute('data-mine' , 'null');
        tableau.appendChild(slot);
    }

    const slots = tableau.querySelectorAll('div');
    const slotTab = Array.from(slots);

    // ------------ Aouter les mines aléatoirement ------------------------

    const nombres = new Set();

    while(nombres.size < nombreMines){
        nombres.add(Math.floor(Math.random()*slotTab.length));
    }

    

    const minPos = [...nombres];


    minPos.forEach(mine => {
        slots[mine].setAttribute('data-mine' , 'mine');
        
        slots[mine].innerHTML = mineSvg;
    });

    // ---------- Récupérer les cases alentours ---------------
    function selectSlotsAround(caseIndex){
        let casesCote = [];

        if(caseIndex % nombreCase === 0){
            casesCote.push(
                caseIndex - nombreCase, 
                caseIndex - (nombreCase - 1),
                caseIndex + 1,
                caseIndex + nombreCase,
                caseIndex + (nombreCase + 1)
            );
        }else if((caseIndex + 1) % nombreCase === 0){
            casesCote.push(
                caseIndex - nombreCase, 
                caseIndex - (nombreCase + 1),
                caseIndex - 1,
                caseIndex + nombreCase,
                caseIndex + (nombreCase - 1)
            );
        }else{
            casesCote.push(
                caseIndex - nombreCase, 
                caseIndex - (nombreCase + 1),
                caseIndex - (nombreCase - 1),
                caseIndex + 1,
                caseIndex - 1,
                caseIndex + nombreCase,
                caseIndex + (nombreCase - 1),
                caseIndex + (nombreCase + 1),
            );
        }

        let casesCoteFinal = [];
        casesCote.forEach(element => {
            if(element >= 0 && element < slotTab.length){
                casesCoteFinal.push(element);
            }
        });
        return casesCoteFinal;
    }

    // ------------ Afficher le nombre de mines adjascentes ------------------

    slotTab.forEach((element , i) => {
        const casesCote = selectSlotsAround(i);

        let nbBombes = 0;
        casesCote.forEach(element => {
            if(slots[element].getAttribute('data-mine') == 'mine'){
                nbBombes ++;
            }
        });

        if(nbBombes != 0 && element.getAttribute('data-mine') != 'mine'){
            element.setAttribute('data-mine' , 'number');
        }

        const nbBombeP = document.createElement('p');
        nbBombeP.innerText = nbBombes

        nbBombeP.style.color = couleurs[nbBombes];

        if(element.getAttribute('data-mine') === 'number') element.appendChild(nbBombeP);
    });
    
    function showAround(caseIndex){
        const slot = slots[caseIndex];
        if(slot.classList.contains('clicked') || slot.classList.contains('flagOn')) return;

        slot.classList.add('clicked');
        count ++;

        if(slot.getAttribute('data-mine') === 'number') return;

        selectSlotsAround(caseIndex).forEach(showAround);
    }

    function showMine(){
        slotTab.forEach(element => {
            if(element.getAttribute('data-mine') === 'mine'){
                element.classList.add('mineClicked');
            }
            if(element.classList.contains('flagOn')) {
                element.classList.remove('flagOn');
                element.querySelector('.flag').remove();
            }
        });
    }

    slotTab.forEach((slot , i) => {
        slot.addEventListener('click' , () => {
            if(slot.classList.contains('flagOn') || slot.classList.contains('clicked')) return;
            if(finPartie) return;

            if(slot.getAttribute('data-mine') === 'mine'){
                slot.style.backgroundColor = 'red';
                showMine();
                finPartie = true;
                loose = true;
                endMessage.innerText = 'Perdu !';
            }else{
                showAround(i);

                // ----------- Victoire ----------------------------
                if(count === ((nombreCase * nombreCase) - nombreMines)) {
                    finPartie = true;
                    win = true;
                    endMessage.innerText = 'Gagné !';
                }
            }
        });

        slot.addEventListener('contextmenu' , (e) => {
            e.preventDefault();
            if(finPartie) return;
            if(slot.classList.contains('clicked') || slot.classList.contains('mineClicked')) return;

            if(slot.classList.contains('flagOn')){
                slot.querySelector('.flag').remove();
                slot.classList.remove('flagOn');
            }else{
                slot.insertAdjacentHTML('beforeend', flagSvg);
                slot.classList.add('flagOn');
            }
        });
    });
}

function restart(){
    finPartie = false;
    win = false;
    loose = false;
    endMessage.innerText = '';
    game();
}

function startGame(){
    game();

    difficulte.addEventListener('change' , (e) =>{
        nombreCase = parseInt(e.target.value);
        restart();
    });

    rejouer.addEventListener('click' , () => {
        restart();
    })
}

startGame();

document.addEventListener('contextmenu' , (e) => {
    e.preventDefault();
});