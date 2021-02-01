/*   ANIMACIONES DE SECTION   ////////////////////////////////////////////*/ 

let animationsOne = document.querySelectorAll('.animacionOne');
let animationsTwo = document.querySelectorAll('.animacionTwo');
let animationsThree = document.querySelectorAll('.animacionThree');

function mostrar_animaciones(){
    let scrollTop = document.documentElement.scrollTop;

    for(var i = 0; i < animationsOne.length + animationsTwo.length + animationsThree.length; i++){
        let scrollAnimationOne = animationsOne[i].offsetTop;
        let scrollAnimationTwo = animationsTwo[i].offsetTop;
        let scrollAnimationThree = animationsThree[i].offsetTop;
        
        if (scrollAnimationOne - 400 < scrollTop){
            animationsOne[i].style.opacity = 1;
            animationsOne[i].classList.add("added1");
        }
        if(scrollAnimationTwo - 400 < scrollTop){
            animationsTwo[i].style.opacity = 1;
            animationsTwo[i].classList.add("added2");
        }
        if(scrollAnimationThree - 400 < scrollTop){
            animationsThree[i].style.opacity = 1;
            animationsThree[i].classList.add("added3");
        }
    }
}

window.addEventListener('scroll',mostrar_animaciones);