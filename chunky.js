function chunk(array, int) {
    let list = Math.floor(array.length / int);
    let rest = array.length % int;
    let here = [];
    let ret = [];
    let k = 0
    let i = 0
    for (; i < list * int; i++) {
        here.push(array[i]);
        k++;
        if (k == int) {
            k = 0;
            ret.push(here);
            here = [];
        }
    }
    for (;rest > 0;) {
        here.push(array[i]);
        rest--
        if (rest == 0) {ret.push(here);}
    }
    return ret
}