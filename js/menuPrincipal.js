$(document).ready(mostrar_menu);

let numero = 1;
let num2 = 1;

function mostrar_menu(){
    
    $('.toggle-menu').click(function(){
        if (numero == 1){
            $('.menu-container').animate({
                left:'0'
            });
            numero = 0;
        }
        else{
            $('.menu-container').animate({
                left:'-100%'
            });
            numero = 1;
        }

    });

    $('#mostrar-menu-btn').click(function(){
        $(this).children('.sub-menu').slideToggle();
        if (num2 == 1){
            $('.flechaAbajo').css("display","none");
            $('.flechaDerecha').css("display","contents");
            num2=0;
        }
        else{
            $('.flechaAbajo').css("display","contents");
            $('.flechaDerecha').css("display","none");
            num2=1;
        }
    })

}