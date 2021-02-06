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
            $('.flechaDerecha').css("display","flex");
            num2=0;
        }
        else{
            $('.flechaAbajo').css("display","flex");
            $('.flechaDerecha').css("display","none");
            num2=1;
        }
    })
    $('.sub-menu-li').click(function(){
        $('.menu-container').animate({
            left:'-100%'
        });
        numero = 1;
    })

}