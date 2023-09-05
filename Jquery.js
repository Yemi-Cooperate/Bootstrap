$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide(1000);
    });
    $("#show").click(function(){
      $("p").show(1000);
    });
  });

  $(document).ready(function(){
    $("#fadein").click(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
    });
  });

  $(document).ready(function(){
    $("#fadeto").click(function(){
      $("#div1").fadeTo("slow", 0.15);
      $("#div2").fadeTo("slow", 0.4);
      $("#div3").fadeTo("slow", 0.7);
    });
  });

  $(document).ready(function(){
  $("#fadeout").click(function(){
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
  });
});

$(document).ready(function(){
    $("#fadeinandout").click(function(){
      $("#div1a").fadeToggle();
      $("#div2a").fadeToggle("slow");
      $("#div3a").fadeToggle(3000);
    });
  });

//slide up and down

$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });

// Animate effects

$(document).ready(function(){
    $("button").click(function(){
      $("div").animate({left: '250px'});
    });
  });

// relative anim
$(document).ready(function(){
    $("#Anim").click(function(){
      $("div2").animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
      });
    });
  });

  // toggle
  $(document).ready(function(){
    $("#anim2").click(function(){
      $("div3").animate({
        height: 'toggle'
      });
    });
  });
// another style
$(document).ready(function(){
    $("#anim3").click(function(){
      var div = $("div4");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
  });

  //Start and stop slide
  $(document).ready(function(){
    $("#flipy").click(function(){
      $("#panely").slideDown(5000);
    });
    $("#stop").click(function(){
      $("#panely").stop();
    });
  })

  $(document).ready(function(){
    $("#button").click(function(){
      $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
      });
    });
  });

  $(document).ready(function(){
    $("button").click(function(){
      $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
  });


  $(document).ready(function(){
    $("#Toggle").click(function(){
      $("h1, h2, p").toggleClass("blue");
    });
  });

  $(document).ready(function(){
    $("#jq").click(function(){
      $("p1").css({"background-color": "yellow", "font-size": "200%"});
    });
  });

  $(document).ready(function(){
    $("#dim").click(function(){
      var txt = "";
      txt += "Document width/height: " + $(document).width();
      txt += "x" + $(document).height() + "\n";
      txt += "Window width/height: " + $(window).width();
      txt += "x" + $(window).height();
      alert(txt);
    });
  });