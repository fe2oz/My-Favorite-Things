
$(document).ready(function(){
    var audio = new Audio();
    var playList = new Array(
        "audio/Dopamine.mp3", //0
        "audio/Come&Go.mp3",
        "audio/Wrecked.mp3",
        "audio/Stranger_Things.mp3",
        "audio/Someday.mp3", //4
        "audio/Moth_To_A_Flame.mp3",
        "audio/못참겠어.mp3",
        "audio/행운을빌어요.mp3",
        "audio/LukeHemmings-BabyBlue(Lyrics).mp3",
        "audio/공기남(Airman)-SODA(feat.1ho,0back).mp3",
        "audio/Valley-SOCIETY(Audio).mp3", //10
        "audio/One.mp3",
        "audio/love_race.mp3",
        "audio/Hypnotized.mp3",
        "audio/Wave_Of_You.mp3",
        "audio/my_ex's_best_friend.mp3", //15
        "audio/Summer_Love.mp3",
        "audio/Start_Again.mp3",
        "audio/Fallin.mp3",
        "audio/4_Strings_of_Sweet_Home.mp3",
        "audio/Toothbrush.mp3" //20
        );

    var img = document.getElementById("play_music"); //재생 버튼 이미지
    var prevImg = document.getElementById("left_play") //이전 재생 버튼 이미지
    var nextImg = document.getElementById("right_play") //다음 재생 버튼 이미지

    const ctrlZ = document.getElementById("left_arrow")

    const musicBar = document.getElementById("the_bottom_music_bar");
    const volumeBar = document.getElementById("volume_bar");
    const progressBar = document.getElementById("progress");
    const progressBarFront = document.getElementById("progress_the_front");

    const rePeat = document.getElementsByClassName("etcimg");
    
    // 노래 함수명 지정
    //빠른 선곡 부분
    const dopaMine = document.getElementById("pdm_dopamine");
    const juiceWrld = document.getElementById("jw_comeandgo");
    const imagineDargon = document.getElementById("id_wrecked");
    const againImagineDargon = document.getElementById("re_wrecked");
    const alanWalker = document.getElementById("aw_stranger_things");
    const OneRepublic = document.getElementById("or_someday");
    const TheWeeknd = document.getElementById("tw_moth_to_a_flame");
    const ericNam = document.getElementById("en_loco");
    const peppertones = document.getElementById("pt_good_luck");
    const babyBlue = document.getElementById("lh_baby_blue");
    const airmanSoda = document.getElementById("airman_soda");
    const valleySociety = document.getElementById("valley_society");
    const epikHigh = document.getElementById("eh_one");

    //다시 듣기 부분
    const loveRace = document.getElementById("mgk_love_race");
    const hypnoTized = document.getElementById("pdm_hypnotized");
    const waveOfyou = document.getElementById("surfaces_wave_of_you");
    const myExsBestFriend = document.getElementById("mgk_meb");
    const summerLove = document.getElementById("iu_summer_love");
    const startAgain = document.getElementById("or_start_again");
    const fallIn = document.getElementById("wdw_fallin");
    const sweetHome = document.getElementById("sweet_home");
    const toothBrush = document.getElementById("dnce_tb");

    const ttRm = document.getElementById("ttrm");

    function musicStart(){ // 노래 재생시
        musicBar.style.display = "block";
        img.style.filter = "invert(1)";
        audio.play();
        audio.volume = 0.3;
    }

    // 볼륨 조절
    volumeBar.addEventListener("change", function(){
        audio.volume = parseFloat(this.value / 20);
    });

    // 음악 progress
    audio.onloadeddata = () => {
        progressBar.max = audio.duration;
    }
    progressBar.onchange = () => {
        audio.currentTime = progressBar.value;
    }
    audio.ontimeupdate = () => {
        progressBar.value = audio.currentTime; // range value 의 값 = audio.currentTime 값
        progressBarFront.style.width = (progressBar.value/audio.duration) * 100 + "%";
        progressBarFront.style.transition = "ease 1s";
    }

    // 재생, 정지 버튼 토글
    img.addEventListener("click", function(){
        if(img.src.match("stop_icon")){ // 이미지 src 중 stop_icon과 일치하면
            img.src = "img/211876_play_icon.png"; // play_icon 이미지로 변경되고
            img.style.filter ="invert(0)";
            audio.pause(); // 오디오 멈춤
        }else if(img.src.match("play_icon")){ // 이미지 src 중 play_icon과 일치하면
            img.src = "img/743894_pause_control_line_play_stop_icon.png"; //stop_icon 이미지로 변경되고
            img.style.filter ="invert(1)";
            audio.play(); // 오디오 재생
        }else if(progressBar.value = audio.duration){
            img.src = "img/211876_play_icon.png";
        };
    });

    // 플레이 리스트
    dopaMine.addEventListener("click", function(){
        audio.src = playList[0]; 
        musicStart();
        document.getElementById("album_image").src = "img/400x400cc.jpg";
        document.getElementById("music_title").innerHTML = "Dopamine";
        document.getElementById("singer_and_album").innerHTML = "Purple Disco Machine 및 Eyelar • Exotica";
        imgToggle();
    });

    juiceWrld.addEventListener("click", function(){
        audio.src = playList[1]; 
        musicStart();
        document.getElementById("album_image").src = "img/4641786.jpg";
        document.getElementById("music_title").innerHTML = "Come & Go(feat. Marshmallow)";
        document.getElementById("singer_and_album").innerHTML = "Juice Wrld(주스 월드) Legends Never Die 2020";
        imgToggle();
    });

    imagineDargon.addEventListener("click", function(){
        audio.src = playList[2]; 
        musicStart();
        document.getElementById("album_image").src = "img/6398197.jpg"
        document.getElementById("music_title").innerHTML = "Wrekced"
        document.getElementById("singer_and_album").innerHTML = "Imagine Dragons Mercury - Act 1 2021"
        imgToggle();
    });

    againImagineDargon.addEventListener("click", function(){
        audio.src = playList[2]; 
        musicStart();
        document.getElementById("album_image").src = "img/6398197.jpg"
        document.getElementById("music_title").innerHTML = "Wrekced"
        document.getElementById("singer_and_album").innerHTML = "Imagine Dragons Mercury - Act 1 2021"
        imgToggle();
    });

    alanWalker.addEventListener("click", function(){
        audio.src = playList[3]; 
        musicStart();
        document.getElementById("album_image").src = "img/2345147.jpg"
        document.getElementById("music_title").innerHTML = "Stranger Things (Alan Walker Remix)(feat. OneRepublic(원리퍼블릭))"
        document.getElementById("singer_and_album").innerHTML = "Kygo(카이고) • Kids in Love (Remixes)"
        imgToggle();
    });

    OneRepublic.addEventListener("click", function(){
        audio.src = playList[4]; 
        musicStart();
        document.getElementById("album_image").src = "img/6391703.jpg"
        document.getElementById("music_title").innerHTML = "Someday"
        document.getElementById("singer_and_album").innerHTML = "OneRepublic Human (Deluxe)"
        imgToggle();
    });

    TheWeeknd.addEventListener("click", function(){
        audio.src = playList[5]; 
        musicStart();
        document.getElementById("album_image").src = "img/mta.jpg"
        document.getElementById("music_title").innerHTML = "Moth To A Flame"
        document.getElementById("singer_and_album").innerHTML = "Swedish House Mafia 및 The Weeknd Moth To A Flame"
        imgToggle();
    });

    ericNam.addEventListener("click", function(){
        audio.src = playList[6]; 
        musicStart();
        document.getElementById("album_image").src = "img/649974.jpg"
        document.getElementById("music_title").innerHTML = "못참겠어(feat. 로꼬)"
        document.getElementById("singer_and_album").innerHTML = "에릭남 • 못참겠어 Can't Help Myself"
        imgToggle();
    });

    peppertones.addEventListener("click", function(){
        audio.src = playList[7]; 
        musicStart();
        document.getElementById("album_image").src = "img/318851.jpg"
        document.getElementById("music_title").innerHTML = "행운을 빌어요"
        document.getElementById("singer_and_album").innerHTML = "페퍼톤스 (Peppertones) • Beginner's Luck"
        imgToggle();
    });

    babyBlue.addEventListener("click", function(){
        audio.src = playList[8]; 
        musicStart();
        document.getElementById("album_image").src = "img/6294979.jpg"
        document.getElementById("music_title").innerHTML = "Baby Blue"
        document.getElementById("singer_and_album").innerHTML = "Luke Hemmings • When Facing the Things We Turn Away From"
        imgToggle();
    });

    airmanSoda.addEventListener("click", function(){
        audio.src = playList[9]; 
        musicStart();
        document.getElementById("album_image").src = "img/4898075.jpg"
        document.getElementById("music_title").innerHTML = "SODA(feat. 0back, 1ho)"
        document.getElementById("singer_and_album").innerHTML = "공기남 • 오선지"
        imgToggle();
    });

    valleySociety.addEventListener("click", function(){
        audio.src = playList[10];
        musicStart();
        document.getElementById("album_image").src = "img/5992143.jpg"
        document.getElementById("music_title").innerHTML = "SOCIETY"
        document.getElementById("singer_and_album").innerHTML = "Valley • SOCIETY • 2021"
        imgToggle();
    });

    epikHigh.addEventListener("click", function(){
        audio.src = playList[11];
        musicStart();
        document.getElementById("album_image").src = "img/138893.jpg"
        document.getElementById("music_title").innerHTML = "One(feat. 지선)"
        document.getElementById("singer_and_album").innerHTML = "Epik High • Pieces, Part One"
        imgToggle();
    });

    loveRace.addEventListener("click", function(){
        audio.src = playList[12];
        musicStart();
        document.getElementById("album_image").src = "img/5739088.jpg"
        document.getElementById("music_title").innerHTML = "love race(feat. kellin Quinn)"
        document.getElementById("singer_and_album").innerHTML = "노래 • Machine Gun Kelly"
        imgToggle();
    });

    hypnoTized.addEventListener("click", function(){
        audio.src = playList[13];
        musicStart();
        document.getElementById("album_image").src = "img/400x400cc.jpg"
        document.getElementById("music_title").innerHTML = "Hypnotized"
        document.getElementById("singer_and_album").innerHTML = "노래 • Purple Disco Machine 및 Sophie and the Giants"
        imgToggle();
    });

    waveOfyou.addEventListener("click", function(){
        audio.src = playList[14];
        musicStart();
        document.getElementById("album_image").src = "img/5535290.jpg"
        document.getElementById("music_title").innerHTML = "Wave of You"
        document.getElementById("singer_and_album").innerHTML = "노래 • Surfaces"
        imgToggle();
    });

    myExsBestFriend.addEventListener("click", function(){
        audio.src = playList[15];
        musicStart();
        document.getElementById("album_image").src = "img/4962415.jpg"
        document.getElementById("music_title").innerHTML = "my ex's best friend"
        document.getElementById("singer_and_album").innerHTML = "노래 • Machine Gun Kelly • Tickets To My Downfall"
        imgToggle();
    });

    summerLove.addEventListener("click", function(){
        audio.src = playList[16];
        musicStart();
        document.getElementById("album_image").src = "img/437030.jpg"
        document.getElementById("music_title").innerHTML = "애타는 마음 Summer Love"
        document.getElementById("singer_and_album").innerHTML = "노래 • 울랄라세션 & 아이유 및 IU • 애타는 마음"
        imgToggle();
    });

    startAgain.addEventListener("click", function(){
        audio.src = playList[17];
        musicStart();
        document.getElementById("album_image").src = "img/2468750.jpg"
        document.getElementById("music_title").innerHTML = "Start Again"
        document.getElementById("singer_and_album").innerHTML = "노래 • OneRepublic(원리퍼블릭) 및 Vegas Jones • Start Again"
        imgToggle();
    });

    fallIn.addEventListener("click", function(){
        audio.src = playList[18];
        musicStart();
        document.getElementById("album_image").src = "img/5009855.jpg"
        document.getElementById("music_title").innerHTML = "Fallin' (Adrenaline)"
        document.getElementById("singer_and_album").innerHTML = "노래 • 와이 돈 위 • The Good Times and The Bad Ones"
        imgToggle();
    });

    sweetHome.addEventListener("click", function(){
        audio.src = playList[19];
        musicStart();
        document.getElementById("album_image").src = "img/5173694.jpg"
        document.getElementById("music_title").innerHTML = "4 Strings of Sweet Home"
        document.getElementById("singer_and_album").innerHTML = "노래 • GAE MI • 스위트홈 OST (넷플릭스 드라마)"
        imgToggle();
    });

    toothBrush.addEventListener("click", function(){
        audio.src = playList[20];
        musicStart();
        document.getElementById("album_image").src = "img/730592.jpg"
        document.getElementById("music_title").innerHTML = "Toothbrush"
        document.getElementById("singer_and_album").innerHTML = "노래 • DNCE • DNCE"
        imgToggle();
    });

    ttRm.addEventListener("click", function(){
        changeIframe();
        window.scrollTo(0, 0);
    });

    function changeIframe(){
        document.getElementById("pagemove").src = "ttrm.html";
        document.getElementById("pagemove").style.display = "block";
        document.getElementById("wrap").style.overflowY = "hidden";
    };

    ctrlZ.addEventListener("click", function(){
        iframeClose();
    });

    function iframeClose(){
        document.getElementById("pagemove").style.display = "none";
        document.getElementById("wrap").style.overflowY = "scroll";
    };


});







