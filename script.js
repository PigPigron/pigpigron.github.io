function $(id) { return document.getElementById(id); }

function showAndHide(toShow, toHide) {
    $(toShow).style.display='block';
    $(toHide).style.display='none';
    return false;
}

function showSamples() {
    showAndHide('samples', 'tos');
    location.hash = '#samples';
}
function showTos() {
    showAndHide('tos', 'samples');
    location.hash = '#tos';
}

function gotoSamples() { window.location.href = "main.html#samples"; }
function gotoTos() { window.location.href = "main.html#tos"; }

function loadMain() {
    if (window.location.hash === '#samples') {
        showSamples();
    } 
    else {
        showTos();
    }
}

function checkSketch() {
    var sketchCheck = $("sketchCheck");
    
    if (sketchCheck.checked == false) {
        return;
    }
    
    var colourCheck = $("colourCheck");
    var shadeCheck = $("shadeCheck");
    
    colourCheck.checked = false;
    shadeCheck.checked = false;
}

function checkColour() {
    var colourCheck = $("colourCheck");

    
    if (colourCheck.checked == false) {
        return;
    }
    
    var sketchCheck = $("sketchCheck");
    var shadeCheck = $("shadeCheck");
    
    sketchCheck.checked = false;
    shadeCheck.checked = false;
}

function checkShaded() {
    var shadeCheck = $("shadeCheck");
    
    if (shadeCheck.checked == false) {
        return;
    }
    
    var sketchCheck = $("sketchCheck");
    var colourCheck = $("colourCheck");
    
    sketchCheck.checked = false;
    colourCheck.checked = false;
}

function calculatePrice() {
    var sketchCheck = $("sketchCheck");
    var colourCheck = $("colourCheck");
    var shadeCheck = $("shadeCheck");
    var characterAmt = $("characterAmt");
    var backgroundCheck = $("backgroundCheck");
    var text = $("calculatedPrice");
    
    var priceMultiplier = 0;
    var sketchPrice = 30;
    var colourPrice = 50;
    var shadedPrice = 70;
    var newPrice = 0;
    
    if (sketchCheck.checked == true) {
        newPrice = sketchPrice;
    }
    if (colourCheck.checked == true) {
        newPrice = colourPrice;
    }
    if (shadeCheck.checked == true) {
        newPrice = shadedPrice;
    }
    
    if (characterAmt.value == "") {
        newPrice = 0;
    } else {
        priceMultiplier = (((characterAmt.value - 1) * 0.5) + 1);
    }
    
    if (backgroundCheck.checked == true) {
        priceMultiplier += 0.5;
    }
    
    newPrice *= priceMultiplier;
    
    text.innerHTML = "Total Cost: $" + newPrice;
}