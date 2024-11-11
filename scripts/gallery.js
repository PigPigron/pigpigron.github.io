function $(id) { return document.getElementById(id); }



function loadSamples() {
    if (window.location.hash === '#sketch') {
        filterSketch();
    } else if (window.location.hash === '#colour'){
        filterColour();
    } else if (window.location.hash === '#shade'){
        filterShade();
    }else if (window.location.hash === '#ref'){
        filterRef();
    } else {
        setAll(true);
    }
    disableNSFW();
}

function setAll(state) {
    setSketches(state);
    setColours(state);
    setShades(state);
    setRefs(state);
    setStickers(state);
}

function setSketches(state) {
    var el = $('sketches');
    setter(el, state);
}
function setColours(state) {
    var el = $('coloured');
    setter(el, state);
}
function setShades(state) {
    var el = $('shaded');
    setter(el, state);
}
function setRefs(state) {
    var el = $('refs');
    setter(el, state);
}
function setStickers(state) {
    var el = $('stickers');
    setter(el, state);
}
function setter(el, state) {
    if (state) {
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }
}

function filterSketch() {
    setSketches(true);
    setColours(false);
    setShades(false);
    setRefs(false);
    setStickers(false);
}

function filterColour() {
    setSketches(false);
    setColours(true);
    setShades(false);
    setRefs(false);
    setStickers(false);
}

function filterShade() {
    setSketches(false);
    setColours(false);
    setShades(true);
    setRefs(false);
    setStickers(false);
}

function filterRef() {
    setSketches(false);
    setColours(false);
    setShades(false);
    setRefs(true);
    setStickers(false);
}

function filterSticker() {
    setSketches(false);
    setColours(false);
    setShades(false);
    setRefs(false);
    setStickers(true);
}



function toggleNSFW() {
    if ($("nsfwToggle").innerHTML.match("✔")) {
        disableNSFW();
    } else {
        enableNSFW();
    }
}

function enableNSFW() {
    $("nsfwToggle").innerHTML = "✔";
    $("nSketches").style.display = "block";
    $("nColoured").style.display = "block";
    $("nShaded").style.display = "block";
}

function disableNSFW() {
    $("nsfwToggle").innerHTML = "✖";
    $("nSketches").style.display = "none";
    $("nColoured").style.display = "none";
    $("nShaded").style.display = "none";
}