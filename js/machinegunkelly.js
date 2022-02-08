

$(function(){

    $("#next").click(function(){
        var chars = $("#album-list-list li").width();
        $("#album-list-list").stop().animate({marginLeft:-chars}, function(){
            $("#album-list-list li:first").appendTo("#album-list-list");
            $("#album-list-list").css({marginLeft:0});
        });
    });

    $("#prev").click(function(){
        var chars = $("#album-list-list li").width();
        $("#album-list-list").stop().animate({marginLeft:0}, function(){
            $("#album-list-list li:last").prependTo("#album-list-list");
            $("#album-list-list").css({marginLeft:-chars});
        });
    });

    $("#next1").click(function(){
        var chars = $("#album-list_list li").width();
        $("#album-list_list").stop().animate({marginLeft:-chars}, function(){
            $("#album-list_list li:first").appendTo("#album-list_list");
            $("#album-list_list").css({marginLeft:0});
        });
    });

    $("#prev1").click(function(){
        var chars = $("#album-list_list li").width();
        $("#album-list_list").stop().animate({marginLeft:0}, function(){
            $("#album-list_list li:last").prependTo("#album-list_list");
            $("#album-list_list").css({marginLeft:-chars});
        });
    });

    $("#next2").click(function(){
        var chars = $("#video-list-list-vll li").width();
        $("#video-list-list-vll").stop().animate({marginLeft:-chars}, function(){
            $("#video-list-list-vll li:first").appendTo("#video-list-list-vll");
            $("#video-list-list-vll").css({marginLeft:0});
        });
    });

    $("#prev2").click(function(){
        var chars = $("#video-list-list-vll li").width();
        $("#video-list-list-vll").stop().animate({marginLeft:0}, function(){
            $("#video-list-list-vll li:last").prependTo("#video-list-list-vll");
            $("#video-list-list-vll").css({marginLeft:-chars});
        });
    });

    $("#next3").click(function(){
        var chars = $("#artist-list-al1 li").width();
        $("#artist-list-al1").stop().animate({marginLeft:-chars}, function(){
            $("#artist-list-al1 li:first").appendTo("#artist-list-al1");
            $("#artist-list-al1").css({marginLeft:0});
        });
    });

    $("#prev3").click(function(){
        var chars = $("#artist-list-al1 li").width();
        $("#artist-list-al1").stop().animate({marginLeft:0}, function(){
            $("#artist-list-al1 li:last").prependTo("#artist-list-al1");
            $("#artist-list-al1").css({marginLeft:-chars});
        });
    });




});
