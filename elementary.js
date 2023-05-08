function multiply(a, b) {
    let stock = a;
    if (a == 0 || b == 0) {return 0}
    if (b < 0) {
        a = -a;
        b = -b;
        stock = -stock;
    }
    for (; b > 1; b--) {a += stock;}
    return a;
}

function divide(a, b) {
    if (a == 0 || b == 0) {return 0;}
    let i = 0
    if (b < 0 && a > 0) {b = -b; for (; a >= b; i--) {a -= b;}
    } else if (a < 0 && b > 0) {a = -a; for (; a >= b; i--) {a -= b;}
    } else if (a < 0 && b < 0) {a = -a; b = -b; for (; a >= b; i++) {a -= b;}
    } else {for (; a >= b; i++) {a -= b;}}
    return i;
}

function modulo(a, b) {
    if (a == 0 || b == 0) {return 0;}
    if (b < 0 && a > 0) {b = -b; for (; a >= b;) {a -= b;}
    } else if (a < 0 && b > 0) {a = -a; for (; a >= b;) {a -= b;} a = -a;
    } else if (a < 0 && b < 0) {a = -a; b = -b; for (; a >= b;) {a -= b;} a = -a
    } else {for (; a >= b;) {a -= b;}}
    return a;
}