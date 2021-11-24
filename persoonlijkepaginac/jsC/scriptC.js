<!--BEGIN NAVBAR LODE-->
var menuBtn = document.querySelector("#sidebarbuttonClb");
var menuOpen = true;
var sideBar = document.querySelector("#sidebarwrapperClb");
var mainPage = document.querySelector("#mainwrapperClb");

menuBtn.addEventListener('click', () => {
    if(menuOpen === true) {
        sideBar.classList.add('closeClb');
        sideBar.classList.remove('openClb');
        menuBtn.classList.add('closeBtnClb');
        mainPage.classList.add('closeMainClb');
        menuOpen = false;
    } else {
        sideBar.classList.remove('closeClb');
        sideBar.classList.add('openClb');
        menuBtn.classList.remove('closeBtnClb');
        mainPage.classList.remove('closeMainClb');
        menuOpen = true;
    }
});
var sideBtn = document.querySelector("#floatingimgClb");
var closeBtn = document.querySelector(".fa-window-close");
var floatBar = document.querySelector("#floatingnavulClb");

sideBtn.addEventListener('click', () => {
    floatBar.classList.add('closefloatingnavClb');
});
closeBtn.addEventListener('click', () =>{
    floatBar.classList.remove('closefloatingnavClb');
});

<!--EINDE NAVBAR LODE-->
<!--BEGIN HOME GEOFFREY-->
<!--EINDE HOME GEOFFREY-->
<!--BEGIN PORTFOLIO GREGORY-->
<!--EINDE PORTFOLIO GREGORY-->
/* BEGIN NAVBAR LODE */
/* EINDE NAVBAR LODE */

/* BEGIN HOME GEOFFREY */
/* EINDE HOME GEOFFREY */

/* BEGIN PORTFOLIO GREGORY */
AOS.init();

// Masonry
var msnry = new Masonry('.grid', {
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition: true
});

// imagesLoaded
imagesLoaded(document.querySelector('#portfolio'), function (instance) {
	console.log('all imagesC are loaded');
});
/* EINDE PORTFOLIO GREGORY */