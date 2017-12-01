/**
 * @description Scroll automatically to page section when navigation item is clicked
 */
// $(document).ready(function () {
//     // Add scrollspy to <body>
//     $('body').scrollspy({ target: ".nav", offset: 50 });

//     // Add smooth scrolling on all links inside the navbar
//     $("#myNavbar a").on('click', function (event) {
//         // Make sure this.hash has a value before overriding default behavior
//         if (this.hash !== "") {
//             // Prevent default anchor click behavior
//             event.preventDefault();

//             // Store hash
//             var hash = this.hash;

//             // Using jQuery's animate() method to add smooth page scroll
//             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function () {

//                 // Add hash (#) to URL when done scrolling (default click behavior)
//                 window.location.hash = hash;
//             });
//         }  // End if
//     });
// });


/**
 * @description Set the header position to fixed when page gets scrolled
 */
$(document).scroll((event) => {        
    try {     
        let scrollTop = $(document).scrollTop();
        if(scrollTop > 0) {
            $('#head-wrap').addClass('rainbow-bg');
        } else {
            $('#head-wrap').removeClass('rainbow-bg');
        }
    } catch(error) {
        console.log(`Error occured while trying to get Carousel rectangle: ${error}`);
    }    
});

/**
 * @description toggle left navigation
 */
$('#nav-toggle').click((event) => {
    $('#myNavbar').toggleClass('active');
});

/**
 * @description toggle left navigation
 */
$('#nav-close').click((event) => {
    $('#myNavbar').removeClass('active');
});