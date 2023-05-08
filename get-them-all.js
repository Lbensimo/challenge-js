export const getArchitects = () => {
    let archi = document.getElementsByTagName("a");
    let xArchi = document.getElementsByTagName("span");

    let ret1 = Array.from(archi);
    let ret2 = Array.from(xArchi);
    return [ret1, ret2];
}

export const getClassical = () => {
    let ret1 = Array.from(document.getElementsByClassName("classical"));
    let ret2 = Array.from(document.querySelectorAll("body span,a:not(.classical)"));
    return [ret1, ret2];
}

export const getActive = () => {
    let ret1 = Array.from(document.querySelectorAll("body .classical,.active"));
    let ret2 = Array.from(document.querySelectorAll("body .classical:not(.active)"));
    return [ret1, ret2];
}

export const getBonannoPisano = () => {
    let ret1 = (document.querySelector("#BonannoPisano"));
    let ret2 = Array.from(document.querySelectorAll("body .classical,.active:not(#BonannoPisano)"));
    return [ret1, ret2];
}