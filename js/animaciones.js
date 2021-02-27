/*   ANIMACIONES DE SECTION   ////////////////////////////////////////////*/ 

let animationsOne = document.querySelectorAll('.animacionOne');
let animationsTwo = document.querySelectorAll('.animacionTwo');
let animationsThree = document.querySelectorAll('.animacionThree');
let animationsFour = document.querySelectorAll('.animacionFour');
let animationsFive = document.querySelectorAll('.animacionFive');
let animationsSix = document.querySelectorAll('.animacionSix');
let animationsSeven = document.querySelectorAll('.animacionSeven');
let animationsEight = document.querySelectorAll('.animacionEight');
let animationsNine = document.querySelectorAll('.animacionNine');

function mostrar_animaciones(){
    let scrollTop = document.documentElement.scrollTop;

    for(var i = 0; i < 9; i++){
        let scrollAnimationOne = animationsOne[i].offsetTop;
        let scrollAnimationTwo = animationsTwo[i].offsetTop;
        let scrollAnimationThree = animationsThree[i].offsetTop;

        let scrollAnimationFour = animationsFour[i].offsetTop;
        let scrollAnimationFive = animationsFive[i].offsetTop;
        let scrollAnimationSix = animationsSix[i].offsetTop;

        let scrollAnimationSeven = animationsSeven[i].offsetTop;
        let scrollAnimationEight = animationsEight[i].offsetTop;
        let scrollAnimationNine = animationsNine[i].offsetTop;
        
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
        if (scrollAnimationFour - 400 < scrollTop){
            animationsFour[i].style.opacity = 1;
            animationsFour[i].classList.add("added1");
        }
        if(scrollAnimationFive - 400 < scrollTop){
            animationsFive[i].style.opacity = 1;
            animationsFive[i].classList.add("added2");
        }
        if(scrollAnimationSix - 400 < scrollTop){
            animationsSix[i].style.opacity = 1;
            animationsSix[i].classList.add("added3");
        }
        if (scrollAnimationSeven - 400 < scrollTop){
            animationsSeven[i].style.opacity = 1;
            animationsSeven[i].classList.add("added1");
        }
        if(scrollAnimationEight - 400 < scrollTop){
            animationsEight[i].style.opacity = 1;
            animationsEight[i].classList.add("added2");
        }
        if(scrollAnimationNine - 400 < scrollTop){
            animationsNine[i].style.opacity = 1;
            animationsNine[i].classList.add("added3");
        }
    }
}

window.addEventListener('scroll',mostrar_animaciones);