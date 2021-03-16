$(document).ready(function(){
     'use strict';
    
    var menuBg = $('.menu-bg');
    var BackToTop =  $('.back-to-top');
     var html_body = $('html, body');
    
    //window scroll;
    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();
        
        //back-to-top visible;
        if(scrolling > 200){
           BackToTop.fadeIn();
        }
        else{
            BackToTop.fadeOut();
        }
        
        // add a bg to menu-bg;
        if(scrolling >=500){
            menuBg.addClass('sticky');
        }
        else{
           menuBg.removeClass('sticky');
        }
    });
    
    // click to top ;
   BackToTop.on('click',function(){
      html_body.animate({
           scrollTop:0,
       },1500);
   });
    
    //animation scroll js
    var html_body = $('html, body');
    $('.menu-bg a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });

    
});
                  
                  