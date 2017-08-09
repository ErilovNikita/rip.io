$(document).ready(function(){

  $(".trigger-open").on("click", function(){

    $(".splash").stop().animate({
      top: "0%",
      opacity: "0.9"
    }, 500);

  });

  $(".trigger-close").on("click", function(){

    $(".splash").stop().animate({
      top: "-100%",
      opacity: "0"
    }, 500)
  })

});
