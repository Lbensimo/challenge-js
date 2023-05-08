function indexOf(array, value, index) {
    let i = 0;
    if (typeof index == "number") {i = index;}
    for (; i < array.length; i++) {
        if (array[i] == value) {return i;}
    }
    return -1;
}

function lastIndexOf(array, value, index) {
    let i = array.length - 1;
    let end = 0;
    if (typeof index == "number") {end, i = index;}
    for (; i >= 0; i--) {
        if (array[i] == value) {return i;}
    }
    return -1;
}

function includes(array, value) {
    if (indexOf(array, value, 0) > -1){return true}
    return false
}
