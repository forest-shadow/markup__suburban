$( window ).on( 'load', function() {
    $( '.folding-cube__loading-container' ).fadeOut( 600 );
} );

$( document ).ready( function(){

    // 01. Init mainpage slider
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

    // 02. Init project slider on single project page
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

    // 04. Init ptojects carousels
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

    // 04. Feedback call popup
    $( '.feedback-call-popup' ).magnificPopup({
        type: 'inline',
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        },

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });


    $( '.project-planes__planes-gallery' ).magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    // 04. Calculator radio options opacity changers
    changeImageOpacityRadio( '.radio-list__groundwork-list' );
    changeImageOpacityRadio( '.radio-list__walls-list' );
    changeImageOpacityRadio( '.radio-list__floors-list' );
    changeImageOpacityRadio( '.radio-list__roof-list' );
    changeImageOpacityRadio( '.radio-list__covering-list' );

    $( "input[name='phone']" ).mask( "(999) 999-9999" );
});

function changeImageOpacityRadio ( context ) {
    $('.radio-item__item-inputs label', context ).click( function( ) {
        $( context + '  .radio-item__item-thumb' ).css( 'opacity', '.5');
        $(this).parent().siblings( context + ' .radio-item__item-thumb' ).css( 'opacity', '1');
    });
}
