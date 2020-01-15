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

  $("#vnc-head").click(function(){
    $("#vnc").removeClass("hidden");
    $("#vnc").toggle();
  });

  $("#functions-head").click(function(){
    $("#functions").removeClass("hidden");
    $("#functions").toggle();
  });

  $("#methods-head").click(function(){
    $("#methods").removeClass("hidden");
    $("#methods").toggle();
  });

  $("#arguments-head").click(function(){
    $("#arguments").removeClass("hidden");
    $("#arguments").toggle();
  });

  $("#parameters-head").click(function(){
    $("#parameters-body").removeClass("hidden");
    $("#parameters-body").toggle();
  });

  $("#return-head").click(function(){
    $("#panel-body").removeClass("hidden");
    $("#panel-body").toggle();
  });

  $("#chaining-head").click(function(){
    $("#chaining-body").removeClass("hidden");
    $("#chaining-body").toggle();
  });

  $("#strings-head").click(function(){
    $("#strings-body").removeClass("hidden");
    $("#strings-body").toggle();
  });

  $("#boolean-head").click(function(){
    $("#boolean-body").removeClass("hidden");
    $("#boolean-body").toggle();
  });

  $("#undefin-head").click(function(){
    $("#undefin-body").removeClass("hidden");
    $("#undefin-body").toggle();
  });

  $("#nan-head").click(function(){
    $("#nan-body").removeClass("hidden");
    $("#nan-body").toggle();
  });

  $("#escape-head").click(function(){
    $("#escape-body").removeClass("hidden");
    $("#escape-body").toggle();
  });

  $("button").click(function(){
    var term = document.getElementById("term").value;
    var meaning = document.getElementById("meaning").value;
    var panel = '<div class="col-md-4"><div class="panel panel-primary"><div id="chaining-head" class="panel-heading">' + term + '<span class="glyphicon glyphicon-menu-down"aria-hidden="true"></span></div><div id="chaining-body" class="panel-body hidden"><p>' + meaning + '</p></div></div></div>';
    $("#old-terms").append(panel);

    event.preventDefault();
  });

});