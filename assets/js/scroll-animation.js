var vTop = $("#enabler").offset().top - parseFloat($("#enabler").css('margin-top').replace(/auto/, 0));

// console.log(vTop)



// $("#fake-container").css("height", $("#big-text-section").height());

if (window.innerWidth >= 992) {
$("#img-bigger-container").css("top", vTop)
$("#img-bigger-container").css("height", window.innerHeight - 10)


$(window).scroll(function (event) {

// console.log(dTop)

var y = $(this).scrollTop();
// console.log(y)
//
    if (y >= dTop) {
      $("#img-bigger-container").css("overflow-y", "scroll");
    } else {
      $("#img-bigger-container").css("overflow-y", "hidden");
    }
})

}


history.scrollRestoration = "manual";
$(window).on('beforeunload', function(){
  $("body").scrollTop(0);
})
