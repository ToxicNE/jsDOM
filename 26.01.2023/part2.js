/**
 * innerText - не работает с текстовыми узлами (получает текст только из узла элемента)
 */

// document.body.innerText += "<h1>Hey! Guys!</h1>"

let names = [
    "Rita",
    "Apolynari",
    "Beast",
    "Timur",
    "Sergei",
    "Mishkan",
    "Kseniya",
    "Ilya",
    "Murad",
    "Misha",
    "Rolan",
    "Semyon",
    "Nikita",
    "Vlad",
    "Cat",
    "Artemiy"
]

class Person{
    constructor(name){
        this.name = name,
        this.age = getNumber(13,20),
        this.color = getColor(),
        this.bg = getColor(40)
    }
}

const data = [];
let cnt = 9;

while(cnt--){
    let rndName = names[getNumber(names.length)];
    data.push(new Person(rndName))
}

console.log(data)