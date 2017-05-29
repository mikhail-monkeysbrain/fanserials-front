/*
  Раскрытие строки поиска уже реализовано на сайте. На всякий случай прикрутил свой вариант реализации
$(function () {
	$('.search__top').click(function(){
		$(this).addClass('js-opened');
		$('.search__top--close').show(500);
	});
	$('.search__top--close').click(function(){
		$('.search__top').removeClass('js-opened');
		console.log('test');
		$(this).hide();
	});
});
*/

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


  $(".slide-three").owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    navText: [],
    responsive:{
      0:{
        items:2
      },
      600:{
        items:5
      },
      1000:{
        items:6
      }
    }
  });
});

$(function(){
$(document).ready(function(){
  $(".genre").owlCarousel({
    loop:false,
    stagePadding: 100,
    nav:false,
    margin:10,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:2
      }
    }
  });
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

/*
$(document).ready(function(){
  $(".fight").click(function(){
    $('.item__all').removeClass("item__current");
    $(".abc li").addClass('none');
    $('.js__show').addClass('none');
    $(".fight").addClass('item__current');
  });
  $(".detective").click(function(){
    $('.item__all').removeClass("item__current");
    $(".abc li").addClass('none');
    $('.js__show').addClass('none');
    $(".detective").addClass('item__current');
  });
  $('.item__all').click(function(){
    location.reload();
  });
});
*/

/*
$(window).resize(function(){
  if($(window).width() < 960) {
      $(".genres").addClass("genres__slider owl-carousel");
  } else {
      $(".genres").removeClass("genres__slider owl-carousel");
  }
});
*/

$( function() {
  $( ".tabs" ).tabs();
} );
