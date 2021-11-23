//begin deel links
function reset(){
    let jvscrpt = document.querySelectorAll(".jvsc");
    let html = document.querySelectorAll(".htmll");
    let css = document.querySelectorAll(".csss");
    let bootstrp = document.querySelectorAll(".bootstrp");
    let afb = document.querySelectorAll(".afb");
    let misc = document.querySelectorAll(".misc");

    jvscrpt.forEach(el => el.classList.remove('sbonzichtbaar'));
    html.forEach(el => el.classList.remove('sbonzichtbaar'));
    css.forEach(el => el.classList.remove('sbonzichtbaar'));
    bootstrp.forEach(el => el.classList.remove('sbonzichtbaar'));
    afb.forEach(el => el.classList.remove('sbonzichtbaar'));
    misc.forEach(el => el.classList.remove('sbonzichtbaar'));
    jvscrpt.forEach(el => el.classList.remove('sbzichtbaar'));
    html.forEach(el => el.classList.remove('sbzichtbaar'));
    css.forEach(el => el.classList.remove('sbzichtbaar'));
    bootstrp.forEach(el => el.classList.remove('sbzichtbaar'));
    afb.forEach(el => el.classList.remove('sbzichtbaar'));
    misc.forEach(el => el.classList.remove('sbzichtbaar'));
}


function afb(){
    reset();
    let jvscrpt = document.querySelectorAll(".jvsc");
    let html = document.querySelectorAll(".htmll");
    let css = document.querySelectorAll(".csss");
    let bootstrp = document.querySelectorAll(".bootstrp");
    let misc = document.querySelectorAll(".misc");

    jvscrpt.forEach(el => el.classList.add('sbonzichtbaar'));
    html.forEach(el => el.classList.add('sbonzichtbaar'));
    css.forEach(el => el.classList.add('sbonzichtbaar'));
    bootstrp.forEach(el => el.classList.add('sbonzichtbaar'));
    misc.forEach(el => el.classList.add('sbonzichtbaar'));
}

function csss(){
    reset();
    let jvscrpt = document.querySelectorAll(".jvsc");
    let html = document.querySelectorAll(".htmll");
    let bootstrp = document.querySelectorAll(".bootstrp");
    let afb = document.querySelectorAll(".afb");
    let misc = document.querySelectorAll(".misc");

    jvscrpt.forEach(el => el.classList.add('sbonzichtbaar'));
    html.forEach(el => el.classList.add('sbonzichtbaar'));
    afb.forEach(el => el.classList.add('sbonzichtbaar'));
    bootstrp.forEach(el => el.classList.add('sbonzichtbaar'));
    misc.forEach(el => el.classList.add('sbonzichtbaar'));
}

function htmll(){
    reset();
    let jvscrpt = document.querySelectorAll(".jvsc");
    let css = document.querySelectorAll(".csss");
    let bootstrp = document.querySelectorAll(".bootstrp");
    let afb = document.querySelectorAll(".afb");
    let misc = document.querySelectorAll(".misc");

    jvscrpt.forEach(el => el.classList.add('sbonzichtbaar'));
    css.forEach(el => el.classList.add('sbonzichtbaar'));
    afb.forEach(el => el.classList.add('sbonzichtbaar'));
    bootstrp.forEach(el => el.classList.add('sbonzichtbaar'));
    misc.forEach(el => el.classList.add('sbonzichtbaar'));
}

function bootstrp(){
    reset();
    let jvscrpt = document.querySelectorAll(".jvsc");
    let css = document.querySelectorAll(".csss");
    let html = document.querySelectorAll(".htmll");
    let afb = document.querySelectorAll(".afb");
    let misc = document.querySelectorAll(".misc");

    jvscrpt.forEach(el => el.classList.add('sbonzichtbaar'));
    css.forEach(el => el.classList.add('sbonzichtbaar'));
    afb.forEach(el => el.classList.add('sbonzichtbaar'));
    html.forEach(el => el.classList.add('sbonzichtbaar'));
    misc.forEach(el => el.classList.add('sbonzichtbaar'));
}

function jvsc(){
    reset();
    let css = document.querySelectorAll(".csss");
    let html = document.querySelectorAll(".htmll");
    let afb = document.querySelectorAll(".afb");
    let bootstrp = document.querySelectorAll(".bootstrp");
    let misc = document.querySelectorAll(".misc");

    css.forEach(el => el.classList.add('sbonzichtbaar'));
    afb.forEach(el => el.classList.add('sbonzichtbaar'));
    html.forEach(el => el.classList.add('sbonzichtbaar'));
    bootstrp.forEach(el => el.classList.add('sbonzichtbaar'));
    misc.forEach(el => el.classList.add('sbonzichtbaar'));
}

function misc(){
    reset();
    let jvscrpt = document.querySelectorAll(".jvsc");
    let css = document.querySelectorAll(".csss");
    let html = document.querySelectorAll(".htmll");
    let afb = document.querySelectorAll(".afb");
    let bootstrp = document.querySelectorAll(".bootstrp");

    css.forEach(el => el.classList.add('sbonzichtbaar'));
    afb.forEach(el => el.classList.add('sbonzichtbaar'));
    html.forEach(el => el.classList.add('sbonzichtbaar'));
    bootstrp.forEach(el => el.classList.add('sbonzichtbaar'));
    jvscrpt.forEach(el => el.classList.add('sbonzichtbaar'));

}



function allb(){
    reset();
    let css = document.querySelectorAll(".csss");
    let html = document.querySelectorAll(".htmll");
    let afb = document.querySelectorAll(".afb");
    let bootstrp = document.querySelectorAll(".bootstrp");
    let jvscrpt = document.querySelectorAll(".jvsc");
    let misc = document.querySelectorAll(".misc");

    css.forEach(el => el.classList.add('sbzichtbaar'));
    afb.forEach(el => el.classList.add('sbzichtbaar'));
    html.forEach(el => el.classList.add('sbzichtbaar'));
    bootstrp.forEach(el => el.classList.add('sbzichtbaar'));
    jvscrpt.forEach(el => el.classList.add('sbzichtbaar'));
    misc.forEach(el => el.classList.add('sbzichtbaar'));
}
/* datum update */
var days = [];
var today = new Date();// date today
var oldDatearr = document.querySelectorAll(".olddate");// takes old date from html and puts in array
for (let i = 0;i < oldDatearr.length;i++){
    let oldDate = new Date(oldDatearr[i].innerHTML); // takes the first date from the array
    const msPerDay = 24 * 60 * 60 * 1000;//days formule
    let daysLeft = Math.floor((today - oldDate) / msPerDay);//new date minus old date
    days.push(daysLeft + " days ago");
}

/* datum injecteren*/
var injectie = document.querySelectorAll(".sbinj");//haalt classes op en steekt in array
for (var x = 0;x < injectie.length;x++){
    injectie[x].innerHTML = days[x];
}
/*einde datum injectie*/

/* begin toast 1 */
function sbtoast(){
    var toastTrigger = document.getElementById('liveToastBtn')
    var toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', function () {
            var toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
        })
    }
}

/* end toast 1*/
