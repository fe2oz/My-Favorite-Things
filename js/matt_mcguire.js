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
        $('iframe').attr('src', $('iframe').attr('src'));
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
        $('iframe').attr('src', $('iframe').attr('src'));
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
        $('iframe').attr('src', $('iframe').attr('src'));
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
        $('iframe').attr('src', $('iframe').attr('src'));
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
        $('iframe').attr('src', $('iframe').attr('src'));
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
        $('iframe').attr('src', $('iframe').attr('src'));
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
        $('iframe').attr('src', $('iframe').attr('src'));
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
        $('iframe').attr('src', $('iframe').attr('src'));
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
        $('iframe').attr('src', $('iframe').attr('src'));
    });

    function showContent(){
        document.getElementById("main").style.display = "none";
    };

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

    $(".video-choice-list-2 li").click(function(){
        $(".video-choice-list-2 li").removeClass("active");
        $(this).addClass("active");
    });

    $("#main_menu li").click(function(){
        $("#main_menu li").removeClass("activeA");
        $(this).addClass("activeA");
    });
});