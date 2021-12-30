$(document).ready(function(){
    
    //
    //비디오 클릭시 아이프레임
    const pageMove = document.getElementById("pagemove");
    const pageDown = document.getElementById("prev");
    const oneVideo = document.getElementById("one");
    const twoVideo = document.getElementById("two");
    const threeVideo = document.getElementById("three");
    const fourVideo = document.getElementById("four");
    const fiveVideo = document.getElementById("five");
    const sixVideo = document.getElementById("six");
    const sevenVideo = document.getElementById("seven");
    const eightVideo = document.getElementById("eight");
    const nineVideo = document.getElementById("nine");
    const tenVideo = document.getElementById("ten");
    const ytPage = document.getElementById("ytpage");
    
    oneVideo.addEventListener("click", function(){
        pageMove.src = "drum==1.html";
        pageMove.style.display = "block";
    });

    twoVideo.addEventListener("click", function(){
        pageMove.src = "drum==2.html";
        pageMove.style.display = "block";
    });

    threeVideo.addEventListener("click", function(){
        pageMove.src = "drum==3.html";
        pageMove.style.display = "block";
    });

    fourVideo.addEventListener("click", function(){
        pageMove.src = "drum==4.html";
        pageMove.style.display = "block";
    });

    fiveVideo.addEventListener("click", function(){
        pageMove.src = "drum==5.html";
        pageMove.style.display = "block";
    });

    sixVideo.addEventListener("click", function(){
        pageMove.src = "drum==6.html";
        pageMove.style.display = "block";
    });

    sevenVideo.addEventListener("click", function(){
        pageMove.src = "drum==7.html";
        pageMove.style.display = "block";
    });

    eightVideo.addEventListener("click", function(){
        pageMove.src = "drum==8.html";
        pageMove.style.display = "block";
    });

    nineVideo.addEventListener("click", function(){
        pageMove.src = "drum==9.html";
        pageMove.style.display = "block";
    });

    tenVideo.addEventListener("click", function(){
        pageMove.src = "drum==10.html";
        pageMove.style.display = "block";
    });

    ytPage.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/c/MattMcGuireOfficial/featured";
        pageMove.style.display = "block";
    });

    //
    function iframeDown(){
        pageMove.style.display = "none";
    }
    pageDown.addEventListener("click", function(){
        iframeDown();
    });

    $(function(){
        $('#prev').click(function(){      
            $('iframe').attr('src', $('iframe').attr('src'));
        });
    });
});

