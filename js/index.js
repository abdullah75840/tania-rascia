$(document).ready(function () {
      $(window).scroll(function () {
          var iCurScrollPos = window.scrollY;
          if (iCurScrollPos > 0) {
            $(".nav").addClass("scroll");
          } else {
            $(".nav").removeClass("scroll");
          }
      });

    
      $(".dark-switcher").click(function() { 
        $(".sun-light").toggleClass("display")  
        $(".moon-light").toggleClass("dis-none")
        $(".body-wrapper").toggleClass("dark")

      });
      



    })