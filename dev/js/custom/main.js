$( document ).ready( function(){
    $( '.mainpage-slider' ).slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 7000
    });

    $( '.project-desc-block__project-slider' ).slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 7000
    });

    $( '.project-carousel' ).slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        cssEase: 'linear'
        //autoplay: true,
        //autoplaySpeed: 7000
    });
});
