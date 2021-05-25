$(function(){
    $('.menu__nav-link.drop').on('click', function(){
        $('.menu__nav-link.drop, .menu__nav-drop, .menu__nav-item').toggleClass('menu__nav-drop--active');
        
    })
    $('.menu-burger').click(function() {
        $('.menu__nav').toggleClass('active');
        $('.menu-burger').toggleClass('active');
    });
    $('.aside__menu').click(function() {
        $('.aside').toggleClass('active');
        
    });

    $('.banner-slider').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
       
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        
      });

   $('.product__item-favorite').on('click', function(){
       $(this).toggleClass('active')
   });
    
   $('input, select').styler();

  

   $('.product__filters-btn').click(function() {
    $(this).toggleClass('active');
    
  });
  $('.product__filters-btn').click(function(e) {
    e.preventDefault();
    $('.product__filters-btn').removeClass('active');
    $(this).addClass('active');
  });

  


  $('.basket-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
});


$('.lk-modal').magnificPopup({
  type: 'inline',
  preloader: false,
  focus: '#username',
  modal: true
});
$(document).on('click', '.popup-modal-dismiss', function (e) {
  e.preventDefault();
  $.magnificPopup.close();
});

});
