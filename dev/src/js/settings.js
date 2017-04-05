// settings.js
/* ==========================================================
>> FUCTIONS
========================================================== */

  // =========================== */
  // SMOOTH SCROLL
  // =========================== */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var header = $('header').outerHeight();
        $('html,body').animate({
          scrollTop: target.offset().top - header
        }, 1000, 'easeInOutCubic');
        return false;
      }
    }
    });
  });
  
  // =========================== */
  // SCROLL WATCHER
  // =========================== */
  function ScrollWatcher(){
    var scroll = $(window).scrollTop();
    if(scroll > 1){
      $('body').addClass('scrolled');
    } else {
      $('body').removeClass('scrolled');
    }
  }


  // =========================== */
  // FULL HEIGHT
  // =========================== */
  function fullHeight(){
    var wh = $(window).height();
    $('.fullHeight').css('height', wh);
  }
// FUNCTIONS end
/* ==========================================================
>> DOCUMENT READY
========================================================== */
$(document).ready(function(){
  // =========================== */
  // FULL HEIGHT Start
  // =========================== */
  fullHeight();


  // =========================== */
  // WOW Start
  // =========================== */
  wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,          
    mobile:       false,       
    live:         true        
  });
  wow.init();
  


  // =========================== */
  // Custom Scroll Bar Start
  // =========================== */
  $(".add-scrollbar").mCustomScrollbar({
    theme:"light"
  });
  

  // =========================== */
  // Light Gallery Start
  // =========================== */
  $(".add-lightgallery").lightGallery({
      thumbnail:true,
      fullScreen:true
  });
                          
                            
}); // DOCUMENT READY end

/* ==========================================================
>> WINDOW LOAD
========================================================== */
$(window).load(function(){
  $('body').addClass('loaded');
}); // WINDOW LOAD end

/* ==========================================================
>> WINDOWS SCROLL
========================================================== */
$(window).scroll(function(){
	ScrollWatcher();
}); // WINDOWS SCROLL end

/* ==========================================================
>> WINDOW RESIZE
========================================================== */
$(window).resize(function(){
  fullHeight();
}); // WINDOW RESIZE end
