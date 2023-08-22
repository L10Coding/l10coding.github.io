$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 30){
      $('header').addClass('header-active');
    } else{
      $('header').removeClass('header-active');
    }

    // $('section').each(function(){
    //   var top = $(window).scrollTop();
    //   var id = $(this).attr('id');
    //   var height = $(this).height();
    //   var top = $(this).offset().top - 200;
    //   if(top >= offset && top < height + offset){
    //     $('.navbar ul li a').removeClass('active');
    //     $('.navbar').find('[href="#' + id + '"]').addClass('active');
    //   }
    // });
    $(document).ready(function() {
      $(window).on('scroll', function() {
        $('section').each(function() {
          var sectionTop = $(window).scrollTop(); // Renamed to sectionTop
          var id = $(this).attr('id');
          var height = $(this).height();
          var sectionOffset = $(this).offset().top - 200; // Renamed to sectionOffset
    
          if (sectionTop >= sectionOffset && sectionTop < height + sectionOffset) {
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find('[href="#' + id + '"]').addClass('active');
          }
        });
      });
    });


  });

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
  });
});