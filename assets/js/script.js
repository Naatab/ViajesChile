$(document).ready(function () {

    // Alerta para cuando se apreta el botón //

    $("#Enviar").click(function () {
        alert("Su mensaje fue enviado correctamente. Que tenga un buen día :)");


    });

    // doble click en la sección "¿Quienes somos?" para que cambien de color //

    $(".col-4").dblclick(function () {
        $(this).css({
            "color": "blue",
        });
    });

    // doble click en la palabra "Destacados" para que desaparezcan las tarjetas //

    $(".titulo").dblclick(function () {
        $(".fotos").toggle();
    });

});