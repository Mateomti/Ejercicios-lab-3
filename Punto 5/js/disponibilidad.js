$(document).ready(function(){

    var frozen = $("#fr").val(),
        divergente = $("#div").val(),
        sirenas = $("#sir").val(),
        insurgente = $("#ins").val();
    $("#consulta").click(function(){
        if ($("#peli").val() == frozen){
            
            $("#res").val('Para prestamo');
            $("#pres").val('Devolver el 21/04/2024')
        }
        if ($("#peli").val() == divergente){
            
            $("#res").val('Solo lectura en sala');
            $("#pres").val('No Disponible para prestamo')
        }
        if ($("#peli").val() == sirenas){
            
            $("#res").val('Para prestamo');
            $("#pres").val('Devolver el 21/04/2024')
        }
        if ($("#peli").val() == insurgente){
            
            $("#res").val('Solo lectura en sala');
            $("#pres").val('No Disponible para prestamo')
        }
    });

});