$(document).ready(mostrar_menu);

let numero = 1;
let num2 = 1;

function mostrar_menu(){
    
    $('.toggle-menu').click(function(){
        
        $('.toggle-menu').toggleClass('remove');
        $('.x-icono-responsive').toggleClass('show');
        
        $('.menu-container').animate({
            left:'0'
        });
        
    });

    $('.x-icono-responsive').click(function(){
        
        $('.toggle-menu').toggleClass('remove');
        $('.x-icono-responsive').toggleClass('show');
    
        $('.menu-container').animate({
            left:'-100%'
        });
    });

    $('#mostrar-menu-btn').click(function(){
        $('.sub-menu').toggleClass('show');
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
        
    })

}