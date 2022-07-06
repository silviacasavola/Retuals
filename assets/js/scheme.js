let prj = [];

prj[0] = {
  rito: "maschera",

  ritox: 10,
  ritoy: 35,

  progetto: "persona",
  prjx: 5,
  prjy: 10,

  img: "1.png",
  imgx: "30vw",
  imgy: "15vh"
}

prj[1] = {
  rito: "commemorazione",

  ritox: 60,
  ritoy: 55,

  progetto: "tod",
  prjx: 20,
  prjy: 10,

  img: "2.png",
  imgx: "5vw",
  imgy: "20vh"
}

prj[2] = {
  rito: "protesta",

  ritox: 5,
  ritoy: 83,

  progetto: "protestars",
  prjx: 20,
  prjy: 10,

  img: "2.png",
  imgx: "40vw",
  imgy: "10vh"
}

prj[3] = {
  rito: "corteggiamento",

  ritox: 15,
  ritoy: 25,

  progetto: "lusting",
  prjx: 8,
  prjy: 10,
  img: "2.png",
  imgx: "40vw",
  imgy: "10vh"
}

prj[4] = {
  rito: "tifoseria",

  ritox: 15,
  ritoy: 78,

  progetto: "12°uomo",
  prjx: 20,
  prjy: 10,
  img: "2.png",
  imgx: "40vw",
  imgy: "10vh"
}

prj[5] = {
  rito: "saluto",

  ritox: 5,
  ritoy: 50,

  progetto: "apto",
  prjx: 8,
  prjy: 10,
  img: "2.png",
  imgx: "40vw",
  imgy: "10vh"
}

prj[6] = {
  rito: "superstizione",

  ritox: 35,
  ritoy: 50,

  progetto: "lineo",
  prjx: 20,
  prjy: 10,
  img: "2.png",
  imgx: "40vw",
  imgy: "10vh"
}

prj[7] = {
  rito: "verginità",

  ritox: 50,
  ritoy: 25,

  progetto: "vireo",
  prjx: 20,
  prjy: 10,
  img: "2.png",
  imgx: "40vw",
  imgy: "10vh"
}

prj[8] = {
  rito: "confessione",

  ritox: 680,
  ritoy: 15,

  progetto: "noxa",
  prjx: 20,
  prjy: 10,
  img: "2.png",
  imgx: "40vw",
  imgy: "10vh"
}

prj[9] = {
  rito: "ospitalità",

  ritox: 20,
  ritoy: 60,

  progetto: "oikia",
  prjx: 10,
  prjy: 25,
  img: "2.png",
  imgx: "40vw",
  imgy: "10vh"
}

prj[10] = {
  rito: "pellegrinaggio",

  ritox: 75,
  ritoy: 75,

  progetto: "viatora",
  prjx: 20,
  prjy: 10,
  img: "2.png",
  imgx: "40vw",
  imgy: "10vh"
}

const rito = document.querySelectorAll(".rito");
let x;
var riton;
var stop;

rito.forEach(function (item, index) {
riton = rito[index];

riton.style.left = prj[index].ritox + "%";
riton.style.top = prj[index].ritoy + "%";



riton.addEventListener("mouseover",(function() {
console.log("ma io che cazzo ho fatto d male")
$( "#info").css( "display", "block" );
$("#scheme_name_container").css("display", "none")

$(".rito2").html(prj[index].rito);
$(".rito2").attr('href', prj[index].progetto + ".html" );

$(".rito2").css("left", prj[index].ritox + "%");
$(".rito2").css("top", prj[index].ritoy + "%");

$("#progetto").html(prj[index].progetto);
$("#progetto").css("left", prj[index].prjx + "%");
$("#progetto").css("top", prj[index].prjy + "%");

stop = true;

if (stop === true) {
line(item, index)
}
// $("#project-line path").attr("d", "M0 0 l" + linewidth + " " + lineheight)
})
)

function line(item, index) {
console.log("ma da me che cazzo vuoi?")

  let minX= Math.min(prj[index].ritox, prj[index].prjx);
  let maxX= Math.max(prj[index].ritox, prj[index].prjx);
  let minY= Math.min(prj[index].ritoy, prj[index].prjy);
  let maxY= Math.max(prj[index].ritoy, prj[index].prjy);

  let linecontainerWidth = Math.abs(maxX - minX);
  let linecontainerHeight = Math.abs(maxY - minY);


  $("#project-line-container").css("left", minX  + "%");
  $("#project-line-container").css("width", linecontainerWidth + "%");
  $("#project-line-container").css("top", minY + "%");
  $("#project-line-container").css("height", linecontainerHeight + "%");

  let linewidth= $("#project-line-container").width();
  let lineheight= $("#project-line-container").height();

  $("#project-line").attr("width", linewidth).attr("height", lineheight)
}

riton.addEventListener("mouseout",(function() {
  $( "#info").css( "display", "none" );
  $("#scheme_name_container").css("display", "block");
  stop = false;
})
)

}
)
