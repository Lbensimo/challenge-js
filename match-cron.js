function matchCron(str, date) {
    let tab = str.split(' ');
    
    let minute = date.getMinutes();
    let heure = date.getHours();
    let day = date.getDate();
    let month = date.getMonth()+true;
    let jour = date.getDay();
    
    if (tab[0] == minute || tab[0] == '*') {
        if (tab[1] == heure || tab[1] == '*') {
            if (tab[2] == day || tab[2] == '*') {
                if (tab[4] == jour || tab[4] == '*') {
                    if (tab[3] == month || tab[3] == '*') {return true;}}}}}
    return false;
}

console.log(matchCron("9 2 3 4 1", new Date("Mon, Apr 3 2023 2:9:0")));