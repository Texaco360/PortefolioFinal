/*DEEL TODO LIJST */
var list=[];
var txtItem = "";
var total=0;

var uList = document.getElementById("td");
uList.addEventListener("click",crossOut);
var eraseBtn= document.getElementById("eraseBtn");
eraseBtn.addEventListener("click",eraseList);

function addListItem() {
    let inputBox=document.getElementById('txtInput');
    txtItem = inputBox.value;
    if (txtItem !== "") {
        var newEl = document.createElement('LI');
        var newText = document.createTextNode(txtItem);
        var newBtn = document.createElement("input");
        newBtn.type = "button";
        newBtn.value = "";
        newBtn.className="btn-close";
        newEl.appendChild(newText);
        newEl.appendChild(newBtn);
        newEl.setAttribute('class', 'list-group-item d-flex justify-content-between');
        var position = document.getElementById('uList');
        position.appendChild(newEl);
        updateTaakTotaal(total+=1);
        inputBox.value="";
        inputBox.focus();
    }
}
function updateTaakTotaal(total){
    if (total==1){
        document.getElementById("total").innerHTML = `${total} taak`;
    }else{
        document.getElementById("total").innerHTML = `${total} taken`;
    }
}


function crossOut(e){
    var target = e.target
    var parent=target.parentNode;
    var grandparent=target.parentNode.parentNode;
    if(parent.tagName==="LI"){
        grandparent.removeChild(parent);
        updateTaakTotaal(total-=1);
    }
}


function eraseList(){
    var lijst = document.getElementById("uList");
    lijst.innerHTML="";
    total =0;
    updateTaakTotaal(total);
}

// Get the input field
var input = document.getElementById("txtInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keydown", function(event) {

    // Number 13 is the "Enter" key on the keyboard
    if (event.key === "Enter") {
        event.preventDefault();
        //alert('enter pressed');
        addListItem();
    }
},false);