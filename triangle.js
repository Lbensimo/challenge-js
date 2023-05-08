function triangle(car, num) {
    let str = "";
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {str += car;}
        if (i != num-1) {str += '\n'}}
    return str;}