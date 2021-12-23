

$(document).ready(function(){
    var audio = new Audio();
    var playList = new Array(
        "audio/Dopamine.mp3",
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
        "audio/Wave_Of_You.mp3"
        );
    var img = document.getElementById("play_music");
    
    const musicBar = document.getElementById("the_bottom_music_bar");
    const PlayButton = document.getElementById("play_music");
    
    // 노래 함수명 지정
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

    const loveRace = document.getElementById("mgk_love_race");
    const hypnoTized = document.getElementById("pdm_hypnotized");
    const waveOfyou = document.getElementById("surfaces_wave_of_you");

    // 노래 리스트
    dopaMine.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[0]; 
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){
            img.onclick = function(){
                audio.pause(); 
                img.src = "img/211876_play_icon.png"; 
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/400x400cc.jpg"
        document.getElementById("music_title").innerHTML = "Dopamine"
        document.getElementById("singer_and_album").innerHTML = "Purple Disco Machine 및 Eyelar • Exotica"
    })

    juiceWrld.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[1]; 
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){
            img.onclick = function(){
                audio.pause(); 
                img.src = "img/211876_play_icon.png"; 
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/4641786.jpg"
        document.getElementById("music_title").innerHTML = "Come & Go(feat. Marshmallow)"
        document.getElementById("singer_and_album").innerHTML = "Juice Wrld(주스 월드) Legends Never Die 2020"
    })

    imagineDargon.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[2]; 
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){
            img.onclick = function(){
                audio.pause(); 
                img.src = "img/211876_play_icon.png"; 
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/6398197.jpg"
        document.getElementById("music_title").innerHTML = "Wrekced"
        document.getElementById("singer_and_album").innerHTML = "Imagine Dragons Mercury - Act 1 2021"
    });

    againImagineDargon.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[2]; 
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){
            img.onclick = function(){
                audio.pause(); 
                img.src = "img/211876_play_icon.png"; 
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/6398197.jpg"
        document.getElementById("music_title").innerHTML = "Wrekced"
        document.getElementById("singer_and_album").innerHTML = "Imagine Dragons Mercury - Act 1 2021"
    });

    alanWalker.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[3]; 
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){
            img.onclick = function(){
                audio.pause(); 
                img.src = "img/211876_play_icon.png"; 
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/2345147.jpg"
        document.getElementById("music_title").innerHTML = "Stranger Things (Alan Walker Remix)(feat. OneRepublic(원리퍼블릭))"
        document.getElementById("singer_and_album").innerHTML = "Kygo(카이고) • Kids in Love (Remixes)"
    });

    OneRepublic.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[4]; 
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){
            img.onclick = function(){
                audio.pause(); 
                img.src = "img/211876_play_icon.png"; 
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/6391703.jpg"
        document.getElementById("music_title").innerHTML = "Someday"
        document.getElementById("singer_and_album").innerHTML = "OneRepublic Human (Deluxe)"
    });

    TheWeeknd.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[5]; 
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){
            img.onclick = function(){
                audio.pause(); 
                img.src = "img/211876_play_icon.png"; 
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/mta.jpg"
        document.getElementById("music_title").innerHTML = "Moth To A Flame"
        document.getElementById("singer_and_album").innerHTML = "Swedish House Mafia 및 The Weeknd Moth To A Flame"
    });

    ericNam.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[6]; 
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){
            img.onclick = function(){
                audio.pause(); 
                img.src = "img/211876_play_icon.png"; 
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/649974.jpg"
        document.getElementById("music_title").innerHTML = "못참겠어(feat. 로꼬)"
        document.getElementById("singer_and_album").innerHTML = "에릭남 • 못참겠어 Can't Help Myself"
    });

    peppertones.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[7]; 
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){
            img.onclick = function(){
                audio.pause(); 
                img.src = "img/211876_play_icon.png"; 
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/318851.jpg"
        document.getElementById("music_title").innerHTML = "행운을 빌어요"
        document.getElementById("singer_and_album").innerHTML = "페퍼톤스 (Peppertones) • Beginner's Luck"
    });

    babyBlue.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[8]; 
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){ 
            img.onclick = function(){
                audio.pause();
                img.src = "img/211876_play_icon.png"; 
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/6294979.jpg"
        document.getElementById("music_title").innerHTML = "Baby Blue"
        document.getElementById("singer_and_album").innerHTML = "Luke Hemmings • When Facing the Things We Turn Away From"
    });

    airmanSoda.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[9]; 
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){
            img.onclick = function(){
                audio.pause();
                img.src = "img/211876_play_icon.png";
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/4898075.jpg"
        document.getElementById("music_title").innerHTML = "SODA(feat. 0back, 1ho)"
        document.getElementById("singer_and_album").innerHTML = "공기남 • 오선지"
    });

    valleySociety.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[10];
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){
            img.onclick = function(){
                audio.pause();
                img.src = "img/211876_play_icon.png";
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/5992143.jpg"
        document.getElementById("music_title").innerHTML = "SOCIETY"
        document.getElementById("singer_and_album").innerHTML = "Valley • SOCIETY • 2021"
    });

    epikHigh.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[11];
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){
            img.onclick = function(){
                audio.pause();
                img.src = "img/211876_play_icon.png";
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/138893.jpg"
        document.getElementById("music_title").innerHTML = "One(feat. 지선)"
        document.getElementById("singer_and_album").innerHTML = "Epik High • Pieces, Part One"
    });

    loveRace.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[12];
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){
            img.onclick = function(){
                audio.pause();
                img.src = "img/211876_play_icon.png";
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/5739088.jpg"
        document.getElementById("music_title").innerHTML = "love race(feat. kellin Quinn)"
        document.getElementById("singer_and_album").innerHTML = "노래 • Machine Gun Kelly"
    });

    hypnoTized.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[13];
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){
            img.onclick = function(){
                audio.pause();
                img.src = "img/211876_play_icon.png";
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/400x400cc.jpg"
        document.getElementById("music_title").innerHTML = "Hypnotized"
        document.getElementById("singer_and_album").innerHTML = "노래 • Purple Disco Machine 및 Sophie and the Giants"
    });

    waveOfyou.addEventListener("click", function(){
        musicBar.style.display = "block";
        PlayButton.src = "img/743894_pause_control_line_play_stop_icon.png";
        PlayButton.style.filter = "invert(1)";
        audio.src = playList[14];
        audio.play();
        audio.volume = 0.1;
       
        if(img.src.match("stop_icon")){
            img.onclick = function(){
                audio.pause();
                img.src = "img/211876_play_icon.png";
            }
        }else{
            img.onclick = function(){
                audio.play();
                img.src = "img/743894_pause_control_line_play_stop_icon.png";
            }
        }
        document.getElementById("album_image").src = "img/5535290.jpg"
        document.getElementById("music_title").innerHTML = "Wave of You"
        document.getElementById("singer_and_album").innerHTML = "노래 • Surfaces"
    });


});

// 재생, 정지 버튼 토글
function imgToggle(){
    var img = document.getElementById("play_music");
    if(img.src.match("stop_icon")){
        img.src = "img/211876_play_icon.png";
    }else{
        img.src = "img/743894_pause_control_line_play_stop_icon.png";
    };
};

// 볼륨 조절
function setVolume(){
    audio.volume = document.getElementById("volume_bar").value;
};


