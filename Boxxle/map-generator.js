import { Levels } from "./level.js";

// Génère le html avec le tableau
export function generator(index) {
    // On récupère gameboard
    const gameboard = document.getElementById("gameboard");
    const divs = gameboard.querySelectorAll('div');
    
    // On supprime toutes ses anciennes valeurs
    divs.forEach((div) => {
        div.remove();
    });

    // On le remplis via un algorithme d'une rare beauté ^^
    for (let i = 0; i < Levels[index].length; i++) {
      for (let j = 0; j < Levels[index][i].length; j++) {
        const value = Levels[index][i][j];
        if (value !== 0) {
          const div = document.createElement("div");
          div.classList.add(`valeur-${value}`);
          div.style.gridColumnStart = i + 1;
          div.style.gridRowStart = j + 1;
          gameboard.appendChild(div);
        }
      }
    }
}

// Compte le nombre de tableaux corrects avant le PREMIER mauvais (peu importe les suivants)
export function compteur()  {
    let deuxEgale4 = false;
    let chiffreTrois = false;
    let deuxEtQuatrePresent = false;
    let bon_tableaux = 0;
    let i = 0
  
    for (; i < Levels.length; i++) {
        deuxEgale4 = false;
        chiffreTrois = false;
        deuxEtQuatrePresent = false;
        bon_tableaux = 0;
        const level = Levels[i];
        let nbDeux = 0;
        let nbQuatre = 0;
        let aChiffreTrois = false;
        let trop = false
    
        for (let j = 0; j < level.length; j++) {
            const row = level[j];
            for (let k = 0; k < row.length; k++) {
            const cell = row[k];
    
                if (cell === 2) {
                    nbDeux++;
                } else if (cell === 4) {
                    nbQuatre++;
                } else if (cell === 3) {
                    if (aChiffreTrois == true) {
                        trop = true;
                    }else{
                        aChiffreTrois = true;
                    }
                }
            }
        }
  
        if (nbDeux === nbQuatre) {
            deuxEgale4 = true;
        }
    
        if (aChiffreTrois == true) {
            if (trop == true) {
                chiffreTrois = false;
            } else{
                chiffreTrois = true;
            }
        }
    
        if (nbDeux > 0 && nbQuatre > 0) {
            deuxEtQuatrePresent = true;
        }
        if (deuxEgale4 == false || chiffreTrois == false || deuxEtQuatrePresent == false ) {
            bon_tableaux = i -1
            return bon_tableaux;
        }
    }
    return i;
};
