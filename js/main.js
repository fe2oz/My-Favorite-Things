

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

})

$(function(){
    $("#valley_society").click(function(){
        $("#the_bottom_music_bar").show();
        $("#play_music").attr("src", "img/743894_pause_control_line_play_stop_icon.png").css("filter", "invert(1)");
        $("#SOCIETY_music")[0].play();
    })

    
})

// 재생, 정지 버튼 토글
function imgToggle(){
    var img = document.getElementById("play_music");
    if(img.src.match("stop_icon")){
        img.src = "img/211876_play_icon.png";
    }else{
        img.src = "img/743894_pause_control_line_play_stop_icon.png";
    }
}




