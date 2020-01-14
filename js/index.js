$(document).ready(function(){
  //$(".panel-header").click(function(){
  //  $(".panel-body").removeClass("hidden");
  //  
  //});

  $("#operators-head").click(function(){
    $("#operators").removeClass("hidden");
    $("#operators").toggle();
  });

  $("#variables-head").click(function(){
    $("#variables").removeClass("hidden");
    $("#variables").toggle();
  });

  $("#javascript-head").click(function(){
    $("#javascript").removeClass("hidden");
    $("#javascript").toggle();
  });

});