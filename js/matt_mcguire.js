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

    const oneAVideo = document.getElementById("one-1");
    const twoAVideo = document.getElementById("two-1");
    const threeAVideo = document.getElementById("three-1");
    const fourAVideo = document.getElementById("four-1");
    const fiveAVideo = document.getElementById("five-1");
    const sixAVideo = document.getElementById("six-1");
    const sevenAVideo = document.getElementById("seven-1");
    const eightAVideo = document.getElementById("eight-1");
    const nineAVideo = document.getElementById("nine-1");
    const tenAVideo = document.getElementById("ten-1");
    const ytPageOne = document.getElementById("ytpage-1");   
    
    const oneBVideo = document.getElementById("one-2");
    const twoBVideo = document.getElementById("two-2");
    const threeBVideo = document.getElementById("three-2");
    const fourBVideo = document.getElementById("four-2");
    const fiveBVideo = document.getElementById("five-2"); 

    const oneCVideo = document.getElementById("one-1");
    const twoCVideo = document.getElementById("two-1");
    const threeCVideo = document.getElementById("three-1");
    const fourCVideo = document.getElementById("four-1");
    const fiveCVideo = document.getElementById("five-1");
    const sixCVideo = document.getElementById("six-1");
    const sevenCVideo = document.getElementById("seven-1");
    const eightCVideo = document.getElementById("eight-1");
    const nineCVideo = document.getElementById("nine-1");
    const tenCVideo = document.getElementById("ten-1");
    const elevenCVideo = document.getElementById("ten-1");

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
    ///////////////////////////////////////
    oneAVideo.addEventListener("click", function(){
        pageMove.src = "drum==1-1.html";
        pageMove.style.display = "block";
    });

    twoAVideo.addEventListener("click", function(){
        pageMove.src = "drum==2-1.html";
        pageMove.style.display = "block";
    });

    threeAVideo.addEventListener("click", function(){
        pageMove.src = "drum==3-1.html";
        pageMove.style.display = "block";
    });

    fourAVideo.addEventListener("click", function(){
        pageMove.src = "drum==4-1.html";
        pageMove.style.display = "block";
    });

    fiveAVideo.addEventListener("click", function(){
        pageMove.src = "drum==5-1.html";
        pageMove.style.display = "block";
    });

    sixAVideo.addEventListener("click", function(){
        pageMove.src = "drum==6-1.html";
        pageMove.style.display = "block";
    });

    sevenAVideo.addEventListener("click", function(){
        pageMove.src = "drum==7-1.html";
        pageMove.style.display = "block";
    });

    eightAVideo.addEventListener("click", function(){
        pageMove.src = "drum==8-1.html";
        pageMove.style.display = "block";
    });

    nineAVideo.addEventListener("click", function(){
        pageMove.src = "drum==9-1.html";
        pageMove.style.display = "block";
    });

    tenAVideo.addEventListener("click", function(){
        pageMove.src = "drum==10-1.html";
        pageMove.style.display = "block";
    });

    ytPageOne.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/c/MattMcGuireOfficial/featured";
        pageMove.style.display = "block";
    });
    /////////////////////////////
    oneBVideo.addEventListener("click", function(){
        pageMove.src = "drum==1-2.html";
        pageMove.style.display = "block";
    });
    twoBVideo.addEventListener("click", function(){
        pageMove.src = "drum==1-1.html";
        pageMove.style.display = "block";
    });
    threeBVideo.addEventListener("click", function(){
        pageMove.src = "drum==2-1.html";
        pageMove.style.display = "block";
    });
    fourBVideo.addEventListener("click", function(){
        pageMove.src = "drum==4-2.html";
        pageMove.style.display = "block";
    });
    fiveBVideo.addEventListener("click", function(){
        pageMove.src = "drum==5-2.html";
        pageMove.style.display = "block";
    });
    ////////////////////////////////
    oneCVideo.addEventListener("click", function(){
        pageMove.src = "drum==1-1.html";
        pageMove.style.display = "block";
    });

    twoCVideo.addEventListener("click", function(){
        pageMove.src = "drum==2-1.html";
        pageMove.style.display = "block";
    });

    threeCVideo.addEventListener("click", function(){
        pageMove.src = "drum==3-1.html";
        pageMove.style.display = "block";
    });

    fourCVideo.addEventListener("click", function(){
        pageMove.src = "drum==4-1.html";
        pageMove.style.display = "block";
    });

    fiveCVideo.addEventListener("click", function(){
        pageMove.src = "drum==5-1.html";
        pageMove.style.display = "block";
    });

    sixCVideo.addEventListener("click", function(){
        pageMove.src = "drum==6-1.html";
        pageMove.style.display = "block";
    });

    sevenCVideo.addEventListener("click", function(){
        pageMove.src = "drum==7-1.html";
        pageMove.style.display = "block";
    });

    eightCVideo.addEventListener("click", function(){
        pageMove.src = "drum==8-1.html";
        pageMove.style.display = "block";
    });

    nineCVideo.addEventListener("click", function(){
        pageMove.src = "drum==9-1.html";
        pageMove.style.display = "block";
    });

    tenCVideo.addEventListener("click", function(){
        pageMove.src = "drum==10-1.html";
        pageMove.style.display = "block";
    });

    elevenCVideo.addEventListener("click", function(){
        pageMove.src = "drum==10-1.html";
        pageMove.style.display = "block";
    });
    
    function showContent(){
        document.getElementById("main").style.display = "none";
    };
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

    $(".video-choice-list-1 li").click(function(){
        $(".video-choice-list-1 li").removeClass("active");
        $(this).addClass("active");
    });

    $(".video-choice-list-2 li").click(function(){
        $(".video-choice-list-2 li").removeClass("active");
        $(this).addClass("active");
    });

    $(".video-choice-list-3 li").click(function(){
        $(".video-choice-list-3 li").removeClass("active");
        $(this).addClass("active");
    });

    $("#main_menu li").click(function(){
        $("#main_menu li").removeClass("activeA");
        $(this).addClass("activeA");
    });
});

