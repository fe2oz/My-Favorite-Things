

$(function(){
    $("#next").click(function(){
        $("#vll").stop().animate({marginLeft:-427.33}, function(){
            $("#vll li:first").appendTo("#vll");
            $("#vll").css({marginLeft:0});
        });
    });

    $("#prev").click(function(){
        $("#vll").stop().animate({marginLeft:427.33}, function(){
            $("#vll li:last").prependTo("#vll");
            $("#vll").css({marginLeft:0});
        });
    });

    $("#next1").click(function(){
        $("#al1").stop().animate({marginLeft:-222.95}, function(){
            $("#al1 li:first").appendTo("#al1");
            $("#al1").css({marginLeft:0});
        });
    });

    $("#prev1").click(function(){
        $("#al1").stop().animate({marginLeft:222.95}, function(){
            $("#al1 li:last").prependTo("#al1");
            $("#al1").css({marginLeft:0});
        });
    });
});
