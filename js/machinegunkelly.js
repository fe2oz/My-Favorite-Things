

$(function(){

    $(".album-list-list li:last").prependTo(".album-list-list")

    $("#next").click(function(){
        $(".album-list-list").stop().animate({marginLeft:-223.95}, function(){
            $(".album-list-list li:first").appendTo(".album-list-list");
            $(".album-list-list").css({marginLeft:0});
        });
    });

    $("#prev").click(function(){
        $(".album-list-list").stop().animate({marginLeft:0}, function(){
            $(".album-list-list li:last").prependTo(".album-list-list");
            $(".album-list-list").css({marginLeft:-223.95});
        });
    });

    $("#next1").click(function(){
        $(".album-list_list").stop().animate({marginLeft:-223.95}, function(){
            $(".album-list_list li:first").appendTo(".album-list_list");
            $(".album-list_list").css({marginLeft:0});
        });
    });

    $("#prev1").click(function(){
        $(".album-list_list").stop().animate({marginLeft:223.95}, function(){
            $(".album-list_list li:last").prependTo(".album-list_list");
            $(".album-list_list").css({marginLeft:0});
        });
    });

    $("#next2").click(function(){
        $("#video-list-list-vll").stop().animate({marginLeft:-427.33}, function(){
            $("#video-list-list-vll li:first").appendTo("#video-list-list-vll");
            $("#video-list-list-vll").css({marginLeft:0});
        });
    });

    $("#prev2").click(function(){
        $("#video-list-list-vll").stop().animate({marginLeft:427.33}, function(){
            $("#video-list-list-vll li:last").prependTo("#video-list-list-vll");
            $("#video-list-list-vll").css({marginLeft:0});
        });
    });

    $("#next3").click(function(){
        $("#artist-list-al1").stop().animate({marginLeft:-222.95}, function(){
            $("#artist-list-al1 li:first").appendTo("#artist-list-al1");
            $("#artist-list-al1").css({marginLeft:0});
        });
    });

    $("#prev3").click(function(){
        $("#artist-list-al1").stop().animate({marginLeft:222.95}, function(){
            $("#artist-list-al1 li:last").prependTo("#artist-list-al1");
            $("#artist-list-al1").css({marginLeft:0});
        });
    });




});
