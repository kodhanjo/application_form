// akan
function Akan(){
  alert("Thank you!");
}

$(document).ready(function() {
  
    $('.slick-slider').bxSlider({
      minSlides: 1,
      maxSlides: 1,
      controls: false
    });
    
    $( ".discover-button" ).hover(function() {
      $( this ).parent().addClass("hovered-card");
    }, function() {
      $( this ).parent().removeClass("hovered-card");
    }
  );
  });
  // ===== submit button onclick====
  // Onclick

(function () {
  "use strict";
  
  var flip = document.getElementById('flip'),
      button = document.getElementById('btn1');

  button.onclick = function () {
      flip.className = 'animate';
  };

})();

// ====end of onclick button======