function slice(array, start, end = array.length - 1) {
    if (end < array.length - 1) {end--;}
    let dest = [];
    let str = "";
    if (start < 0) {start += array.length}
    if (end < 0) {end += array.length}
    for (let i = start; i <= end; i++) {
        if (typeof array == "string") {
            for (; i <= end; i++) {str += array[i];}
            return str
        } else {dest.push(array[i]);}
    }
    return dest;
}
console.log(slice('abcdef', 0, -2));