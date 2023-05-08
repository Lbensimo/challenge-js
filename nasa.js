function nasa(value) {
    let str = ""
    let i = 1
    for (; i <= value; i++) {
        if (i % 3 == 0 && i % 5 != 0) {str+="NA";
    } else if (i % 5 == 0 && i % 3 != 0) {str+="SA";
    } else if (i % 3 == 0 && i % 5 == 0) {str+="NASA";
    } else {str+=i;}
    if (i != value) {str+= " "}}
    return str;
}
console.log(nasa(100))