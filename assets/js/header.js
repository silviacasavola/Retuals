if (window.innerWidth >= 992) {
  $("#header-home a").attr("href", "visualizer.html")
} else if (window.innerWidth < 991) {
  $("#header-home a").attr("href", "index.html")
}

// OPEN MENU
let menuopen = false;


$("#projects-menu").click(function () {
  if (menuopen === false) {
  openMenu ()
  menuopen = true;
} else {
  closeMenu ()
  menuopen = false;
}
})

function openMenu() {

  if (window.innerWidth >= 992) {
  $("#menu").css("left", "60vw")
  $("#closebtn").css("left", "60vw")
} else {
  $("#menu").css("left", "0vw")
  $("#closebtn").css("left", "0vw")
}

setTimeout(function(){
$("#closebtn").css("display", "block")
}, 400);
}

// CLOSE MENU
function closeMenu() {
menuopen = false;
  $("#menu").css("left", "100vw");
  $("#closebtn").css("display", "none")
}
