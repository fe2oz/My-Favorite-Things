

$(function(){
    $("#next").click(function(){
        var chars = $("#vll li").width();
        $("#vll").stop().animate({marginLeft:-chars}, function(){
            $("#vll li:first").appendTo("#vll");
            $("#vll").css({marginLeft:0});
        });
    });

    $("#prev").click(function(){
        var chars = $("#vll li").width();
        $("#vll").stop().animate({marginLeft:chars}, function(){
            $("#vll li:last").prependTo("#vll");
            $("#vll").css({marginLeft:0});
        });
    });

    $("#next1").click(function(){
        var chars = $("#al1 li").width();
        $("#al1").stop().animate({marginLeft:-chars}, function(){
            $("#al1 li:first").appendTo("#al1");
            $("#al1").css({marginLeft:0});
        });
    });

    $("#prev1").click(function(){
        var chars = $("#al1 li").width();
        $("#al1").stop().animate({marginLeft:chars}, function(){
            $("#al1 li:last").prependTo("#al1");
            $("#al1").css({marginLeft:0});
        });
    });
});
