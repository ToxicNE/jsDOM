// randomArray = (length, max) => [...new Array(length)]
//     .map(() => Math.round(Math.random() * max));

//     let arr = randomArray(30,99)
    
//     var table=document.getElementById('table');
    
//     for (let subArr of arr) {
//         let tr = document.createElement('tr');
        
//         for (let elem of subArr) {
//             let td = document.createElement('td');
//             td.textContent = elem;
//             tr.appendChild(td);
//         }
        
//         table.appendChild(tr);
//     }

function getTable (size, random) { 
    var t = "<table>", r = typeof random === "number" ? 99 : 1; 
    for (var i = 0; i < size; i++) { 
        t += "<tr>"; 
        for (var j = 0; j < size; j++) t += "<td>" + Math.floor (Math.random() * r + 1) + "</td>"; 
        t += "</tr>"; 
    } 
    return t + "</table>"; 
}
document.write (getTable (5, 6));