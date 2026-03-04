$(document).ready(function() {
  // sticky header 
  function handleHeaderScroll() {
    $('.header').toggleClass(
      'is-scrolled',
      $(window).scrollTop() > 200
    );
  }

  // Run on page load
  handleHeaderScroll();

  // Run on scroll
  $(window).on('scroll', function () {
    handleHeaderScroll();
  });

  // Hamburger Menu Toggle
  $('.hamburger').on('click', function() {
      $(this).toggleClass('active');
      $('header .nav, body').toggleClass('active');
      const expanded = $(this).attr('aria-expanded') === 'true' ? 'false' : 'true';
      $(this).attr('aria-expanded', expanded);
  });

// Hero carousel 

  $('.hero-banner').slick({
  arrows: false,
  infinite: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
});


// Info carousel 

  $('.infoCarousel').slick({
  arrows: false,
  infinite: true,
  variableWidth: true,
  autoplay: true,
});

// Testimonial Slider

  $('.testimonial-slider').slick({
  infinite: false, 
  autoplay: false,
});


// Vertical Slider

  $('.slider1, .slider2').slick({
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: true, 
    autoplay: true,
});


  // Tabs 

    $('.tabs-list li').on('click', function () {

    var tabIndex = $(this).data('tab');

    // Active tab switch
    $('.tabs-list li').removeClass('active');
    $(this).addClass('active');

    // Content switch
    $('.tab-content').removeClass('active');
    $('.tab-content').eq(tabIndex).addClass('active');

    
    var container = $('.tabs-list');
    var tab = $(this);

    container.animate({
        scrollLeft: tab.position().left 
        + container.scrollLeft() 
        - container.width()/2 
        + tab.outerWidth()/2
    }, 400);

  });


});

