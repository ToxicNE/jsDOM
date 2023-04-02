
var menuItems = document.querySelectorAll("#menu li");


for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function(e) {
    e.stopPropagation(); 
    var subMenu = this.querySelector("ul"); 
    if (subMenu) {
      subMenu.classList.toggle("show"); 
    }
  });
}


document.addEventListener("click", function(e) {
  var subMenus = document.querySelectorAll(".show"); 
  for (var i = 0; i < subMenus.length; i++) {
    subMenus[i].classList.remove("show"); 
  }
});
