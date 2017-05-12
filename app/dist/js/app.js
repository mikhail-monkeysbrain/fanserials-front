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

  $(".slide-two").owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    navText: [],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:4
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