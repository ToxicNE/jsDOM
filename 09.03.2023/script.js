 const setBg = e =>{
    e.preventDefault();
    console.log(e.currenTarget);
    e.currenTarget.style.backgroundColor = getColor(getNumber(101))
 }

 const sq = document.querySelector(".square")
 const link = sq.firstElementChild

 document.body.addEventListener("click",setBg);
 sq.addEventListener("click",setBg);
 link.addEventListener("click",setBg);