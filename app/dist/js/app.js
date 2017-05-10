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