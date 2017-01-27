$(window).load(function(){
  $("img").mouseover(function(){$(this).fadeTo(500, 1);});
  $("img").mouseout(function(){$(this).fadeTo(500, .3);});
});