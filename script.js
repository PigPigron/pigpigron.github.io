function showAndHide(toShow, toHide) {
    document.getElementById(toShow).style.display='block';
    document.getElementById(toHide).style.display='none';
    return false;
}

function showSamples() {
    showAndHide('samples', 'tos');
}
function showTos() {
    showAndHide('tos', 'samples');
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