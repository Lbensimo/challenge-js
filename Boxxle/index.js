/**
* You wan modify thes constants as you want or get rid of it, your choice
* */ 

import { compteur, generator } from './map-generator.js';

const GRID_WIDTH = 50;
const GRID_HEIGHT = 25;
const fps = 10
const keys = {
     37: 'left',
     39: 'right',
     38: 'up',
     40: 'down'
}
 
const gameLoop = () => {
  // Si aucun tableau n'est bon on quitte
  let x = 0;
  let compteur_pas = 0;
  if (x > compteur()) {return;}
  
  // On génère le tableau 0
  generator(x);

  // Bouton reset
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    compteur_pas = 0;
    generator(x);
  });

  // Event de touche fléchée (principal)
  const handleKeyDown = (event) => {
    // On récup la direction
    const direction = keys[event.keyCode];
    if (direction) {
      // On récup le joueur
      const greenBox = document.querySelector('.valeur-3');
      const currentColumn = parseInt(greenBox.style.gridColumnStart);
      const currentRow = parseInt(greenBox.style.gridRowStart);
  
      // Et ici la case sur laquelle le joueur doit se déplacer
      let targetColumn = currentColumn;
      let targetRow = currentRow;
      if (direction === 'left') {
        targetColumn = currentColumn - 1;
      } else if (direction === 'right') {
        targetColumn = currentColumn + 1;
      } else if (direction === 'up') {
        targetRow = currentRow - 1;
      } else if (direction === 'down') {
        targetRow = currentRow + 1;
      }
  
      // On vérifie que la case n'est pas un mur
      const targetBoxes = document.querySelectorAll(`[style="grid-column-start: ${targetColumn}; grid-row-start: ${targetRow};"]`);
      const targetBoxRed = Array.from(targetBoxes).find(box => box.classList.contains('valeur-2')) || Array.from(targetBoxes).find(box => box.classList.contains('valeur-5'));
      const targetBox = targetBoxRed || targetBoxes.item(0);
      if (targetBox && targetBox.classList.contains('valeur-1')) {
        // BRUIT : FRACASSE
        son_collision()
        // Là c'est gris donc on ne fait rien
        return;
      }

      // On vérifie si c'est une box
      const targetBoxIsRed = targetBox && targetBox.classList.contains('valeur-2');
      if (targetBoxIsRed) {
        // On récup la case où la box doit se déplacer
        let newTargetColumn = targetColumn;
        let newTargetRow = targetRow;
        if (direction === 'left') {
          newTargetColumn = targetColumn - 1;
        } else if (direction === 'right') {
          newTargetColumn = targetColumn + 1;
        } else if (direction === 'up') {
          newTargetRow = targetRow - 1;
        } else if (direction === 'down') {
          newTargetRow = targetRow + 1;
        }
  
        // Pareil, on vérifie que la destination de la box n'est pas un mur ou une autre box
        const newTargetBoxes = document.querySelectorAll(`[style="grid-column-start: ${newTargetColumn}; grid-row-start: ${newTargetRow};"]`);
        const newTargetBoxRed = Array.from(newTargetBoxes).find(box => box.classList.contains('valeur-2')) || Array.from(newTargetBoxes).find(box => box.classList.contains('valeur-5'));
        const newTargetBox = newTargetBoxRed || newTargetBoxes.item(0);
        if (newTargetBox && newTargetBox.classList.contains('valeur-1') || newTargetBox && newTargetBox.classList.contains('valeur-2')) {
          // C'est un mur ou une box, on ne fait rien
          son_collision();
          // FRACASSE
          return;
        } else if (newTargetBox && newTargetBox.classList.contains('valeur-4')) {
          // 8 BITS
          son_bonne_case()
          targetBox.classList.add('valeur-5');
        } else {
          targetBox.classList.remove('valeur-5');
        }

        // Déplacement de la case rouge
        // DEPLACEMENT
        son_pousser()
        targetBox.style.gridColumnStart = Math.max(1, Math.min(GRID_WIDTH, newTargetColumn));
        targetBox.style.gridRowStart = Math.max(1, Math.min(GRID_HEIGHT, newTargetRow));
      }
  
      // Déplacement de la case verte
      // SON DE PAS
      son_pas();
      compteur_pas++;
      console.log(compteur_pas);
      greenBox.style.gridColumnStart = Math.max(1, Math.min(GRID_WIDTH, targetColumn));
      greenBox.style.gridRowStart = Math.max(1, Math.min(GRID_HEIGHT, targetRow));
      
      // On vérifie l'état de crackitude du joueur
      if (verif()) {
        x++;
        if (x <= compteur()) {
          // Si le joueur est un crack on passe au niveau d'après
          // ZELDA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          generator(x);
          compteur_pas = 0;
          son_victoire();
        } else {
          // Il n'y a plus de niveau car les suivants sont faux ou qu'il n'y a pas de suivant
          // Le jeu est fini, bravo
          // ZELDA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          son_victoire();
          return;
        }

      }
    }
  };
  
  window.addEventListener('keydown', handleKeyDown);

  // Boucle de jeu
  const animate = () => {
    // Code pour mettre à jour l'état du jeu
    window.requestAnimationFrame(animate);
  };
  animate(x);
};
function son_pousser(){
    let pousser_audio = new Audio('/Pousser.mp3')
    pousser_audio.play()
    return
}
function son_bonne_case(){
  let bonne_case = new Audio('/bonne_case.mp3')
  bonne_case.play()
  return
}
function son_collision(){
  let collision = new Audio('/Collision.mp3')
  collision.play()
  return
}

function son_victoire(){
  let victoire = new Audio('/Victoire.mp3')
  victoire.play()
  return victoire.play
}

function son_pas(){
  let pas = new Audio('/Step.mp3')
  pas.play()
  return
}

// Fonction de vérification de victoire
function verif() {
  // Si toutes les box ont la classe 'valeur-5' donc qu'elles sont bien placées...
  const allValeur2HaveValeur5 = Array.from(document.querySelectorAll('.valeur-2'))
  .every(element => element.classList.contains('valeur-5'));
  // On return true
  if (allValeur2HaveValeur5) {
    return true
  }
  return false;
}
gameLoop();