$(document).ready(function () {

    $("#Enviar").click(function () {
        alert("Su mensaje fue enviado correctamente. Que tenga un buen día :)");


    });

    $(".col-4").dblclick(function () {
        $(this).css({
            "color": "blue",
        });
    });

    $(".titulo").dblclick(function () {
        $(".fotos").toggle();
    });

});