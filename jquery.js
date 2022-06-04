$(document).ready(function(){
    $("#hovering").html("Hover Over me!");
    $("#hovering").css({"color": "blue", "font-size": "16px", "fontWeight": "bold"});

    $("#clickme").on("click", function (){
        ("#clicktext").html("Mouse Click!");
        $("#clicktext").css({"color": "green"});
    });

    $("#hovering").on("mouseover", function(){
        $("#hovertext").html("~HOVERING!~");
    })

})
