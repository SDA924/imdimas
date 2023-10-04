var navHeight = $('nav').outerHeight();

$(document).ready(function () {    
    $("main").css('margin-top', navHeight);
});

function navTo(href) {
    $('nav a.active').removeClass('active');
    
    $(`nav a[href='${href}']`).addClass('active');
}

function scrollTo(href){
    $("html, body").animate({ scrollTop: $(href).position().top - navHeight + 1}, 300);
}

$('a.nav-link').click(function (e) { 
    // e.preventDefault();
    var href = $(this).attr("href");
    
    scrollTo(href);
});   


var arrowVal=0;
        function clickButton(arrow) {
        // if(arrowVal<-360 && arrowVal<360)
        if (arrow =='left') {

            arrowVal-=120;
            $('img#circle').css( 'transform',`rotate(${arrowVal}deg)`);

        }
        else if (arrow =='right'){  
            arrowVal+=120;
            $('img#circle').css( 'transform',`rotate(${arrowVal}deg)`);

        }else if($(window).width() >= 1200){
            $('button#project').removeClass('d-none');
            $('h2#Skill2').removeClass('d-none');
            $('h2#Skill1').addClass('d-none');
            $('div#carouselExample').removeClass('d-none');
            $('button#left').removeClass('d-none'); 
            $('button#right').removeClass('d-none');
            $('button#zoom').addClass('d-none');
            $('img#circle').width('100%');

        }else{
            $('button#project').removeClass('d-none');
            $('h2#Skill1').addClass('d-none');
            $('div#carouselExample').removeClass('d-none');
            $('button#left').removeClass('d-none'); 
            $('button#right').removeClass('d-none');
            $('button#zoom').addClass('d-none');
            $('img#circle').width('200%');

        }

        // $("img#circle").animate({
        //     step: function(arrowVal,fx) {
        //         $(this).css('transform',`rotate(${arrowVal}deg)`); 
        //     }
        // });

        // $('img#circle').css( 'transform',`rotate(${arrowVal}deg)`);

        }



        const myCarousel = document.getElementById('carouselExample')

        myCarousel.addEventListener('slide.bs.carousel', event => {
          

        })