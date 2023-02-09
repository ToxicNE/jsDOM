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
    return str
}

let block = document.getElementById("house");
console.log(block);
block.innerHTML += `<h3>Чем отличаются программисты от разработчиков?</h3> <p>умением переходить из группы в группу</p>`

let captions = document.getElementsByTagName("h3")
console.log(captions)

for(let i = 0; i < captions.length;){
    let h3 = captions[i];
    h3.innerText = ++i + " " + h3.innerText;
}
let wrapper = document.getElementsByClassName("wrapper")[0];
console.log(wrapper);

wrapper.title = "Omnomnom";
wrapper.id = "wrap";
// не работает для аттрибутов
// - class
// - for

wrapper.style = `background-image: ${getGradient(3,'linear', "to left")}`;
block.style = `background-image: ${getGradient(3,'radial', "circle")}`;

Array.from(captions).forEach((h3, i) => {
    if(i !== captions.length - 1)
    h3.nextElementSibling.style = `padding-bottom: 20px;
    border-bottom:1px solid;
    margin-bottom:20px
    `
})