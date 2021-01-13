$(document).ready(function () {

    // Preloader js    
    $(window).on('load', function () {
        $('.preloader').fadeOut(100);
    });

    // autohiding navbar on mobile devices
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });

    // venobox popup 
    $('.venobox').venobox();

    // slick slider
    $('.gallery-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'fa fa-angle-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'fa fa-angle-right\'></i></button>',
        autoplay: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // animation scroll js
    var html_body = $('html, body');
    $('nav li a').on('click', function () { //use page-scroll class in any HTML tag for scrolling
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500, "easeInOutExpo");
                return false;
            }
        }
    });

    // easeInOutExpo Declaration
    jQuery.extend(jQuery.easing, {
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    });

    //Initiat WOW JS
    new WOW().init();
    
    function ReLoadImages(){
    $('img[data-lazysrc]').each( function(){
        //* set the img src from data-src
        $( this ).attr( 'src', $( this ).attr( 'data-lazysrc' ) );
        }
    );
    }

    document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "interactive") {  //or at "complete" if you want it to execute in the most last state of window.
        ReLoadImages();
    }
});

// Formt date as YYYY-MM-DD
function formatISOLocal(d) {
  let z = n => ('0' + n).slice(-2);
  return d.getFullYear()+'-'+z(d.getMonth()+1) + '-' + z(d.getDate());
}

window.onload = function() {
  let sinp = document.querySelector('#start');
  let ds = new Date();
  sinp.min = formatISOLocal(ds);
  sinp.defaultValue = sinp.min;
  ds.setFullYear(ds.getFullYear() + 1);
  sinp.max = formatISOLocal(ds);
  // Debug
  console.log(inp.outerHTML);
}

window.onload = function() {
  let inp = document.querySelector('#end');
  let d = new Date();
  inp.min = formatISOLocal(d);
  inp.defaultValue = inp.min;
  d.setFullYear(d.getFullYear() + 1);
  inp.max = formatISOLocal(d);
  // Debug
  console.log(inp.outerHTML);
}

  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Dynamically import the LazySizes library
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
    document.body.appendChild(script);
  }


});