$(document).ready(function(){
    
    const ALL = document.getElementById("all");
    const ALLContent = document.getElementById("all-my-drum-cover");
    const chainSmokers = document.getElementById("chainsmokers");
    const chainSmokersContent = document.getElementById("the-chainsmokres");
    const viEw = document.getElementById("view");
    const viEwContent = document.getElementById("vi-ew");
    const OLD = document.getElementById("old");
    const OLDContent = document.getElementById("o-l-d");
    const vLog = document.getElementById("vlog");
    const vLogContent = document.getElementById("v-log");
    const offiCial = document.getElementById("official");
    const offiCialContent = document.getElementById("offi-cial");
    const reMix = document.getElementById("remix");
    const reMixContent = document.getElementById("re-mix");
    const dubStep = document.getElementById("dubstep");
    const dubStepContent = document.getElementById("dub-step");
    const beSt = document.getElementById("best");
    const beStContent = document.getElementById("be-st");

    //
    //메인 메뉴 클릭
    ALL.addEventListener("click", function(){
        ALLContent.style.visibility = "visible";
        chainSmokersContent.style.visibility = "hidden";
        viEwContent.style.visibility = "hidden";
        OLDContent.style.visibility = "hidden";
        vLogContent.style.visibility = "hidden";
        offiCialContent.style.visibility = "hidden";
        reMixContent.style.visibility = "hidden";
        dubStepContent.style.visibility = "hidden";
        beStContent.style.visibility = "hidden";
        showContent();
        iframeDown();
    });

    chainSmokers.addEventListener("click", function(){   
        chainSmokersContent.style.visibility = "visible";
        ALLContent.style.visibility = "hidden";
        viEwContent.style.visibility = "hidden";
        OLDContent.style.visibility = "hidden";
        vLogContent.style.visibility = "hidden";
        offiCialContent.style.visibility = "hidden";
        reMixContent.style.visibility = "hidden";
        dubStepContent.style.visibility = "hidden";
        beStContent.style.visibility = "hidden";
        showContent();
        iframeDown();
    });

    viEw.addEventListener("click", function(){
        viEwContent.style.visibility = "visible";
        ALLContent.style.visibility = "hidden";
        chainSmokersContent.style.visibility = "hidden";
        OLDContent.style.visibility = "hidden";
        vLogContent.style.visibility = "hidden";
        offiCialContent.style.visibility = "hidden";
        reMixContent.style.visibility = "hidden";
        dubStepContent.style.visibility = "hidden";
        beStContent.style.visibility = "hidden";
        showContent();
        iframeDown();
    });

    OLD.addEventListener("click", function(){
        OLDContent.style.visibility = "visible";
        ALLContent.style.visibility = "hidden";
        chainSmokersContent.style.visibility = "hidden";
        viEwContent.style.visibility = "hidden";
        vLogContent.style.visibility = "hidden";
        offiCialContent.style.visibility = "hidden";
        reMixContent.style.visibility = "hidden";
        dubStepContent.style.visibility = "hidden";
        beStContent.style.visibility = "hidden";
        showContent();
        iframeDown();
    });

    vLog.addEventListener("click", function(){
        vLogContent.style.visibility = "visible";
        ALLContent.style.visibility = "hidden";
        chainSmokersContent.style.visibility = "hidden";
        viEwContent.style.visibility = "hidden";
        OLDContent.style.visibility = "hidden";
        offiCialContent.style.visibility = "hidden";
        reMixContent.style.visibility = "hidden";
        dubStepContent.style.visibility = "hidden";
        beStContent.style.visibility = "hidden";
        showContent();
        iframeDown();
    });

    offiCial.addEventListener("click", function(){
        offiCialContent.style.visibility = "visible";
        ALLContent.style.visibility = "hidden";
        chainSmokersContent.style.visibility = "hidden";
        viEwContent.style.visibility = "hidden";
        OLDContent.style.visibility = "hidden";
        vLogContent.style.visibility = "hidden";
        reMixContent.style.visibility = "hidden";
        dubStepContent.style.visibility = "hidden";
        beStContent.style.visibility = "hidden";
        showContent();
        iframeDown();
    });

    reMix.addEventListener("click", function(){
        reMixContent.style.visibility = "visible";
        ALLContent.style.visibility = "hidden";
        chainSmokersContent.style.visibility = "hidden";
        viEwContent.style.visibility = "hidden";
        OLDContent.style.visibility = "hidden";
        vLogContent.style.visibility = "hidden";
        offiCialContent.style.visibility = "hidden";
        dubStepContent.style.visibility = "hidden";
        beStContent.style.visibility = "hidden";
        showContent();
        iframeDown();
    });

    dubStep.addEventListener("click", function(){
        dubStepContent.style.visibility = "visible";
        ALLContent.style.visibility = "hidden";
        chainSmokersContent.style.visibility = "hidden";
        viEwContent.style.visibility = "hidden";
        OLDContent.style.visibility = "hidden";
        vLogContent.style.visibility = "hidden";
        offiCialContent.style.visibility = "hidden";
        reMixContent.style.visibility = "hidden";
        beStContent.style.visibility = "hidden";
        showContent();
        iframeDown();
    });

    beSt.addEventListener("click", function(){
        beStContent.style.visibility = "visible";
        ALLContent.style.visibility = "hidden";
        chainSmokersContent.style.visibility = "hidden";
        viEwContent.style.visibility = "hidden";
        OLDContent.style.visibility = "hidden";
        vLogContent.style.visibility = "hidden";
        offiCialContent.style.visibility = "hidden";
        reMixContent.style.visibility = "hidden";
        dubStepContent.style.visibility = "hidden";
        showContent();
        iframeDown();
    });

    function showContent(){
        document.getElementById("main").style.display = "none";
    };

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

    //
    function iframeDown(){
        pageMove.style.display = "none";
    }
    pageDown.addEventListener("click", function(){
        iframeDown();
    });
});

$(function(){
    $(".video-choice-list li").click(function(){
        $(".video-choice-list li").removeClass("active");
        $(this).addClass("active");
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
        $(".count").html("1");
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
        $(".count").html("2");
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
        $(".count").html("3");
    });

    $(".video-choice-list li:nth-of-type(4)").click(function(){
        $("#four").css("display", "block");
        $("#one").css("display", "none");
        $("#two").css("display", "none");
        $("#three").css("display", "none");
        $("#five").css("display", "none");
        $("#six").css("display", "none");
        $("#seven").css("display", "none");
        $("#eight").css("display", "none");
        $("#nine").css("display", "none");
        $("#ten").css("display", "none");
        $(".count").html("4");
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
        $(".count").html("5");
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
        $(".count").html("6");
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
        $(".count").html("7");
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
        $(".count").html("8");
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
        $(".count").html("9");
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
        $("#eight").css("display", "none");
        $("#nine").css("display", "none");
        $(".count").html("10");
    });

    $("#main_menu li").click(function(){
        $("#main_menu li").removeClass("activeA");
        $(this).addClass("activeA");
    });
});