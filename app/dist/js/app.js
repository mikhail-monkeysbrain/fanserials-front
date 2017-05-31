$(document).ready(function(){

  $(".new-serials--content").owlCarousel({
    loop:false,
    nav:true,
    margin:10,
    navText: [],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });

});


$(function(){
  $('.blocks .item').click(function(){

    $('.blocks .item').removeClass('item__current');
    $(this).addClass('item__current');
  });
  $('.genres .item').click(function(){
    $(this).toggleClass('item__current');
  });
});

$(function(){
  $('.js__show').click(function(){
    $(this).parent().toggleClass('js__show--all');
  });
});


$(function(){
  $('span.info').click(function(){
    $('.news-list--card').hide(500);
    $(this).addClass('js__op').parent('.serial__item__news').children('.news-list--card').show(500);
    $('.wrapper--main').css('z-index', '500');
    $(function(){
      $('.wrapper--main').click(function(){
        //$('.news-list--card').hide(500);
        location.reload();
      })
    });
  });
});
$(document).ready(function(){
  $(".genres__slider").owlCarousel({
    loop:false,
    stagePadding: 100,
    nav:false,
    margin:10,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:4
      },
    }
  });
});


$( function() {
  $( ".tabs" ).tabs();
} );
