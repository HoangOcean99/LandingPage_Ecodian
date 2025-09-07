// function hoverMenu(){
//     // var menu_option = document.getElementsByClassName("menu-option");
//     alert("Hello");
// }
$(document).ready(function() {
    $(".menu-option").hover(
        function() {
            $(this).css("border-bottom", "5.5px solid white");
        }, // Khi rê chuột vào
        function() {
            $(this).css("border", "none");
        } // Khi rời chuột (tuỳ chỉnh)
    );
    $(".button-download").hover(
        function(){
            $(this).css("top", "-7.5px");
        },
        function(){
            $(this).css("top", "0px");
        }
    );
    $("#button1").click(function(){
        $("html, body").animate({ scrollTop: $("#titleAboutUs").offset().top }, 800);
    });
    $("#button2").click(function(){
        $("html, body").animate({ scrollTop: $("#titleOurProject").offset().top }, 800);
    });
    $("#button3").click(function(){
        $("html, body").animate({ scrollTop: $("#titleFeedBack").offset().top }, 800);
    });
    $("#button4").click(function(){
        $("html, body").animate({ scrollTop: $("#titleContact").offset().top }, 800);
    });
    $(".button").hover(
        function(){
            $(this).css("top", "-7.5px");
        },
        function(){
            $(this).css("top", "0px");
        }
    );
    $("#projectButton1").click(function(){
        $("#imageIntroGame").attr("src", "InterFace.png");
    });
    $("#projectButton2").click(function(){
        $("#imageIntroGame").attr("src", "Map1.png");
    });
    $("#projectButton3").click(function(){
        $("#imageIntroGame").attr("src", "MiniGame.png");
    });
    $("#projectButton4").click(function(){
        $("#imageIntroGame").attr("src", "Question.png");
    });
});