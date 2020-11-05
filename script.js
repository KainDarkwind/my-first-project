$(".job1").click(function() {
    $(".work1").slideToggle();
    $(".open1").toggle();
    $(".close1").toggle();
  });
  
  $(".job2").click(function() {
    $(".work2").slideToggle();
      $(".open2").toggle();
    $(".close2").toggle();
  });
  
  $(".job3").click(function() {
    $(".work3").fadeToggle();
      $(".open3").toggle();
    $(".close3").toggle();
  });
  
  $(".job31").click(function() {
    $(".work31").slideToggle();
      $(".open31").toggle();
    $(".close31").toggle();
  });
  
  $(".job32").click(function() {
    $(".work32").slideToggle();
      $(".open32").toggle();
    $(".close32").toggle();
  });
  
  $(".job33").click(function() {
    $(".work33").slideToggle();
      $(".open33").toggle();
    $(".close33").toggle();
  });
  
  $(".job34").click(function() {
    $(".work34").slideToggle();
      $(".open34").toggle();
    $(".close34").toggle();
  });
  
  $("#personal").click(function() {
               $("#emailbutton").html("Email Personal Request");
  });
  
  $("#professional").click(function() {
    $("#emailbutton").html("Email Professional Request");
  });
  
   $("#notrobot").click(function() {
     $("#robot").removeClass("is-invalid");
     $("#robot").removeAttr("checked");
     });
  
  $("#robot").click(function() {
     $("#robot").addClass("is-invalid");
     });
  
  $("#email").keypress(function() {
    $("#emailbutton").removeAttr("disabled");
  });
  
  $("#emailbutton").click(function() {
    window.open (
    "mailto:kainndarkwind@gmail.com?subject=Regardingresume&body=" + $("#email").val(),
    "_blank"
    );
  });
   