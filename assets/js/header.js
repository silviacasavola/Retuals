if (window.innerWidth >= 992) {
  $("#header-home").attr("href", "visualizer.html")
} else if (window.innerWidth < 991) {
  $("#header-home").attr("href", "index.html")
}

$("#projects-menu").click(function openMenu() {
  console.log("ti prego")
  if (window.innerWidth >= 992) {
  $("#menu").css("left", "60vw")
} else {
  $("#menu").css("left", "0vw")
}

  })

/* Set the width of the side navigation to 0 */
function closeMenu() {
  document.getElementById("menu").style.left = "100vw";
}
