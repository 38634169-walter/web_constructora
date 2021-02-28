$(document).ready(mostrar_menu);

let numero = 1;
let num2 = 1;

function mostrar_menu(){
    
    $('.toggle-menu').click(mostrar);

    $('.x-icono-responsive').click(ocultar);
    
    
    if ($(window).width() <= 800){
        $('section').click(ocultar);
        $('footer').click(ocultar);
        $('#sub-menu-li').click(submenu_flechas);
    }

    $('.mostrar-menu-btn').click(menu_flechas);

}


function mostrar(){
    $('.toggle-menu').css({'display':'none'});
    $('.x-icono-responsive').css({'display':'block'});
    
    $('.menu-container').css({'left':'0','transition':'all 1s'});
    num2=0;
    menu_flechas();
    

}

function ocultar(){
    $('.toggle-menu').css({'display':'block'});
    $('.x-icono-responsive').css({'display':'none'});

    $('.menu-container').css({'left':'-100%'});
}

function menu_flechas(){
    
    if (num2 == 1){
        $('.sub-menu').css("display","block");
        $('.flechaAbajo').css("display","none");
        $('.flechaDerecha').css("display","flex");
        num2=0;
    }
    else{
        $('.sub-menu').css("display","none");
        $('.flechaAbajo').css("display","flex");
        $('.flechaDerecha').css("display","none");
        num2=1;
    }
}

function submenu_flechas(){
    $('.menu-container').animate({
        left:'-100%'
    });
    $('.toggle-menu').toggleClass('remove');
    $('.x-icono-responsive').toggleClass('show');
    num2=0;
    ocultar();
}