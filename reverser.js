function reverse(params) {
    let i = params.length-1;
    if (Array.isArray(params)) {
        for (let j = 0; j < params.length/2; j++) {
            let stock = params[j];
            params[j] = params [i];
            params[i] = stock;
            i--
        }  
    return params
    } else {
        let ret = ""
        for (let j = 0; j <= i; i--) {
            ret += params[i]
        }
        return ret
    }
}