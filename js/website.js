let media = window.matchMedia("(max-width: 776px)");
size(media);
media.addEventListener('resize', size);

window.onscroll = function() {scrollFunction()};



function scrollFunction() {
    let name = document.getElementById("name");
    let header = document.getElementById("header");
    let banner = document.getElementById("banner");
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        name.style.width = "0";
        name.style.fontSize = smaller;
        console.log(name.style.fontsize);
        banner.style.marginTop = header.offsetHeight.toString() + "px";
    } else {
        name.style.width = "100%";
        name.style.fontSize = larger;
        banner.style.marginTop = header.offsetHeight.toString() + "px";
    }
}

function size(media) {
    if (media.matches) {
        smaller = "1.5rem";
        larger = "3rem";
    }
    else {
        smaller = "2rem";
        larger = "4rem";
    }
}

