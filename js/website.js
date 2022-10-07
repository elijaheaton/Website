window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let name = document.getElementById("name");
    let header = document.getElementById("header");
    let banner = document.getElementById("banner");
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        name.style.width = "0";
        //name.style.fontSize = "80%";
        name.style.fontsize = "2rem";
        console.log(name.style.fontsize);
        banner.style.marginTop = header.offsetHeight.toString() + "px";
    } else {
        name.style.width = "100%";
        //name.style.fontSize = "100%";
        name.style.fontsize = "4rem";
        banner.style.marginTop = header.offsetHeight.toString() + "px";
    }
}