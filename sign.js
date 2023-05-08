function sign(params) {if (params < 0) {return -1}else if (params == 0) {return 0}else {return 1}}
function sameSign(param1, param2) {if (sign(param1) == sign(param2)) {return true}return false}