$(document).ready(function(){

    var pc = 0;
    var cc = 0;
    var subt= 0;
    var total = 0;
    
    $('#pc').click(function(){
        if ($('#pc').val() == 'vaio'){
            $('#pu').val(30000);
            pc = 30000;
        };
        if ($('#pc').val() == 'lenovo'){
            $('#pu').val(45000);
            pc = 45000;

        };
        if ($('#pc').val() == 'compaq'){
            $('#pu').val(50000);
            pc = 50000;

        };
        if ($('#pc').val() == 'rca'){
            $('#pu').val(9000);
            pc = 9000;

        };
        if ($('#pc').val() == 'bgh'){
            $('#pu').val(45000);
            pc = 45000;

        };
        if ($('#pc').val() == 'hp'){
            $('#pu').val(5400);
            pc = 5400;

        };
        if ($('#pc').val() == 'philco'){
            $('#pu').val(6700);
            pc = 6700;

        };
        if ($('#pc').val() == 'tablet'){
            $('#pu').val(4400);
            pc = 4400;

        };
    });
    $('#subtotal').click(function(){
        
        cc++;
        if (cc == 4){
            $('#m_subtotal').val('Ya se han registrado 3 Arts.')
        }
        else{
            var c = $('#cant').val();
            subt += pc * c;
            $('#m_subtotal').val(subt);
            $('#cant').val(0);
        };
    });

    $('#total').click(function(){
        
        console.log(total)
        total = subt;
        $('#m_subtotal').val(0);

        $('#m_total').val(total);
    
    });
    $('#reset').click(function(){
        
        $('#m_subtotal').val(0);

        $('#m_total').val(0);
        cc = 0;
        subt = 0;
        total = 0;
    
    });

});