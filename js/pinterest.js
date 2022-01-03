


$(document).ready(function(){
    const pinOne = document.getElementById("citypop-pin");
    const pinTwo = document.getElementById("pixel-art-pin");
    const pinThree = document.getElementById("anime-pin");
    const cityPopBg = document.getElementById("citypop");
    const pixelArtBg = document.getElementById("pixel-art");
    const animeBg = document.getElementById("anime");

    

    pinOne.addEventListener("click", function(){
        cityPopBg.style.visibility = "visible";
        pixelArtBg.style.visibility = "hidden";
        animeBg.style.visibility = "hidden";
    });

    pinTwo.addEventListener("click", function(){
        pixelArtBg.style.visibility = "visible";
        cityPopBg.style.visibility = "hidden";
        animeBg.style.visibility = "hidden";
    });

    pinThree.addEventListener("click", function(){
        animeBg.style.visibility = "visible";
        cityPopBg.style.visibility = "hidden";
        pixelArtBg.style.visibility = "visible";
    });
});