


$(document).ready(function(){
    const pinOne = document.getElementById("citypop-pin");
    const pinTwo = document.getElementById("pixelart-pin");
    const pinThree = document.getElementById("anime-pin");


    

    pinOne.addEventListener("click", function(){
        document.getElementById("citypop").style.visibility = "visible";
        document.getElementById("pixelart").style.visibility = "hidden";
        document.getElementById("anime").style.visibility = "hidden";
    });

    pinTwo.addEventListener("click", function(){
        document.getElementById("pixelart").style.visibility = "visible";
        document.getElementById("citypop").style.visibility = "hidden";
        document.getElementById("anime").style.visibility = "hidden";
    });

    pinThree.addEventListener("click", function(){
        document.getElementById("anime").style.visibility = "visible";
        document.getElementById("citypop").style.visibility = "hidden";
        document.getElementById("pixelart").style.visibility = "hidden";
    });


    
    
});


$(function(){
    $(".pinbox li").click(function(){
        $(".pinbox li").removeClass("activeA");
        $(this).addClass("activeA")
    })
})