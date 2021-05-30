;(function($) {
    "use strict";
    
    //* mainNavbar
    function mainNavbar(){
        if ( $('#main_navbar').length ){ 
             $('#main_navbar').affix({
                offset: {
                    top: 10,
                    bottom: function () {
                        return (this.bottom = $('.footer').outerHeight(true))
                    }
                }
            }); 
        };
    };
    

    
    
    //*  Main slider js 
    function home_main_slider(){
        if ( $('.slider_inner').length ){
            $('.slider_inner').camera({
                loader: true,
                navigation: true,
                autoPlay:false,
                time: 4000,
                playPause: false,
                pagination: false,
                thumbnails: false,
                overlayer: true,
                hover: false,  
                minHeight: '500px',
            }); 
        }
    }
    
    
    
    //* Stellar 
    $(function(){
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 40
        });
    });
    
     
    
    
    //* Hide Loading Box (Preloader)
     function preloader(){
        if ( $('.preloader').length ){ 
             $(window).load(function() {
                $('.preloader-img').show();
                $('.preloader').delay(4000).fadeOut('slow');
                $('body').delay(1000).css({'overflow':'visible'});
            });
        } 
    }; 
    

    /*Function Calls*/ 
   
    new WOW().init();
    home_main_slider();

    mainNavbar ();
    preloader ();
    
})(jQuery);

function launch(){
    $("#gototop").attr("src","images/top.png");
}
function readytolaunch(){
    $("#gototop").attr("src","images/top.png");
}

$("#gotopbutton").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll>=$('#start').height()-200)
    {
        $("#gototop").show("slow");
    }
    else
    {
         $("#gototop").hide();
         $("#gototop").attr("src","images/top.png");
    }
    // Do something
});


$(document).ready(function(){
$("#image").mouseover(function(){
$("#pop-up").show();
});
$("#image").mouseout(function(){
$("#pop-up").hide();
});
});




