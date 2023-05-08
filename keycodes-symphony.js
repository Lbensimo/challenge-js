export function compose() {
    const body = document.querySelector('body');
    const lettr = [];
    const color = [];

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace') {deleteLastDiv();} else if (event.key === 'Escape') {document.body.innerHTML = '';}
    });
    document.addEventListener('keypress', (event) => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        let i = 0
        noteDiv.textContent = event.key;
        console.log(event.key);
        if (event.key == " ") {noteDiv.style.backgroundColor = "#F0E68C";body.appendChild(noteDiv);}
        if (event.key < 'a' || event.key > 'z') {return;}
        for (; i < lettr.length; i++) {if (lettr[i] == event.key) {noteDiv.style.backgroundColor = color[i];break;}}
        if (i >= lettr.length) {
            lettr.push(event.key);
            color.push(getRandomColor());
            noteDiv.style.backgroundColor = color[color.length - 1];
        }    
        body.appendChild(noteDiv);
      });
}

function deleteLastDiv() {
    const parent = document.querySelector("body");
    const lastDiv = parent.lastChild;
    parent.removeChild(lastDiv);
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}