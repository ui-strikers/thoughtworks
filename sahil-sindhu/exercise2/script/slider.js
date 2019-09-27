//MAKE SLIDER USING TRANSLATE
//SELECT BUTTONS AND NO OF SLIDES
var buttonHolder = document.querySelector('.slider__button');
var leftButton = buttonHolder.childNodes[1];
var rightButton = buttonHolder.childNodes[3];
var slider = document.querySelector('.slider');
var totalslides = 10;
var currentslide = 1;

//DISABLE LEFT BUTTON ON 1ST SLIDE
leftButton.classList.add('slider__button--disabled')
console.log(leftButton)

//REGISTRING FUNCTION ON LEFT AND RIGHT BUTTON TO SLIDE LEFT AND RIGHT
if(window.addEventListener){
    rightButton.addEventListener('click',slideUp);
    leftButton.addEventListener('click',slideDown);
}
else{
    rightButton.attachEvent('click',slideUp);
    leftButton.attachEvent('click',slideDown);
}

//ON CLICK OF RIGHT BUTTON SLIDE TO NEXT SLIDE
function slideUp(){
    //WONT WORK ON LAST SLIDE
    if(currentslide <= totalslides - 1){
        //ACTIVATE THE LEFT  BUTTON
       if (currentslide == 1)
            leftButton.classList.remove('slider__button--disabled')

        var toSlide = -currentslide*100
        slider.style.transform = `translateX(${toSlide}%)`;
        currentslide += 1;
        //ON LAST SLIDE DEACTIVATE THE RIGHT BUTTON
        if (currentslide == 10)
            rightButton.classList.add('slider__button--disabled')
    }
}

//ON CLICK OF LEFT BUTTON SLIDE TO PREVIOUS IMAGE
function slideDown(){
    //WONT WORK ON THE FIRST SLIDE
    if(currentslide > 1){
        //ON LAST SLIDE DEACTIVATE RIGHT BUTTON 
        if (currentslide == 10)
             rightButton.classList.remove('slider__button--disabled')
        
        var toSlide = -currentslide*100 + 200;
        slider.style.transform = `translateX(${toSlide}%)`;
        currentslide -= 1;
     }
     else{
         //ON FIRST SLIDE MAKE LEFT BUTTON DEACTIVATE
        leftButton.classList.add('slider__button--disabled')
     }
 }

//  window.onload = function(){
//      window.setInterval(function(){
//         if(currentslide<=9){
            
//             slideUp();
//         } 
//         else{
//             currentslide = 1;
//             slider.style.transform = `translateX(0)`;
//         }++
        
//      },2000)
//  }
