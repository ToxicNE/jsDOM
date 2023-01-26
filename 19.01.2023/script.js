let n = 0;
function clck(){
    console.log(`Click ${++n} times`   )
}

const getNumber = function(a = 101, b = 0) //math.floor не включает последнее число
{
    return Math.floor(Math.random() * (a-b) + b)
}
let w
function show(){
    // window.open("https://wikipedia.org", "");
   w = window.open("","","width=300, height=300, top=200, left=200");
}
function exit(){
    if(w){
        w.close();
    }
}

function changeSize(){
    let width = getNumber(screen.width - 200, 100)
    let height = getNumber(screen.height - 200, 100)
    if(w){
        w.resizeTo(width, height)
    }
}

function changePlace(){
    let x = (screen.width - w.innerWidth)
    w.moveTo()
}