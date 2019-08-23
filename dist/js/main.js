$( window ).load(function() {


// Main Navigation
$('.header__nav-icon').on('click', function(){
    $('.nav__list-text').toggle();
  });

$('.nav__list-icon').each(function(){
    $(this).on('click', function(){
        $('.nav__list-text').show();
    });
});


// Change the navigation depending on Mediaqueries
 if ($('header').width() <= 767 ){
    $('.header__nav-icon').on('click', function(){
      $('.nav__list').toggleClass('navigation__visible');
  });
};


// Change the language



$('.header__tumbler').click(function(){
    $('.header__tumbler').filter('.version--active').removeClass('version--active');
    $(this).addClass('version--active');

});


// Parallax effect on the main page
    $(window).scroll(function(e){
      parallax();
    });

    	function parallax(){
    	  var scrolled = $(window).scrollTop();
    	  $('.parallax .parallax__image .parallax__effect').css('top',-(scrolled*0.001)+'px');
    	};


 // Animation on scroll when the coupler animation is in the view 

    //window and animation items
    var animation_element = $.find('.main');
    var web_window = $(window);
   

    //check to see if animation container is currently in view
    function check_if_in_view() {
        //get current window information
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
       

        //iterate through elements to see if its in view
        $.each(animation_element, function () {
            

            //get the element sinformation
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height);




            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                $('.ocean').addClass('ocean--animated');
                $('.air').addClass('air--animated');
                $('.ice').addClass('ice--animated');
                $('.earth').addClass('earth--animated');
                
            };

        });
    };

    //on or scroll, detect elements in view
    $(window).on('scroll resize', function () {
        check_if_in_view()
    });
    //trigger our scroll event on initial load
    $(window).trigger('scroll');



// make Flickity a jQuery plugin
jQueryBridget('flickity', Flickity, $);


    // slider on block Advantages on the main Page
    $('.slider').flickity({
        cellAlign: 'left',
        prevNextButtons: true,
        draggable: false,
        freeScroll: true,
        wrapAround: true,
        imagesLoaded: true,
        pageDots: false,
    });

    //slider on other pages
    $('.science__card-slider').flickity({
        cellAlign: 'left',
        prevNextButtons: true,
        draggable: false,
        freeScroll: true,
        wrapAround: true,
        imagesLoaded: true,
        pageDots: false,
    });


// Slider function changes images'width if they doesn't fit the container
let sliderCells = $('.slider__cell');
let currentSliderCell;

sliderCells.each( function(){
    var thisElem = $(this);
    resizeImage(thisElem);
})

function resizeImage(thisElem){
    currentSliderCell = thisElem;
    let imageWidth = currentSliderCell.find('.figure__box-image').width();
    let containerWidth = currentSliderCell.width();
    let image = currentSliderCell.find('.figure__box-image');


    console.log( imageWidth, containerWidth);

    if ( imageWidth > containerWidth ){
        image.css('width', containerWidth + 'px');
       // console.log('new image width ' + image.width());
        let heightDiff = imageWidth / containerWidth;
       // console.log('Picture Height should be resized in ' + heightDiff);
        let newHeight = image.height() / heightDiff;
       // console.log('New Height should be' + newHeight);
        image.css('height', newHeight + 'px');
       // console.log('Image new height is ' + image.height());
    };
};


});