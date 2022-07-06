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
  imgx: "20vw",
  imgy: "20vh"
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
  imgx: "30vw",
  imgy: "15vh"
}

prj[5] = {
  rito: "saluto",

  ritox: 5,
  ritoy: 50,

  progetto: "apto",
  prjx: 8,
  prjy: 10,
  img: "2.png",
  imgx: "20vw",
  imgy: "15vh"
}

prj[6] = {
  rito: "superstizione",

  ritox: 35,
  ritoy: 50,

  progetto: "lineo",
  prjx: 20,
  prjy: 10,
  img: "2.png",
  imgx: "50vw",
  imgy: "20vh"
}

prj[7] = {
  rito: "verginità",

  ritox: 50,
  ritoy: 25,

  progetto: "vireo",
  prjx: 20,
  prjy: 10,
  img: "2.png",
  imgx: "5vw",
  imgy: "25vh"
}

prj[8] = {
  rito: "confessione",

  ritox: 85,
  ritoy: 15,

  progetto: "noxa",
  prjx: 20,
  prjy: 10,
  img: "2.png",
  imgx: "30vw",
  imgy: "20vh"
}

prj[9] = {
  rito: "ospitalità",

  ritox: 20,
  ritoy: 60,

  progetto: "oikia",
  prjx: 10,
  prjy: 25,
  img: "2.png",
  imgx: "30vw",
  imgy: "15vh"
}

prj[10] = {
  rito: "pellegrinaggio",

  ritox: 75,
  ritoy: 75,

  progetto: "viatora",
  prjx: 20,
  prjy: 10,
  img: "2.png",
  imgx: "30vw",
  imgy: "20vh"
}

const rito = document.querySelectorAll(".rito");
let x;
var riton;

rito.forEach(function (item, index) {
riton = rito[index];

riton.style.left = prj[index].ritox + "%";-'0'
riton.style.top = prj[index].ritoy + "%";

riton.addEventListener("mouseover",(function() {

  $( "#info").css( "display", "block" );
  $("#scheme_name_container").css("display", "none")
  $(".rito2").html(prj[index].rito);
  // $(".rito2").attr('id', 'rito-' + (index + 1) );
  $(".rito2").css("left", prj[index].ritox + "%");
  $(".rito2").css("top", prj[index].ritoy + "%");
  // $(".rito-start").css("left", prj[index].ritox + 10 + "%");
  // $(".rito-start").css("top", prj[index].ritoy + "%");

  $(".rito2").attr('href', + prj[index].progetto + ".html" );


  $("#progetto").html(prj[index].progetto);
  $("#progetto").css("left", prj[index].prjx + "%");
  $("#progetto").css("top", prj[index].prjy + "%");
  // $(".rito-end").css("left", prj[index].prjx + 10 + "%");
  // $(".rito-end").css("top", prj[index].prjy + "%");

  $("#project-img").attr("src","./assets/img/scheme/" + (index + 1) + ".jpg");
  $("#project-img").css("left", prj[index].imgx);
  $("#project-img").css("top", prj[index].imgy);



  // if (prj[index].ritox < prj[index].prjx) {
  //   $("#project-line").css ("left", prj[index].ritox + "%");
  //   $("#project-line").css ("margin-left", riton.width());
  //   $("#project-line").css ("width", Math.abs(prj[index].prjx - prj[index].ritox) + "%");
  // } else {
  //   $("#project-line").css ("left", prj[index].prjx + "%");
  //   $("#project-line").css ("margin-left", $("#progetto").width());
  //   $("#project-line").css ("width", Math.abs(prj[index].ritox - prj[index].prjx) + "%");
  // }
  //
  // if (prj[index].ritoy < prj[index].prjy) {
  //   $("#project-line").css ("top", prj[index].ritoy + "%");
  //   $("#project-line").css ("height", Math.abs(prj[index].prjy - prj[index].ritoy) + "%");
  // } else {
  //   $("#project-line").css ("top", prj[index].prjy + "%");
  //   $("#project-line").css ("height", Math.abs(prj[index].ritoy - prj[index].prjy) + "%");
  // }

  // $("#project-line").css ("width", Math.abs(prj[index].prjx - prj[index].ritox) + "%");
  // $("#project-line").css ("height", Math.abs(prj[index].prjy - prj[index].ritoy) + "%");
})
)

riton.addEventListener("mouseout",(function() {
  $( "#info").css( "display", "none" );
  $("#scheme_name_container").css("display", "black")
})
)

}
)
