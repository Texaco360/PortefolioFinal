var menuBtn = document.querySelector("#sidebarbuttonClb");
var menuOpen = true;
var sideBar = document.querySelector("#sidebarwrapperClb");
var timelineContainer = document.querySelector(".timeline-container")

menuBtn.addEventListener('click', () => {
    if(menuOpen === true) {
        sideBar.classList.add('closeClb');
        sideBar.classList.remove('openClb');
        menuBtn.classList.add('closeBtnClb');
        menuOpen = false;
        timelineContainer.classList.toggle("col-lg-8");
        timelineContainer.classList.toggle("offset-lg-4");


    } else {
        sideBar.classList.remove('closeClb');
        sideBar.classList.add('openClb');
        menuBtn.classList.remove('closeBtnClb');
        menuOpen = true;
        timelineContainer.classList.toggle("col-lg-8");
        timelineContainer.classList.toggle("offset-lg-4");
    }
});
var timelimeMenu = document.getElementsByClassName("nav-link");
console.log(timelimeMenu)
Array.from(timelimeMenu).forEach(li => {
    li.addEventListener("click",()=>{
        Array.from(timelimeMenu).forEach(ele => ele.classList.remove("active"))
        li.classList.toggle("active")
    })
})
//MOBILE MENU FLIP
var navbar = document.querySelector("#mobileMenu");
var img = document.querySelector("#mobiletrigger");
