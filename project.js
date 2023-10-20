
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

        }else if(arrow =='zoom' && $(window).width() >= 1200){
            $('button#project').removeClass('d-none');
            $('h2#Skill2').removeClass('d-none');
            $('h2#Skill1').addClass('d-none');
            $('div#carouselExample').removeClass('d-none');
            $('button#left').removeClass('d-none'); 
            $('button#right').removeClass('d-none');
            $('button#zoom').addClass('d-none');
            $('img#circle').width('100%');

        }else if(arrow =='zoom'){
            $('button#project').removeClass('d-none');
            $('h2#Skill1').addClass('d-none');
            $('div#carouselExample').removeClass('d-none');
            $('button#left').removeClass('d-none'); 
            $('button#right').removeClass('d-none');
            $('button#zoom').addClass('d-none');
            $('img#circle').width('200%');

        }else if(arrow =='projectWeb'){
            $('div#lingkaran').addClass('d-none');
            $('div#projectWeb').removeClass('d-none');
        }else if (arrow == 'projectMobile') {
            $('div#lingkaran').addClass('d-none');
            $('div#projectMobile').removeClass('d-none');
        }else if (arrow == 'projectUIUX') {
            $('div#lingkaran').addClass('d-none');
            $('div#projectUIUX').removeClass('d-none');
        }else if (arrow == 'close') {
            $('div#lingkaran').removeClass('d-none');
            $('div#projectWeb').addClass('d-none');
            $('div#projectUIUX').addClass('d-none');
            $('div#projectMobile').addClass('d-none');
        }

    }

const toastTrigger = document.getElementById('toastImprovement')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}


// NAMA HOMEEEEE



        function decodeText(){
            var text = document.getElementsByClassName('decode-text')[0];
            // debug with
            // console.log(text, text.children.length);
        
            // assign the placeholder array its places
            var state = [];
            for(var i = 0, j = text.children.length; i < j; i++ ){
                text.children[i].classList.remove('state-1','state-2','state-3');
                state[i] = i;
            }
        
            // shuffle the array to get new sequences each time
            var shuffled = shuffle(state);
         
            for(var i = 0, j = shuffled.length; i < j; i++ ){
                var child = text.children[shuffled[i]];
                classes = child.classList;
        
                // fire the first one at random times
                var state1Time = Math.round( Math.random() * (2000 - 300) ) + 50;
                if(classes.contains('text-animation')){ 
                    setTimeout(firstStages.bind(null, child), state1Time);
                }
            }
        }
        
        // send the node for later .state changes
        function firstStages(child){
            if( child.classList.contains('state-2') ){   
                child.classList.add('state-3');
            } else if( child.classList.contains('state-1') ){
                child.classList.add('state-2')
            } else if( !child.classList.contains('state-1') ){
                child.classList.add('state-1');
                setTimeout(secondStages.bind(null, child), 100);
            }    
        }
        function secondStages(child){
            if( child.classList.contains('state-1') ){
                child.classList.add('state-2')
                setTimeout(thirdStages.bind(null, child), 100);
            } 
            else if( !child.classList.contains('state-1') )
            {
                child.classList.add('state-1')
            }
        }
        function thirdStages(child){
            if( child.classList.contains('state-2') ){
                child.classList.add('state-3')
            }
        }
        
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
        
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
        
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }
        
        
        // Demo only stuff
        decodeText();
        
        // beware: refresh button can overlap this timer and cause state mixups
        setInterval(function(){ decodeText(); }, 10000);


// HEY_THEREE
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };



  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    loop: true,
    rotate: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    mousewheel: {
        invert: true,
    },
    
  });


  var swiperProject = new Swiper('.slider', {
    slidesPerView: 1,
    speed: 1000,
    grabCursor: true,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
    mousewheel: {
        invert: true,
    },
    
});




function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

