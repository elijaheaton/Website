window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let name = document.getElementById("name");
    let header = document.getElementById("header");
    let banner = document.getElementById("banner");
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        name.style.width = "0";
        name.style.fontSize = "3rem";
        banner.style.marginTop = header.offsetHeight.toString() + "px";
    } else {
        name.style.width = "100%";
        name.style.fontSize = "5rem";
        banner.style.marginTop = header.offsetHeight.toString() + "px";
    }
}