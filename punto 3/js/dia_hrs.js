$(document).ready(function(){
    var drh=$("#drh").val();
    var pb=$("#pb").val();
    var twd=$("#twd").val();
    var got=$("#got").val();
    
    $('#ver').click(function(){
        if ($("#peli").val() == drh){
            $("#dia").val('Lunes')
            $("#horario").val('18:00')
        };
        if ($("#peli").val() == pb){
            $("#dia").val('Martes')
            $("#horario").val('19:00')
        };
        if ($("#peli").val() == twd){
            $("#dia").val('Miercoles')
            $("#horario").val('18:00')
        };
        if ($("#peli").val() == got){
            $("#dia").val('Jueves')
            $("#horario").val('20:00')
        };
    });
});