
//import './androidstudio.js';

let generate_button = document.getElementById('generate-btn');
generate_button.addEventListener('click',generate_carousel);
let aantal_panelen=1;
let aantal_fotos=1;

function generate_carousel(){

    //input
    let aantal_panelen = document.getElementById('aantalPanelen').value;
    let aantal_fotos = document.getElementById('aantalFotos').value;
    let metPijltjes = document.getElementById('metPijltjes');
    let metIndicators = document.getElementById('metIndicators');
    let kCarousel="";
    let kCarouselContent="";
    let kItemClass="carousel-item active";
    let nummer = 1;
    let breedte = [12,6,4,3,2][aantal_fotos-1];
    let indicators= "";
    let pijltjes="";

    //MET INDICATORS

    if(metIndicators.checked){
        indicators +=`
        <div class="carousel-indicators">`;
        let status=`class = "active" aria-current="true"`;
        for(let i=0;i<aantal_panelen;i++) {
            indicators += `
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="${i}" ${status} aria-label="Slide ${i + 1}"></button>`;
            status = "";
        }
        indicators += `
        </div>`
    }


    //INHOUD PANEEL
    for (let x=0;x<aantal_panelen;x++){
        let kCarouselPanelContent="";
        for (let j=0;j<aantal_fotos;j++){
            // <img src="../imagesD/image${nummer}.png" className="k-myItem mx-auto img-fluid" alt="afbeelding ${nummer}">
            kCarouselPanelContent +=
                `    <div class="col"> 
                         <div class="k-myItem my-5 p-3 fs-3 text-center">${nummer}</div>
                    </div> `;
            (j<aantal_fotos-1)?kCarouselPanelContent +="\n\t\t":kCarouselPanelContent+="";
            nummer++;
        }
        kCarouselContent +=
            `<div class="${kItemClass}">
                <div class="row gx-3 ">
                ${kCarouselPanelContent}
                </div> 
             </div>`;
        kItemClass ="carousel-item";
    }

    //TOEVOEGEN PIJLJES
    if(metPijltjes.checked){
        pijltjes+= `   
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>`;

    }


    //CAROUSEL AANMAKEN + INHOUD TOEVOEGEN
    kCarousel += `
<div class="row">
    <div id="carouselExample" class="carousel slide col-12 bg-secondary bg-gradient" data-bs-ride="carousel">${indicators} 
        <div class="carousel-inner">
            ${kCarouselContent}
        </div>${pijltjes}
    </div>
</div>`


    //output naar HTML PAGINA

    document.getElementById("html-output").textContent=kCarousel;
    document.getElementById("k-html").innerHTML=kCarousel;

    var element = document.getElementById("carouselExample");
    var myCarousel = new bootstrap.Carousel(element);
    myCarousel.cycle();
    hljs.highlightAll();


}




