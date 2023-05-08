function words(params) {return params.split(' ')}
function sentence(params) {return params.join(' ')}
function yell(params) {return params.toUpperCase()}
function whisper(params) {return params.padStart(params.length + true, '*').padEnd(params.length + true*2, '*').toLowerCase()}
function capitalize(params) {
    params = params.toLowerCase()
    return params.charAt(0).toUpperCase() + params.slice(1);
}