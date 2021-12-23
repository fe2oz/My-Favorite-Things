

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






