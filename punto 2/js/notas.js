$(document).ready(function(){
    //console.log('hola si estoy funcionando')
    $('#enviar').click(function(){
        
        var n1=parseFloat($('#n1').val());
        var n2=parseFloat($('#n2').val());
        var por=parseFloat($('#lista').val());

        if (n1 >= 6 && n2 >= 6 && por >= 70 && por < 80 ){
            $('#res').val('Alumno Regular')
        };
        if (n1 <= 4 || n2 <= 4){
            $('#res').val('Alumno Desaprobado')
        };
        if (n1 >= 8 && n2 >= 8 && por >= 80){
            $('#res').val('Alumno Promocionado')
        };
        if (por < 30){
            $('#res').val('Alumno Libre')
        };
        console.log('hola si estoy funcionando')

    });
    
});