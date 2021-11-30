$(document).ready(function () {
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
  
      if (scrollTop >= 150 ) {
        $(".nav-container").addClass("solid-nav");
      } else {
        $(".nav-container").removeClass("solid-nav");
      }
    });
  });
  function myFunction() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }  
  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }