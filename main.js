function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


$( document ).ready(function() {
    console.log( "ready!" );

    $(".designButton").click(function() {
        $('html,body').animate({
            scrollTop: $(".images").offset().top},
            'slow');
    });

    $(".aboutButton").click(function() {
      $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
      });

    $(".locationButton").click(function() {
        $('html,body').animate({
            scrollTop: $(".footer").offset().top},
            'slow');
    });



});
