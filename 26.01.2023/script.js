// console.log(document.body)

// const html = document.childNodes[1]
// const head = html.childNodes[0]

// let headChild = [...head.childNodes];
// console.log(headChild);
// let style = headChild.filter(el => el.nodeName === "STYLE");
// console.log(style);


// console.log(caption)
// caption.firstChild.nodeValue = "Hey! Where are you?"
// caption.nodeValue = "Omnomnom"
// caption.firstChild.textContent = "Ah! Here you are"
// caption.textContent = "Omnomnom"


let span = document.body.firstElementChild.nextElementSibling.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild    ;
console.log(span);
span.textContent = "2dev1 was there on tuesday 26.01.2023 at 13:15"