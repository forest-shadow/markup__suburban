$( window ).on( 'load', function() {
    $( '.folding-cube__loading-container' ).fadeOut( 600 );
} );

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

    changeImageOpacityRadio( '.radio-list__groundwork-list' );
    changeImageOpacityRadio( '.radio-list__walls-list' );
    changeImageOpacityRadio( '.radio-list__floors-list' );
    changeImageOpacityRadio( '.radio-list__roof-list' );
    changeImageOpacityRadio( '.radio-list__covering-list' );
});

function changeImageOpacityRadio ( context ) {
    $('.radio-item__item-inputs label', context ).click( function( ) {
        $( context + '  .radio-item__item-thumb' ).css( 'opacity', '.5');
        $(this).parent().siblings( context + ' .radio-item__item-thumb' ).css( 'opacity', '1');
    });
}
