const getNumber = function(a = 101, b = 0) {    return Math.floor(Math.random() * (a - b) + b);}
const getColor = function(a = 100) {    return `rgba(${getNumber(256)},${getNumber(256)},${getNumber(256)}, ${a / 100})`;}
function getGradient(cnt = 2, type = "linear", dir){
    let str = ""
    switch(type){
        case "linear": str += `linear-gradient(`; break;
        case "radial": str += `radial-gradient(`; break;
    }
    if(dir){
        str += dir + ","
    }
    while(cnt--){
        str += getColor(getNumber(101));
        str += cnt ? "," : ")";
    }
}
