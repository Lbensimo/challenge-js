function letterSpaceNumber(str) {
    const reg = /[a-zA-Z] [0-9]([^a-zA-Z0-9]|$)/g;
    let tab = str.match(reg);
    if (tab == null) {return [];}
    for (let i = 0; i < tab.length; i++) {
        tab[i] = tab[i].slice(0, 3);
    }
    return tab;
}