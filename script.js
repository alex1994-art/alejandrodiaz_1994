$(document).ready(function () {
    $(".enlaces a").hover(
        function () {
            $(this).css({
                color: "hotpink",
                "font-size": "120%",
                "text-decoration": "underline",
            });
        },
        function () {
            $(this).css({
                color: "",
                "font-size": "",
                "text-decoration": "",
            });
        }
    );
});

$(document).ready(function () {
    $("#iconos").click(function () {
        $("#habilidades").animate({
            opacity: "toggle",
            height: "toggle"
        }, 1000); // Combina opacidad y altura
    });
});
