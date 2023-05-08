function round(value) {
    let i = 0
    if (value >= 0) {for(; i <= value; i++) {}} else {for(; i > value; i--) {}}
    if (value >= 0) {if (i - value <= 0.5) {return i;} else {return i-1;}}
    if (value < 0) {if (i - value > -0.5) {return i;} else {return i+1;}}
}

function trunc(value) {
    let i = 0
    if (value >= 68719476735) {return trunc(value - 68719476735)+68719476735}
    if (value >= 0) {for(; i <= value; i++) {} return i-1;} else {for(; i > value; i--) {} return i+1;}
}

function floor(value) {
    let i = 0
    if (value >= 0) {for(; i <= value; i++) {} return i-1;} else {for(; i > value; i--) {} return i;}
}

function ceil(value) {
    let i = 0
    if (value >= 0) {for(; i < value; i++) {} return i;} else {for(; i >= value; i--) {} return i+1;}
}