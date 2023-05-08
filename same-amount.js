function sameAmount(str, reg1, reg2) {
    const tab1 = str.match(new RegExp(reg1, "g"));
    const tab2 = str.match(new RegExp(reg2, "g"));
    return tab1 !== null && tab2 !== null && tab1.length == tab2.length
}