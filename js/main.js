$(window).scroll(function() {
if ($(this).scrollTop() > 1200){  
    $('nav').addClass("sticky");
  }
  else{
    $('nav').removeClass("sticky");
  }
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1200){  
    $('nav').addClass("navbar-inverse");
  }
  else{
    $('nav').removeClass("navbar-inverse");
  }
});

//jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}
