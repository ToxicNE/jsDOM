function getNumber(max = 256, min = 0){
    return Math.floor(Math.random() * (max-min) + min)
}
function getColor(a = 100){
    return `rgba(${getNumber()},
    ${getNumber()},${getNumber()}, ${a / 100})`
}
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
