
// BEGIN NAVBAR


// EINDE NAVBAR

//WAT DOEN WE BEGIN
//HERO
// begin typewriting effect
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

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
    var elements = document.getElementsByClassName('typewriteAls');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewriteAls  > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
// einde typewriting effect

// BEGIN COUNTERS
//begin draaien van tellers
var counters = document.querySelectorAll('.counterAls');
var speed =  600;

counters.forEach(counter =>{
    var updateCount = () =>{
        var target = parseInt(counter.getAttribute('data-target'));
        var count = parseInt(counter.innerText);

        var inc = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + inc);    //math ceil om cijfers na de komma te vermijden
            setTimeout(updateCount, 1);
        }else {
            count.innerText = target;
        }
    }
    updateCount();
});
//einde draaien van de tellers

/*smooth scroll */
/*$(document).ready(function(){
    Add smooth scrolling to all links
    $("a").on('click', function(event) {

        Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});*/



// EINDE COUNTERS

//EINDE HERO

//WAT DOEN WE EINDE

//TIJDSLIJN BEGIN
//TIJDSLIJN EINDE


//WIE ZIJN WE BEGIN
//WIE ZIJN WE EINDE



//FOOTER
//EINDE FOOTER