$(function(){

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
    //////////////////////////////////////////

    $(".video-choice-list-1 li:nth-of-type(1)").click(function(){
        $(".count-1").html("1");
    });

    $(".video-choice-list-1 li:nth-of-type(2)").click(function(){
        $(".count-1").html("2");
    });

    $(".video-choice-list-1 li:nth-of-type(3)").click(function(){
        $(".count-1").html("3");
    });

    $(".video-choice-list-1 li:nth-of-type(4)").click(function(){
        $(".count-1").html("4");
    });

    $(".video-choice-list-1 li:nth-of-type(5)").click(function(){
        $(".count-1").html("5");
    });

    $(".video-choice-list-1 li:nth-of-type(6)").click(function(){
        $(".count-1").html("6");
    });

    $(".video-choice-list-1 li:nth-of-type(7)").click(function(){
        $(".count-1").html("7");
    });

    $(".video-choice-list-1 li:nth-of-type(8)").click(function(){
        $(".count-1").html("8");
    });

    $(".video-choice-list-1 li:nth-of-type(9)").click(function(){
        $(".count-1").html("9");
    });

    $(".video-choice-list-1 li:nth-of-type(10)").click(function(){
        $(".count-1").html("10");
    });
    /////////////////////////////////////////////
    $(".video-choice-list-2 li:nth-of-type(1)").click(function(){
        $(".count-2").html("1");
    });

    $(".video-choice-list-2 li:nth-of-type(2)").click(function(){
        $(".count-2").html("2");
    });

    $(".video-choice-list-2 li:nth-of-type(3)").click(function(){
        $(".count-2").html("3");
    });

    $(".video-choice-list-2 li:nth-of-type(4)").click(function(){
        $(".count-2").html("4");
    });

    $(".video-choice-list-2 li:nth-of-type(5)").click(function(){
        $(".count-2").html("5");
    });

    /////////////////////////////////////////////
    $(".video-choice-list-3 li:nth-of-type(1)").click(function(){
        $(".count-3").html("1");
    });

    $(".video-choice-list-3 li:nth-of-type(2)").click(function(){
        $(".count-3").html("2");
    });

    $(".video-choice-list-3 li:nth-of-type(3)").click(function(){
        $(".count-3").html("3");
    });

    $(".video-choice-list-3 li:nth-of-type(4)").click(function(){
        $(".count-3").html("4");
    });

    $(".video-choice-list-3 li:nth-of-type(5)").click(function(){
        $(".count-3").html("5");
    });

    $(".video-choice-list-3 li:nth-of-type(6)").click(function(){
        $(".count-3").html("6");
    });

    $(".video-choice-list-3 li:nth-of-type(7)").click(function(){
        $(".count-3").html("7");
    });

    $(".video-choice-list-3 li:nth-of-type(8)").click(function(){
        $(".count-3").html("8");
    });

    $(".video-choice-list-3 li:nth-of-type(9)").click(function(){
        $(".count-3").html("9");
    });

    $(".video-choice-list-3 li:nth-of-type(10)").click(function(){
        $(".count-3").html("10");
    });

    $(".video-choice-list-3 li:nth-of-type(11)").click(function(){
        $(".count-3").html("11");
    });

});

