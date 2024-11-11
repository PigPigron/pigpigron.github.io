function $(id) { return document.getElementById(id); }

window.onscroll = function () {
    var sb = $('scrollButton');
    if (pageYOffset >= 120) {
        sb.style.visibility = "visible";
        sb.style.opacity = 1;
    } else {
        sb.style.opacity = 0;
        sb.style.visibility = "hidden";
    }
};