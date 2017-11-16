/**
 * @description Scroll automatically to page section when navigation item is clicked
 */
$(document).ready(function () {
    // Add scrollspy to <body>
    $('body').scrollspy({ target: ".nav", offset: 50 });

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
});


/**
 * @description Set the header position to fixed when page gets scrolled
 */
$(document).scroll((event) => {
    // Retrive Carousel bottom offet so we can add a background to the header only after the carousel
    let carousel = document.getElementById('myCarousel');
    let carouselBottom = 0;
    try{        
        if(carousel !== null) {
            carouselBottom 
                = carousel.getBoundingClientRect().bottom;
        }     
    } catch(error) {
        console.log(`Error occured while trying to get Carousel rectangle: ${error}`);
    }
        
    try {        
        // let scrollTop = $(document).scrollTop();
        // const headerRow = $('#header-row').html();
        // if(scrollTop !== 0) {
        //     /**
        //      * Get the header row & add it in a seperate standalone container
        //      */            
        //     $('#header-row').html('');                 
        //     $('#fixed-head-nav').addClass('active');
        //     // Clear content
        //     $('#fixed-head-wrap').html('');
        //     // Add the header row to the hidden container
        //     $('#fixed-head-wrap').html(headerRow);
        //     $('#fixed-head-nav #fixed-head-wrap').addClass('fixed wrapper');
            
        //     if(carouselBottom <= 0) {
        //         $('#fixed-head-nav').addClass('rainbow-bg');
        //     } else {
        //         $('#fixed-head-nav').removeClass('rainbow-bg');
        //     }
        // } else {
        //     $('#fixed-head-nav').removeClass('active');
        //     $('#header-row').html(headerRow);
        // }
    } catch(error) {
        console.log(`Error occured while trying to get Carousel rectangle: ${error}`);
    }    

});