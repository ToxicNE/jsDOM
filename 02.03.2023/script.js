const sq = document.querySelector(".square");

const changeBg = function(el){
    console.log(el)
    el.style.backgroundColor = getColor()
}

let n = 0;
const span = document.createElement("span");
sq.append(span);
sq.onclick = function(){
    span.innerText = `Clicked ${++n} times`
};

sq.addEventListener("click",changeBg)