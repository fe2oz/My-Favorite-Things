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

    const oneCVideo = document.getElementById("one-3");
    const twoCVideo = document.getElementById("two-3");
    const threeCVideo = document.getElementById("three-3");
    const fourCVideo = document.getElementById("four-3");
    const fiveCVideo = document.getElementById("five-3");
    const sixCVideo = document.getElementById("six-3");
    const sevenCVideo = document.getElementById("seven-3");
    const eightCVideo = document.getElementById("eight-3");
    const nineCVideo = document.getElementById("nine-3");
    const tenCVideo = document.getElementById("ten-3");
    const elevenCVideo = document.getElementById("eleven-3");

    const oneDVideo = document.getElementById("one-4");
    const twoDVideo = document.getElementById("two-4");
    const threeDVideo = document.getElementById("three-4");
    const fourDVideo = document.getElementById("four-4");
    const fiveDVideo = document.getElementById("five-4");

    const oneEVideo = document.getElementById("one-5");
    const twoEVideo = document.getElementById("two-5");
    const threeEVideo = document.getElementById("three-5");
    const fourEVideo = document.getElementById("four-5");

    const oneFVideo = document.getElementById("one-6");
    const twoFVideo = document.getElementById("two-6");
    const threeFVideo = document.getElementById("three-6");
    const fourFVideo = document.getElementById("four-6");
    const fiveFVideo = document.getElementById("five-6");
    const sixFVideo = document.getElementById("six-6");
    const sevenFVideo = document.getElementById("seven-6");
    const eightFVideo = document.getElementById("eight-6");
    const nineFVideo = document.getElementById("nine-6");
    const tenFVideo = document.getElementById("ten-6");
    const ytPageTwo = document.getElementById("ytpage-2");   

    const oneGVideo = document.getElementById("one-7");
    const twoGVideo = document.getElementById("two-7");
    const threeGVideo = document.getElementById("three-7");
    const fourGVideo = document.getElementById("four-7");
    const fiveGVideo = document.getElementById("five-7");
    const sixGVideo = document.getElementById("six-7");
    const sevenGVideo = document.getElementById("seven-7");

    const oneHVideo = document.getElementById("one-8");
    const twoHVideo = document.getElementById("two-8");
    const threeHVideo = document.getElementById("three-8");
    const fourHVideo = document.getElementById("four-8");
    const fiveHVideo = document.getElementById("five-8");
    const sixHVideo = document.getElementById("six-8");
    const sevenHVideo = document.getElementById("seven-8");
    const eightHVideo = document.getElementById("eight-8");
    const nineHVideo = document.getElementById("nine-8");
    const tenHVideo = document.getElementById("ten-8");
    const ytPageThree = document.getElementById("ytpage-3");
   
    ///////////////////////// all my drum covers
    oneVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/IZQXoBTIE80";
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
        pageMove.src = "https://www.youtube.com/embed/d9qmvcyEOsE";
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
        pageMove.src = "https://www.youtube.com/embed/4Dh6TZjxEkA";
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
        pageMove.src = "https://www.youtube.com/embed/watch?v=d9qmvcyEOsE&list=PLcCKnIzyTeeqUNQWEbO6x5tuAO3IS0hpa";
        pageMove.style.display = "block";
    });
    /////////////////////////////////////// the chainsmokers
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
        pageMove.src = "https://www.youtube.com/embed/5pxfJuDxwNw";
        pageMove.style.display = "block";
    });

    sixAVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/Fn_sFTcHQbM";
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
        pageMove.src = "https://www.youtube.com/embed/dfXAf51Kg_Y";
        pageMove.style.display = "block";
    });

    tenAVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/afsed2OUxGg";
        pageMove.style.display = "block";
    });

    ytPageOne.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/watch?v=_hRIM1SJnQI&list=PLcCKnIzyTeep_iEIFjameTp4AFBssVk9b";
        pageMove.style.display = "block";
    });
    ///////////////////////////// 10 million views+
    oneBVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/gvNQYCzMnF4";
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
    //////////////////////////////// old drum covers
    oneCVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/7AOtgu3_3_8";
        pageMove.style.display = "block";
    });

    twoCVideo.addEventListener("click", function(){
        pageMove.src = "drum==2-3.html";
        pageMove.style.display = "block";
    });

    threeCVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/d1-bXoWpZPc";
        pageMove.style.display = "block";
    });

    fourCVideo.addEventListener("click", function(){
        pageMove.src = "drum==4-3.html";
        pageMove.style.display = "block";
    });

    fiveCVideo.addEventListener("click", function(){
        pageMove.src = "drum==5-3.html";
        pageMove.style.display = "block";
    });

    sixCVideo.addEventListener("click", function(){
        pageMove.src = "drum==6-3.html";
        pageMove.style.display = "block";
    });

    sevenCVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/ODPKUlFolIY";
        pageMove.style.display = "block";
    });

    eightCVideo.addEventListener("click", function(){
        pageMove.src = "drum==8-3.html";
        pageMove.style.display = "block";
    });

    nineCVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/xx5cnuM0Om4";
        pageMove.style.display = "block";
    });

    tenCVideo.addEventListener("click", function(){
        pageMove.src = "drum==10-3.html";
        pageMove.style.display = "block";
    });

    elevenCVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/lfrassTAOQU";
        pageMove.style.display = "block";
    });
    //////////////////////////////// vlogs
    oneDVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/CCSFMghgt8U";
        pageMove.style.display = "block";
    });

    twoDVideo.addEventListener("click", function(){
        pageMove.src = "drum==2-4.html";
        pageMove.style.display = "block";
    });

    threeDVideo.addEventListener("click", function(){
        pageMove.src = "drum==3-4.html";
        pageMove.style.display = "block";
    });

    fourDVideo.addEventListener("click", function(){
        pageMove.src = "drum==4-4.html";
        pageMove.style.display = "block";
    });

    fiveDVideo.addEventListener("click", function(){
        pageMove.src = "drum==5-4.html";
        pageMove.style.display = "block";
    });
     //////////////////////////////// official artist mixes
     oneEVideo.addEventListener("click", function(){
        pageMove.src = "drum==1-5.html";
        pageMove.style.display = "block";
    });

    twoEVideo.addEventListener("click", function(){
        pageMove.src = "drum==2-5.html";
        pageMove.style.display = "block";
    });

    threeEVideo.addEventListener("click", function(){
        pageMove.src = "drum==3-5.html";
        pageMove.style.display = "block";
    });

    fourEVideo.addEventListener("click", function(){
        pageMove.src = "drum==4-5.html";
        pageMove.style.display = "block";
    });
    //////////////////////////////// remixes
    oneFVideo.addEventListener("click", function(){
        pageMove.src = "drum==1-6.html";
        pageMove.style.display = "block";
    });

    twoFVideo.addEventListener("click", function(){
        pageMove.src = "drum==2-6.html";
        pageMove.style.display = "block";
    });

    threeFVideo.addEventListener("click", function(){
        pageMove.src = "drum==3-6.html";
        pageMove.style.display = "block";
    });

    fourFVideo.addEventListener("click", function(){
        pageMove.src = "drum==4-6.html";
        pageMove.style.display = "block";
    });

    fiveFVideo.addEventListener("click", function(){
        pageMove.src = "drum==5-6.html";
        pageMove.style.display = "block";
    });

    sixFVideo.addEventListener("click", function(){
        pageMove.src = "drum==6-6.html";
        pageMove.style.display = "block";
    });

    sevenFVideo.addEventListener("click", function(){
        pageMove.src = "drum==7-6.html";
        pageMove.style.display = "block";
    });

    eightFVideo.addEventListener("click", function(){
        pageMove.src = "drum==8-6.html";
        pageMove.style.display = "block";
    });

    nineFVideo.addEventListener("click", function(){
        pageMove.src = "drum==9-6.html";
        pageMove.style.display = "block";
    });

    tenFVideo.addEventListener("click", function(){
        pageMove.src = "drum==10-6.html";
        pageMove.style.display = "block";
    });

    ytPageTwo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/watch?v=hYS0JMPDCyo&list=PLcCKnIzyTeeqA4-PQBaxPdeVq5ZNxBwkK";
        pageMove.style.display = "block";
    });
    //////////////////////////////// dubstep mixes
    oneGVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/O-OjloiG1TI";
        pageMove.style.display = "block";
    });

    twoGVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/cvjOpD8wGDc";
        pageMove.style.display = "block";
    });

    threeGVideo.addEventListener("click", function(){
        pageMove.src = "drum==3-7.html";
        pageMove.style.display = "block";
    });

    fourGVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/EtycAAgu9vY";
        pageMove.style.display = "block";
    });

    fiveGVideo.addEventListener("click", function(){
        pageMove.src = "drum==5-7.html";
        pageMove.style.display = "block";
    });

    sixGVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/BAfZ1Zf9mPk";
        pageMove.style.display = "block";
    });

    sevenGVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/luYtmP8fFeA";
        pageMove.style.display = "block";
    });
    //////////////////////////////// my best drum covers
    oneHVideo.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/d9qmvcyEOsE?";
        pageMove.style.display = "block";
    });

    twoHVideo.addEventListener("click", function(){
        pageMove.src = "drum==5.html";
        pageMove.style.display = "block";
    });

    threeHVideo.addEventListener("click", function(){
        pageMove.src = "drum==2.html";
        pageMove.style.display = "block";
    });

    fourHVideo.addEventListener("click", function(){
        pageMove.src = "drum==7.html";
        pageMove.style.display = "block";
    });

    fiveHVideo.addEventListener("click", function(){
        pageMove.src = "drum==8.html";
        pageMove.style.display = "block";
    });

    sixHVideo.addEventListener("click", function(){
        pageMove.src = "drum==6-8.html";
        pageMove.style.display = "block";
    });

    sevenHVideo.addEventListener("click", function(){
        pageMove.src = "drum==9.html";
        pageMove.style.display = "block";
    });

    eightHVideo.addEventListener("click", function(){
        pageMove.src = "drum==10.html";
        pageMove.style.display = "block";
    });

    nineHVideo.addEventListener("click", function(){
        pageMove.src = "drum==9-8.html";
        pageMove.style.display = "block";
    });

    tenHVideo.addEventListener("click", function(){
        pageMove.src = "drum==10-8.html";
        pageMove.style.display = "block";
    });
    ytPageThree.addEventListener("click", function(){
        pageMove.src = "https://www.youtube.com/embed/watch?v=d9qmvcyEOsE&list=PLcCKnIzyTeeq5aIez8aFWx6uQZBvZfbRg&index=1";
        pageMove.style.display = "block";
    });

    function showContent(){
        document.getElementById("main").style.display = "none";
    };
    function iframeDown(){
        pageMove.style.display = "none";
        $('iframe').attr('src', $('iframe').attr('src'));
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

    $(".video-choice-list-4 li").click(function(){
        $(".video-choice-list-4 li").removeClass("active");
        $(this).addClass("active");
    });

    $(".video-choice-list-5 li").click(function(){
        $(".video-choice-list-5 li").removeClass("active");
        $(this).addClass("active");
    });

    $(".video-choice-list-6 li").click(function(){
        $(".video-choice-list-6 li").removeClass("active");
        $(this).addClass("active");
    });

    $(".video-choice-list-7 li").click(function(){
        $(".video-choice-list-7 li").removeClass("active");
        $(this).addClass("active");
    });

    $(".video-choice-list-8 li").click(function(){
        $(".video-choice-list-8 li").removeClass("active");
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
    /////////////////////////////////////////////
    $(".video-choice-list-4 li:nth-of-type(1)").click(function(){
        $(".count-4").html("1");
    });

    $(".video-choice-list-4 li:nth-of-type(2)").click(function(){
        $(".count-4").html("2");
    });

    $(".video-choice-list-4 li:nth-of-type(3)").click(function(){
        $(".count-4").html("3");
    });

    $(".video-choice-list-4 li:nth-of-type(4)").click(function(){
        $(".count-4").html("4");
    });

    $(".video-choice-list-4 li:nth-of-type(5)").click(function(){
        $(".count-4").html("5");
    });
    /////////////////////////////////////////////
    $(".video-choice-list-5 li:nth-of-type(1)").click(function(){
        $(".count-5").html("1");
    });

    $(".video-choice-list-5 li:nth-of-type(2)").click(function(){
        $(".count-5").html("2");
    });

    $(".video-choice-list-5 li:nth-of-type(3)").click(function(){
        $(".count-5").html("3");
    });

    $(".video-choice-list-5 li:nth-of-type(4)").click(function(){
        $(".count-5").html("4");
    });
    /////////////////////////////////////////////
    $(".video-choice-list-6 li:nth-of-type(1)").click(function(){
        $(".count-6").html("1");
    });

    $(".video-choice-list-6 li:nth-of-type(2)").click(function(){
        $(".count-6").html("2");
    });

    $(".video-choice-list-6 li:nth-of-type(3)").click(function(){
        $(".count-6").html("3");
    });

    $(".video-choice-list-6 li:nth-of-type(4)").click(function(){
        $(".count-6").html("4");
    });

    $(".video-choice-list-6 li:nth-of-type(5)").click(function(){
        $(".count-6").html("5");
    });

    $(".video-choice-list-6 li:nth-of-type(6)").click(function(){
        $(".count-6").html("6");
    });

    $(".video-choice-list-6 li:nth-of-type(7)").click(function(){
        $(".count-6").html("7");
    });

    $(".video-choice-list-6 li:nth-of-type(8)").click(function(){
        $(".count-6").html("8");
    });

    $(".video-choice-list-6 li:nth-of-type(9)").click(function(){
        $(".count-6").html("9");
    });

    $(".video-choice-list-6 li:nth-of-type(10)").click(function(){
        $(".count-6").html("10");
    });
    /////////////////////////////////////////////
    $(".video-choice-list-7 li:nth-of-type(1)").click(function(){
        $(".count-7").html("1");
    });

    $(".video-choice-list-7 li:nth-of-type(2)").click(function(){
        $(".count-7").html("2");
    });

    $(".video-choice-list-7 li:nth-of-type(3)").click(function(){
        $(".count-7").html("3");
    });

    $(".video-choice-list-7 li:nth-of-type(4)").click(function(){
        $(".count-7").html("4");
    });

    $(".video-choice-list-7 li:nth-of-type(5)").click(function(){
        $(".count-7").html("5");
    });

    $(".video-choice-list-7 li:nth-of-type(6)").click(function(){
        $(".count-7").html("6");
    });

    $(".video-choice-list-7 li:nth-of-type(7)").click(function(){
        $(".count-7").html("7");
    });
    /////////////////////////////////////////////
    $(".video-choice-list-8 li:nth-of-type(1)").click(function(){
        $(".count-8").html("1");
    });

    $(".video-choice-list-8 li:nth-of-type(2)").click(function(){
        $(".count-8").html("2");
    });

    $(".video-choice-list-8 li:nth-of-type(3)").click(function(){
        $(".count-8").html("3");
    });

    $(".video-choice-list-8 li:nth-of-type(4)").click(function(){
        $(".count-8").html("4");
    });

    $(".video-choice-list-8 li:nth-of-type(5)").click(function(){
        $(".count-8").html("5");
    });

    $(".video-choice-list-8 li:nth-of-type(6)").click(function(){
        $(".count-8").html("6");
    });

    $(".video-choice-list-8 li:nth-of-type(7)").click(function(){
        $(".count-8").html("7");
    });

    $(".video-choice-list-8 li:nth-of-type(8)").click(function(){
        $(".count-8").html("8");
    });

    $(".video-choice-list-8 li:nth-of-type(9)").click(function(){
        $(".count-8").html("9");
    });
    
    $(".video-choice-list-8 li:nth-of-type(10)").click(function(){
        $(".count-8").html("10");
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
        $("#seven").css("display", "none");
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
        $("#eight").css("display", "none");
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
    ///////////////////////////////////////
    $(".video-choice-list-4 li:nth-of-type(1)").click(function(){
        $("#one-4").css("display", "block");
        $(" #two-4").css("display", "none");
        $(" #three-4").css("display", "none");
        $("#four-4").css("display", "none");
        $("#five-4").css("display", "none");
    });

    $(".video-choice-list-4 li:nth-of-type(2)").click(function(){
        $("#two-4").css("display", "block");
        $(" #one-4").css("display", "none");
        $("#three-4").css("display", "none");
        $("#four-4").css("display", "none");
        $(" #five-4").css("display", "none");
    });

    $(".video-choice-list-4 li:nth-of-type(3)").click(function(){
        $("#three-4").css("display", "block");
        $("#one-4").css("display", "none");
        $("#two-4").css("display", "none");
        $("#four-4").css("display", "none");
        $(" #five-4").css("display", "none");
    });

    $(".video-choice-list-4 li:nth-of-type(4)").click(function(){
        $("#four-4").css("display", "block");
        $("#one-4").css("display", "none");
        $("#two-4").css("display", "none");
        $(" #three-4").css("display", "none");
        $("#five-4").css("display", "none");
    });

    $(".video-choice-list-4 li:nth-of-type(5)").click(function(){
        $(" #five-4").css("display", "block");
        $(" #one-4").css("display", "none");
        $("#two-4").css("display", "none");
        $("#three-4").css("display", "none");
        $("#four-4").css("display", "none");
    });
    ///////////////////////////////////////
    $(".video-choice-list-5 li:nth-of-type(1)").click(function(){
        $("#one-5").css("display", "block");
        $(" #two-5").css("display", "none");
        $(" #three-5").css("display", "none");
        $("#four-5").css("display", "none");
    });

    $(".video-choice-list-5 li:nth-of-type(2)").click(function(){
        $("#two-5").css("display", "block");
        $("#one-5").css("display", "none");
        $("#three-5").css("display", "none");
        $("#four-5").css("display", "none");
    });

    $(".video-choice-list-5 li:nth-of-type(3)").click(function(){
        $("#three-5").css("display", "block");
        $("#one-5").css("display", "none");
        $("#two-5").css("display", "none");
        $("#four-5").css("display", "none");
    });

    $(".video-choice-list-5 li:nth-of-type(4)").click(function(){
        $("#four-5").css("display", "block");
        $("#one-5").css("display", "none");
        $("#two-5").css("display", "none");
        $(" #three-5").css("display", "none");
    });

    ///////////////////////////////////////
    $(".video-choice-list-6 li:nth-of-type(1)").click(function(){
        $("#one-6").css("display", "block");
        $("#two-6").css("display", "none");
        $("#three-6").css("display", "none");
        $("#four-6").css("display", "none");
        $("#five-6").css("display", "none");
        $("#six-6").css("display", "none");
        $("#seven-6").css("display", "none");
        $("#eight-6").css("display", "none");
        $("#nine-6").css("display", "none");
        $("#ten-6").css("display", "none");
    });

    $(".video-choice-list-6 li:nth-of-type(2)").click(function(){
        $("#two-6").css("display", "block");
        $("#one-6").css("display", "none");
        $("#three-6").css("display", "none");
        $("#four-6").css("display", "none");
        $("#five-6").css("display", "none");
        $("#six-6").css("display", "none");
        $("#seven-6").css("display", "none");
        $("#eight-6").css("display", "none");
        $("#nine-6").css("display", "none");
        $("#ten-6").css("display", "none");
    });

    $(".video-choice-list-6 li:nth-of-type(3)").click(function(){
        $("#three-6").css("display", "block");
        $("#one-6").css("display", "none");
        $("#two-6").css("display", "none");
        $("#four-6").css("display", "none");
        $("#five-6").css("display", "none");
        $("#six-6").css("display", "none");
        $("#seven-6").css("display", "none");
        $("#eight-6").css("display", "none");
        $("#nine-6").css("display", "none");
        $("#ten-6").css("display", "none");
    });

    $(".video-choice-list-6 li:nth-of-type(4)").click(function(){
        $("#four-6").css("display", "block");
        $("#one-6").css("display", "none");
        $("#two-6").css("display", "none");
        $("#three-6").css("display", "none");
        $("#five-6").css("display", "none");
        $("#six-6").css("display", "none");
        $("#seven-6").css("display", "none");
        $("#eight-6").css("display", "none");
        $("#nine-6").css("display", "none");
        $("#ten-6").css("display", "none");
    });

    $(".video-choice-list-6 li:nth-of-type(5)").click(function(){
        $("#five-6").css("display", "block");
        $("#one-6").css("display", "none");
        $("#two-6").css("display", "none");
        $("#three-6").css("display", "none");
        $("#four-6").css("display", "none");
        $("#six-6").css("display", "none");
        $("#seven-6").css("display", "none");
        $("#eight-6").css("display", "none");
        $("#nine-6").css("display", "none");
        $("#ten-6").css("display", "none");
    });

    $(".video-choice-list-6 li:nth-of-type(6)").click(function(){
        $("#six-6").css("display", "block");
        $("#one-6").css("display", "none");
        $("#two-6").css("display", "none");
        $("#three-6").css("display", "none");
        $("#four-6").css("display", "none");
        $("#five-6").css("display", "none");
        $("#seven-6").css("display", "none");
        $("#eight-6").css("display", "none");
        $("#nine-6").css("display", "none");
        $("#ten-6").css("display", "none");
    });

    $(".video-choice-list-6 li:nth-of-type(7)").click(function(){
        $("#seven-6").css("display", "block");
        $("#one-6").css("display", "none");
        $("#two-6").css("display", "none");
        $("#three-6").css("display", "none");
        $("#four-6").css("display", "none");
        $("#five-6").css("display", "none");
        $("#six-6").css("display", "none");
        $("#eight-6").css("display", "none");
        $("#nine-6").css("display", "none");
        $("#ten-6").css("display", "none");
    });

    $(".video-choice-list-6 li:nth-of-type(8)").click(function(){
        $("#eight-6").css("display", "block");
        $("#one-6").css("display", "none");
        $("#two-6").css("display", "none");
        $("#three-6").css("display", "none");
        $("#four-6").css("display", "none");
        $("#five-6").css("display", "none");
        $("#six-6").css("display", "none");
        $("#seven-6").css("display", "none");
        $("#nine-6").css("display", "none");
        $("#ten-6").css("display", "none");
    });

    $(".video-choice-list-6 li:nth-of-type(9)").click(function(){
        $("#nine-6").css("display", "block");
        $("#one-6").css("display", "none");
        $("#two-6").css("display", "none");
        $("#three-6").css("display", "none");
        $("#four-6").css("display", "none");
        $("#five-6").css("display", "none");
        $("#six-6").css("display", "none");
        $("#seven-6").css("display", "none");
    });

    $(".video-choice-list-6 li:nth-of-type(10)").click(function(){
        $("#ten-6").css("display", "block");
        $("#one-6").css("display", "none");
        $("#two-6").css("display", "none");
        $("#three-6").css("display", "none");
        $("#four-6").css("display", "none");
        $("#five-6").css("display", "none");
        $("#six-6").css("display", "none");
        $("#seven-6").css("display", "none");
    });
    ///////////////////////////////////////
    $(".video-choice-list-7 li:nth-of-type(1)").click(function(){
        $("#one-7").css("display", "block");
        $("#two-7").css("display", "none");
        $("#three-7").css("display", "none");
        $("#four-7").css("display", "none");
        $("#five-7").css("display", "none");
        $("#six-7").css("display", "none");
        $("#seven-7").css("display", "none");
    });

    $(".video-choice-list-7 li:nth-of-type(2)").click(function(){
        $("#two-7").css("display", "block");
        $("#one-7").css("display", "none");
        $("#three-7").css("display", "none");
        $("#four-7").css("display", "none");
        $("#five-7").css("display", "none");
        $("#six-7").css("display", "none");
        $("#seven-7").css("display", "none");
    });

    $(".video-choice-list-7 li:nth-of-type(3)").click(function(){
        $("#three-7").css("display", "block");
        $("#one-7").css("display", "none");
        $("#two-7").css("display", "none");
        $("#four-7").css("display", "none");
        $("#five-7").css("display", "none");
        $("#six-7").css("display", "none");
        $("#seven-7").css("display", "none");
    });

    $(".video-choice-list-7 li:nth-of-type(4)").click(function(){
        $("#four-7").css("display", "block");
        $("#one-7").css("display", "none");
        $("#two-7").css("display", "none");
        $("#three-7").css("display", "none");
        $("#five-7").css("display", "none");
        $("#six-7").css("display", "none");
        $("#seven-7").css("display", "none");
    });

    $(".video-choice-list-7 li:nth-of-type(5)").click(function(){
        $("#five-7").css("display", "block");
        $("#one-7").css("display", "none");
        $("#two-7").css("display", "none");
        $("#three-7").css("display", "none");
        $("#four-7").css("display", "none");
        $("#six-7").css("display", "none");
        $("#seven-7").css("display", "none");
    });

    $(".video-choice-list-7 li:nth-of-type(6)").click(function(){
        $("#six-7").css("display", "block");
        $("#one-7").css("display", "none");
        $("#two-7").css("display", "none");
        $("#three-7").css("display", "none");
        $("#four-7").css("display", "none");
        $("#five-7").css("display", "none");
        $("#seven-7").css("display", "none");
    });

    $(".video-choice-list-7 li:nth-of-type(7)").click(function(){
        $("#seven-7").css("display", "block");
        $("#one-7").css("display", "none");
        $("#two-7").css("display", "none");
        $("#three-7").css("display", "none");
        $("#four-7").css("display", "none");
        $("#five-7").css("display", "none");
        $("#six-7").css("display", "none");
    });

    ///////////////////////////////////////
    $(".video-choice-list-8 li:nth-of-type(1)").click(function(){
        $("#one-8").css("display", "block");
        $("#two-8").css("display", "none");
        $("#three-8").css("display", "none");
        $("#four-8").css("display", "none");
        $("#five-8").css("display", "none");
        $("#six-8").css("display", "none");
        $("#seven-8").css("display", "none");
        $("#eight-8").css("display", "none");
        $("#nine-8").css("display", "none");
        $("#ten-8").css("display", "none");
    });

    $(".video-choice-list-8 li:nth-of-type(2)").click(function(){
        $("#two-8").css("display", "block");
        $("#one-8").css("display", "none");
        $("#three-8").css("display", "none");
        $("#four-8").css("display", "none");
        $("#five-8").css("display", "none");
        $("#six-8").css("display", "none");
        $("#seven-8").css("display", "none");
        $("#eight-8").css("display", "none");
        $("#nine-8").css("display", "none");
        $("#ten-8").css("display", "none");
    });

    $(".video-choice-list-8 li:nth-of-type(3)").click(function(){
        $("#three-8").css("display", "block");
        $("#one-8").css("display", "none");
        $("#two-8").css("display", "none");
        $("#four-8").css("display", "none");
        $("#five-8").css("display", "none");
        $("#six-8").css("display", "none");
        $("#seven-8").css("display", "none");
        $("#eight-8").css("display", "none");
        $("#nine-8").css("display", "none");
        $("#ten-8").css("display", "none");
    });

    $(".video-choice-list-8 li:nth-of-type(4)").click(function(){
        $("#four-8").css("display", "block");
        $("#one-8").css("display", "none");
        $("#two-8").css("display", "none");
        $("#three-8").css("display", "none");
        $("#five-8").css("display", "none");
        $("#six-8").css("display", "none");
        $("#seven-8").css("display", "none");
        $("#eight-8").css("display", "none");
        $("#nine-8").css("display", "none");
        $("#ten-8").css("display", "none");
    });

    $(".video-choice-list-8 li:nth-of-type(5)").click(function(){
        $("#five-8").css("display", "block");
        $("#one-8").css("display", "none");
        $("#two-8").css("display", "none");
        $("#three-8").css("display", "none");
        $("#four-8").css("display", "none");
        $("#six-8").css("display", "none");
        $("#seven-8").css("display", "none");
        $("#eight-8").css("display", "none");
        $("#nine-8").css("display", "none");
        $("#ten-8").css("display", "none");
    });

    $(".video-choice-list-8 li:nth-of-type(6)").click(function(){
        $("#six-8").css("display", "block");
        $("#one-8").css("display", "none");
        $("#two-8").css("display", "none");
        $("#three-8").css("display", "none");
        $("#four-8").css("display", "none");
        $("#five-8").css("display", "none");
        $("#seven-8").css("display", "none");
        $("#eight-8").css("display", "none");
        $("#nine-8").css("display", "none");
        $("#ten-8").css("display", "none");
    });

    $(".video-choice-list-8 li:nth-of-type(7)").click(function(){
        $("#seven-8").css("display", "block");
        $("#one-8").css("display", "none");
        $("#two-8").css("display", "none");
        $("#three-8").css("display", "none");
        $("#four-8").css("display", "none");
        $("#five-8").css("display", "none");
        $("#six-8").css("display", "none");
        $("#eight-8").css("display", "none");
        $("#nine-8").css("display", "none");
        $("#ten-8").css("display", "none");
    });

    $(".video-choice-list-8 li:nth-of-type(8)").click(function(){
        $("#eight-8").css("display", "block");
        $("#one-8").css("display", "none");
        $("#two-8").css("display", "none");
        $("#three-8").css("display", "none");
        $("#four-8").css("display", "none");
        $("#five-8").css("display", "none");
        $("#six-8").css("display", "none");
        $("#seven-8").css("display", "none");
        $("#nine-8").css("display", "none");
        $("#ten-8").css("display", "none");
    });

    $(".video-choice-list-8 li:nth-of-type(9)").click(function(){
        $("#nine-8").css("display", "block");
        $("#one-8").css("display", "none");
        $("#two-8").css("display", "none");
        $("#three-8").css("display", "none");
        $("#four-8").css("display", "none");
        $("#five-8").css("display", "none");
        $("#six-8").css("display", "none");
        $("#seven-8").css("display", "none");
        $("#eight-8").css("display", "none");
        $("#ten-8").css("display", "none");
    });

    $(".video-choice-list-8 li:nth-of-type(10)").click(function(){
        $("#ten-8").css("display", "block");
        $("#one-8").css("display", "none");
        $("#two-8").css("display", "none");
        $("#three-8").css("display", "none");
        $("#four-8").css("display", "none");
        $("#five-8").css("display", "none");
        $("#six-8").css("display", "none");
        $("#seven-8").css("display", "none");
        $("#eight-8").css("display", "none");
        $("#nine-8").css("display", "none");
    });
})