$(function(){

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
    //////////////////////////////////
    $(".video-choice-list-1 li:nth-of-type(1)").click(function(){
        $("#one-1").css("display", "block");
        $(" #two-1").css("display", "none");
        $(" #three-1").css("display", "none");
        $("#four-1").css("display", "none");
        $("#five-1").css("display", "none");
        $("#six-1").css("display", "none");
        $("#seven-1").css("display", "none");
        $("#eight-1").css("display", "none");
        $("#nine-1").css("display", "none");
        $(" #ten-1").css("display", "none");
    });

    $(".video-choice-list-1 li:nth-of-type(2)").click(function(){
        $("#two-1").css("display", "block");
        $(" #one-1 ").css("display", "none");
        $("#three-1").css("display", "none");
        $("#four-1").css("display", "none");
        $(" #five-1").css("display", "none");
        $("#six-1").css("display", "none");
        $("#seven-1").css("display", "none");
        $("#eight-1").css("display", "none");
        $("#nine-1").css("display", "none");
        $("#ten-1").css("display", "none");
    });

    $(".video-choice-list-1 li:nth-of-type(3)").click(function(){
        $("#three-1").css("display", "block");
        $("#one-1").css("display", "none");
        $("#two-1").css("display", "none");
        $("#four-1").css("display", "none");
        $(" #five-1").css("display", "none");
        $("#six-1").css("display", "none");
        $("#seven-1").css("display", "none");
        $(" #eight-1").css("display", "none");
        $("#nine-1").css("display", "none");
        $("#ten-1").css("display", "none");
    });

    $(".video-choice-list-1 li:nth-of-type(4)").click(function(){
        $("#four-1").css("display", "block");
        $("#one-1").css("display", "none");
        $("#two-1").css("display", "none");
        $(" #three-1").css("display", "none");
        $("#five-1").css("display", "none");
        $("#six-1").css("display", "none");
        $(" #seven-1").css("display", "none");
        $(" #eight-1").css("display", "none");
        $(" #nine-1").css("display", "none");
        $("#ten-1").css("display", "none");
    });

    $(".video-choice-list-1 li:nth-of-type(5)").click(function(){
        $(" #five-1").css("display", "block");
        $(" #one-1").css("display", "none");
        $("#two-1").css("display", "none");
        $("#three-1").css("display", "none");
        $("#four-1").css("display", "none");
        $("#six-1").css("display", "none");
        $("#seven-1").css("display", "none");
        $(" #eight-1").css("display", "none");
        $("#nine-1").css("display", "none");
        $("#ten-1").css("display", "none");
    });

    $(".video-choice-list-1 li:nth-of-type(6)").click(function(){
        $("#six-1").css("display", "block");
        $(" #one-1").css("display", "none");
        $(" #two-1").css("display", "none");
        $(" #three-1").css("display", "none");
        $("#four-1").css("display", "none");
        $(" #five-1").css("display", "none");
        $("#seven-1").css("display", "none");
        $("#eight-1").css("display", "none");
        $("#nine-1").css("display", "none");
        $("#ten-1").css("display", "none");
    });

    $(".video-choice-list-1 li:nth-of-type(7)").click(function(){
        $("#seven-1").css("display", "block");
        $("#one-1").css("display", "none");
        $("#two-1").css("display", "none");
        $("#three-1").css("display", "none");
        $("#four-1").css("display", "none");
        $("#five-1").css("display", "none");
        $("#six-1").css("display", "none");
        $("#eight-1").css("display", "none");
        $(" #nine-1").css("display", "none");
        $(" #ten-1").css("display", "none");
    });

    $(".video-choice-list-1 li:nth-of-type(8)").click(function(){
        $("#eight-1").css("display", "block");
        $(" #one-1").css("display", "none");
        $("#two-1").css("display", "none");
        $(" #three-1").css("display", "none");
        $("#four-1").css("display", "none");
        $(" #five-1").css("display", "none");
        $("#six-1").css("display", "none");
        $("#seven-1").css("display", "none");
        $(" #nine-1").css("display", "none");
        $("#ten-1").css("display", "none");
    });

    $(".video-choice-list-1 li:nth-of-type(9)").click(function(){
        $("#nine-1").css("display", "block");
        $("#one-1").css("display", "none");
        $("#two-1").css("display", "none");
        $("#three-1").css("display", "none");
        $("#four-1").css("display", "none");
        $("#five-1").css("display", "none");
        $("#six-1").css("display", "none");
        $("#seven-1").css("display", "none");
        $("#eight-1").css("display", "none");
        $("#ten-1").css("display", "none");
    });

    $(".video-choice-list-1 li:nth-of-type(10)").click(function(){
        $("#ten-1").css("display", "block");
        $("#one-1").css("display", "none");
        $("#two-1").css("display", "none");
        $("#three-1").css("display", "none");
        $("#four-1").css("display", "none");
        $("#five-1").css("display", "none");
        $("#six-1").css("display", "none");
        $("#seven-1").css("display", "none");
        $("#eight-1").css("display", "none");
        $("#nine-1").css("display", "none");
    });
    ///////////////////////////////////////
    $(".video-choice-list-2 li:nth-of-type(1)").click(function(){
        $("#one-2").css("display", "block");
        $(" #two-2").css("display", "none");
        $(" #three-2").css("display", "none");
        $("#four-2").css("display", "none");
        $("#five-2").css("display", "none");
        $("#six-2").css("display", "none");
        $("#seven-2").css("display", "none");
        $("#eight-2").css("display", "none");
        $("#nine-2").css("display", "none");
        $(" #ten-2").css("display", "none");
    });

    $(".video-choice-list-2 li:nth-of-type(2)").click(function(){
        $("#two-2").css("display", "block");
        $(" #one-2").css("display", "none");
        $("#three-2").css("display", "none");
        $("#four-2").css("display", "none");
        $(" #five-2").css("display", "none");
        $("#six-2").css("display", "none");
        $("#seven-2").css("display", "none");
        $("#eight-2").css("display", "none");
        $("#nine-2").css("display", "none");
        $("#ten-2").css("display", "none");
    });

    $(".video-choice-list-2 li:nth-of-type(3)").click(function(){
        $("#three-2").css("display", "block");
        $("#one-2").css("display", "none");
        $("#two-2").css("display", "none");
        $("#four-2").css("display", "none");
        $(" #five-2").css("display", "none");
        $("#six-2").css("display", "none");
        $("#seven-2").css("display", "none");
        $(" #eight-2").css("display", "none");
        $("#nine-2").css("display", "none");
        $("#ten-2").css("display", "none");
    });

    $(".video-choice-list-2 li:nth-of-type(4)").click(function(){
        $("#four-2").css("display", "block");
        $("#one-2").css("display", "none");
        $("#two-2").css("display", "none");
        $(" #three-2").css("display", "none");
        $("#five-2").css("display", "none");
        $("#six-2").css("display", "none");
        $(" #seven-2").css("display", "none");
        $(" #eight-2").css("display", "none");
        $(" #nine-2").css("display", "none");
        $("#ten-2").css("display", "none");
    });

    $(".video-choice-list-2 li:nth-of-type(5)").click(function(){
        $(" #five-2").css("display", "block");
        $(" #one-2").css("display", "none");
        $("#two-2").css("display", "none");
        $("#three-2").css("display", "none");
        $("#four-2").css("display", "none");
        $("#six-2").css("display", "none");
        $("#seven-2").css("display", "none");
        $(" #eight-2").css("display", "none");
        $("#nine-2").css("display", "none");
        $("#ten-2").css("display", "none");
    });
    ///////////////////////////////////////
    $(".video-choice-list-3 li:nth-of-type(1)").click(function(){
        $("#one-3").css("display", "block");
        $(" #two-3").css("display", "none");
        $(" #three-3").css("display", "none");
        $("#four-3").css("display", "none");
        $("#five-3").css("display", "none");
        $("#six-3").css("display", "none");
        $("#seven-3").css("display", "none");
        $("#eight-3").css("display", "none");
        $("#nine-3").css("display", "none");
        $(" #ten-3").css("display", "none");
        $("#eleven-3").css("display", "none");
    });

    $(".video-choice-list-3 li:nth-of-type(2)").click(function(){
        $("#two-3").css("display", "block");
        $(" #one-3").css("display", "none");
        $("#three-3").css("display", "none");
        $("#four-3").css("display", "none");
        $(" #five-3").css("display", "none");
        $("#six-3").css("display", "none");
        $("#seven-3").css("display", "none");
        $("#eight-3").css("display", "none");
        $("#nine-3").css("display", "none");
        $("#ten-3").css("display", "none");
        $("#eleven-3").css("display", "none");
    });

    $(".video-choice-list-3 li:nth-of-type(3)").click(function(){
        $("#three-3").css("display", "block");
        $("#one-3").css("display", "none");
        $("#two-3").css("display", "none");
        $("#four-3").css("display", "none");
        $(" #five-3").css("display", "none");
        $("#six-3").css("display", "none");
        $("#seven-3").css("display", "none");
        $(" #eight-3").css("display", "none");
        $("#nine-3").css("display", "none");
        $("#ten-3").css("display", "none");
        $("#eleven-3").css("display", "none");
    });

    $(".video-choice-list-3 li:nth-of-type(4)").click(function(){
        $("#four-3").css("display", "block");
        $("#one-3").css("display", "none");
        $("#two-3").css("display", "none");
        $(" #three-3").css("display", "none");
        $("#five-3").css("display", "none");
        $("#six-3").css("display", "none");
        $(" #seven-3").css("display", "none");
        $(" #eight-3").css("display", "none");
        $(" #nine-3").css("display", "none");
        $("#ten-3").css("display", "none");
        $("#eleven-3").css("display", "none");
    });

    $(".video-choice-list-3 li:nth-of-type(5)").click(function(){
        $(" #five-3").css("display", "block");
        $(" #one-3").css("display", "none");
        $("#two-3").css("display", "none");
        $("#three-3").css("display", "none");
        $("#four-3").css("display", "none");
        $("#six-3").css("display", "none");
        $("#seven-3").css("display", "none");
        $(" #eight-3").css("display", "none");
        $("#nine-3").css("display", "none");
        $("#ten-3").css("display", "none");
        $("#eleven-3").css("display", "none");
    });

    $(".video-choice-list-3 li:nth-of-type(6)").click(function(){
        $("#six-3").css("display", "block");
        $(" #one-3").css("display", "none");
        $(" #two-3").css("display", "none");
        $(" #three-3").css("display", "none");
        $("#four-3").css("display", "none");
        $(" #five-3").css("display", "none");
        $("#seven-3").css("display", "none");
        $("#eight-3").css("display", "none");
        $("#nine-3").css("display", "none");
        $("#ten-3").css("display", "none");
        $("#eleven-3").css("display", "none");
    });

    $(".video-choice-list-3 li:nth-of-type(7)").click(function(){
        $("#seven-3").css("display", "block");
        $("#one-3").css("display", "none");
        $("#two-3").css("display", "none");
        $("#three-3").css("display", "none");
        $("#four-3").css("display", "none");
        $("#five-3").css("display", "none");
        $("#six-3").css("display", "none");
        $("#eight-3").css("display", "none");
        $(" #nine-3").css("display", "none");
        $(" #ten-3").css("display", "none");
        $("#eleven-3").css("display", "none");
    });

    $(".video-choice-list-3 li:nth-of-type(8)").click(function(){
        $("#eight-3").css("display", "block");
        $(" #one-3").css("display", "none");
        $("#two-3").css("display", "none");
        $(" #three-3").css("display", "none");
        $("#four-3").css("display", "none");
        $(" #five-3").css("display", "none");
        $("#six-3").css("display", "none");
        $("#seven-3").css("display", "none");
        $(" #nine-3").css("display", "none");
        $("#ten-3").css("display", "none");
        $("#eleven-3").css("display", "none");
    });

    $(".video-choice-list-3 li:nth-of-type(9)").click(function(){
        $("#nine-3").css("display", "block");
        $("#one-3").css("display", "none");
        $("#two-3").css("display", "none");
        $("#three-3").css("display", "none");
        $("#four-3").css("display", "none");
        $("#five-3").css("display", "none");
        $("#six-3").css("display", "none");
        $("#seven-3").css("display", "none");
        $("#eight-3").css("display", "none");
        $("#ten-3").css("display", "none");
        $("#eleven-3").css("display", "none");
    });

    $(".video-choice-list-3 li:nth-of-type(10)").click(function(){
        $("#ten-3").css("display", "block");
        $("#one-3").css("display", "none");
        $("#two-3").css("display", "none");
        $("#three-3").css("display", "none");
        $("#four-3").css("display", "none");
        $("#five-3").css("display", "none");
        $("#six-3").css("display", "none");
        $("#seven-3").css("display", "none");
        $("#eight-3").css("display", "none");
        $("#nine-3").css("display", "none");
        $("#eleven-3").css("display", "none");
    });

    $(".video-choice-list-3 li:nth-of-type(11)").click(function(){
        $("#eleven-3").css("display", "block");
        $("#one-3").css("display", "none");
        $("#two-3").css("display", "none");
        $("#three-3").css("display", "none");
        $("#four-3").css("display", "none");
        $("#five-3").css("display", "none");
        $("#six-3").css("display", "none");
        $("#seven-3").css("display", "none");
        $("#eight-3").css("display", "none");
        $("#nine-3").css("display", "none");
        $("#ten-3").css("display", "none");
    });
})