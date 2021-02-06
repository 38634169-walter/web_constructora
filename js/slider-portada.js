$(document).ready(slider_portada);

var indice = 0;


function slider_portada(){

    $('.paginacion li').eq(indice).css({"background":"red"});
    
    $('.paginacion li').click(function(){
        indice = $(this).index();

        $('.paginacion li').css({"background":"rgb(151, 151, 151)"});
        $(this).css({"background":"red"});

        $('.slider-portada').hide();
        $('.slider-portada').eq(indice).fadeIn();
    });



    $('.flecha-izquierda').click(function (){
        indice -- ;
        if(indice < 0){
            indice = 2;
        }
        $('.slider-portada').hide();
        $('.slider-portada').eq(indice).fadeIn();

        $('.paginacion li').css({"background":"rgb(151, 151, 151)"});
        $('.paginacion li').eq(indice).css({"background":"red"});
    });

    $('.icono-flecha-derecha').click(function(){
        indice ++ ;
        if(indice > 2){
            indice = 0;
        }
        $('.slider-portada').hide();
        $('.slider-portada').eq(indice).fadeIn();

        $('.paginacion li').css({"background":"rgb(151, 151, 151)"});
        $('.paginacion li').eq(indice).css({"background":"red"});
    });

    setInterval(function(){
        indice ++ ;
        if(indice > 2){
            indice = 0;
        }
        $('.slider-portada').hide();
        $('.slider-portada').eq(indice).fadeIn();

        $('.paginacion li').css({"background":"rgb(151, 151, 151)"});
        $('.paginacion li').eq(indice).css({"background":"red"});

    },5000);
}