$(function(){
    $("#next").click(function(){
        $("#re_music_listen_slide").hide();
        $("#re_music_listen_slide_2").show().css("display", "flex");
        $("#prev").show().css("display", "block");
        $(this).hide();
    })

    $("#prev").click(function(){
        $("#re_music_listen_slide").show();
        $("#re_music_listen_slide_2").hide().css("display", "none");
        $("#next").show().css("display", "block");
        $(this).hide();
    })

    $("#next1").click(function(){
        $("#enjoy_music_listen_slide").hide();
        $("#enjoy_music_listen_slide_2").show().css("display", "flex");
        $("#prev1").show().css("display", "block");
        $(this).hide();
    })

    $("#prev1").click(function(){
        $("#enjoy_music_listen_slide").show();
        $("#enjoy_music_listen_slide_2").hide().css("display", "none");
        $("#next1").show().css("display", "block");
        $(this).hide();
    })

    $("#next2").click(function(){
        $("#recommend_music_video_slide").hide();
        $("#recommend_music_video_slide_2").show().css("display", "flex");
        $("#prev2").show().css("display", "block");
        $(this).hide();
    })

    $("#prev2").click(function(){
        $("#recommend_music_video_slide").show();
        $("#recommend_music_video_slide_2").hide().css("display", "none");
        $("#next2").show().css("display", "block");
        $(this).hide();
    })

    $("#next3").click(function(){
        $("#recommend_music_video_2_slide").hide();
        $("#recommend_music_video_2_slide_2").show().css("display", "flex");
        $("#prev3").show().css("display", "block");
        $(this).hide();
    })

    $("#prev3").click(function(){
        $("#recommend_music_video_2_slide").show();
        $("#recommend_music_video_2_slide_2").hide().css("display", "none");
        $("#next3").show().css("display", "block");
        $(this).hide();
    })

    $("#ttrm").click(function(){
        $("#wrap").stop().animate({scrollTop: 0}, "fast")
    })
})