$(function(){
    $(".video-choice-list li").click(function(){
        $(".video-choice-list li").removeClass("active");
        $(this).addClass("active");
    });

    $(".video-choice-list-1 li").click(function(){
        $(".video-choice-list-1 li").removeClass("active");
        $(this).addClass("active");
    });

    $(".video-choice-list li:nth-of-type(1)").click(function(){
        $(".count").html("1");
    });

    $(".video-choice-list li:nth-of-type(2)").click(function(){
        $(".count").html("2");
    });

    $(".video-choice-list li:nth-of-type(3)").click(function(){
        $(".count").html("3");
    });

    $(".video-choice-list li:nth-of-type(4)").click(function(){
        $(".count").html("4");
    });

    $(".video-choice-list li:nth-of-type(5)").click(function(){
        $(".count").html("5");
    });

    $(".video-choice-list li:nth-of-type(6)").click(function(){
        $(".count").html("6");
    });

    $(".video-choice-list li:nth-of-type(7)").click(function(){
        $(".count").html("7");
    });

    $(".video-choice-list li:nth-of-type(8)").click(function(){
        $(".count").html("8");
    });

    $(".video-choice-list li:nth-of-type(9)").click(function(){
        $(".count").html("9");
    });

    $(".video-choice-list li:nth-of-type(10)").click(function(){
        $(".count").html("10");
    });


    $(".video-choice-list li:nth-of-type(1)").click(function(){
        $("#one").css("display", "block");
        $("#two").css("display", "none");
        $("#three").css("display", "none");
        $("#four").css("display", "none");
        $("#five").css("display", "none");
        $("#six").css("display", "none");
        $("#seven").css("display", "none");
        $("#eight").css("display", "none");
        $("#nine").css("display", "none");
        $("#ten").css("display", "none");
    });

    $(".video-choice-list li:nth-of-type(2)").click(function(){
        $("#two").css("display", "block");
        $("#one").css("display", "none");
        $("#three").css("display", "none");
        $("#four").css("display", "none");
        $("#five").css("display", "none");
        $("#six").css("display", "none");
        $("#seven").css("display", "none");
        $("#eight").css("display", "none");
        $("#nine").css("display", "none");
        $("#ten").css("display", "none");
    });

    $(".video-choice-list li:nth-of-type(3)").click(function(){
        $("#three").css("display", "block");
        $("#one").css("display", "none");
        $("#two").css("display", "none");
        $("#four").css("display", "none");
        $("#five").css("display", "none");
        $("#six").css("display", "none");
        $("#seven").css("display", "none");
        $("#eight").css("display", "none");
        $("#nine").css("display", "none");
        $("#ten").css("display", "none");
    });

    $(".video-choice-list li:nth-of-type(4)").click(function(){
        $("#four").css("display", "block");
        $("#one").css("display", "none");
        $("#two").css("display", "none");
        $("#three").css("display", "none");
        $("#five").css("display", "none");
        $("#six").css("display", "none");
        $("#seven,").css("display", "none");
        $("#eight").css("display", "none");
        $("#nine").css("display", "none");
        $("#ten").css("display", "none");
    });

    $(".video-choice-list li:nth-of-type(5)").click(function(){
        $("#five").css("display", "block");
        $("#one").css("display", "none");
        $("#two").css("display", "none");
        $("#three").css("display", "none");
        $("#four").css("display", "none");
        $("#six").css("display", "none");
        $("#seven").css("display", "none");
        $("#eight").css("display", "none");
        $("#nine").css("display", "none");
        $("#ten").css("display", "none");
    });

    $(".video-choice-list li:nth-of-type(6)").click(function(){
        $("#six").css("display", "block");
        $("#one").css("display", "none");
        $("#two").css("display", "none");
        $("#three").css("display", "none");
        $("#four").css("display", "none");
        $("#five").css("display", "none");
        $("#seven").css("display", "none");
        $("#eight").css("display", "none");
        $("#nine").css("display", "none");
        $("#ten").css("display", "none");
    });

    $(".video-choice-list li:nth-of-type(7)").click(function(){
        $("#seven").css("display", "block");
        $("#one").css("display", "none");
        $("#two").css("display", "none");
        $("#three").css("display", "none");
        $("#four").css("display", "none");
        $("#five").css("display", "none");
        $("#six").css("display", "none");
        $("#eight").css("display", "none");
        $("#nine").css("display", "none");
        $("#ten").css("display", "none");
    });

    $(".video-choice-list li:nth-of-type(8)").click(function(){
        $("#eight").css("display", "block");
        $("#one").css("display", "none");
        $("#two").css("display", "none");
        $("#three").css("display", "none");
        $("#four").css("display", "none");
        $("#five").css("display", "none");
        $("#six").css("display", "none");
        $("#seven").css("display", "none");
        $("#nine").css("display", "none");
        $("#ten").css("display", "none");
    });

    $(".video-choice-list li:nth-of-type(9)").click(function(){
        $("#nine").css("display", "block");
        $("#one").css("display", "none");
        $("#two").css("display", "none");
        $("#three").css("display", "none");
        $("#four").css("display", "none");
        $("#five").css("display", "none");
        $("#six").css("display", "none");
        $("#seven").css("display", "none");
        $("#eight").css("display", "none");
        $("#ten").css("display", "none");
    });

    $(".video-choice-list li:nth-of-type(10)").click(function(){
        $("#ten").css("display", "block");
        $("#one").css("display", "none");
        $("#two").css("display", "none");
        $("#three").css("display", "none");
        $("#four").css("display", "none");
        $("#five").css("display", "none");
        $("#six").css("display", "none");
        $("#seven").css("display", "none");
        $("#eight,").css("display", "none");
        $("#nine").css("display", "none");
    });
});