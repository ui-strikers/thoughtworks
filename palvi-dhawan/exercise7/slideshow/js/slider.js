var gallery = document.getElementById('img-gallery');
var imgsources = 
    [
        'slide1.jpg',
        'slide2.jpg',
        'slide3.jpg',
        'slide4.jpg',
        'slide5.jpg',
        'slide6.jpg',
        'slide7.jpg',
        'slide8.jpg'
    ];

var imgsrc = ''

//using ForEach LOOP
// imgsources.forEach(function(element, index) {
//     imgsrc += `<img index=${index} src=images/${element} class="img-slider">`
// });
// document.getElementById('img-gallery').innerHTML = imgsrc;

var img ;
    for(var i=0 ; i< imgsources.length ; i++){
        img = document.createElement('img');
        img.setAttribute(`class`,`img-slider`);
        img.setAttribute(`src`,`images/${imgsources[i]}`);
        console.log(img);
        document.getElementById('img-gallery').appendChild(img);
    }

var slideIndex = 0; 
    function showSlides() 
    { 
        // get the array of divs' with classname image-sliderfade 
        var slides = document.getElementsByClassName("img-slider");  
       
        for (var i = 0; i < slides.length; i++) { 
            // initially set the display to  
            // none for every image. 
            slides[i].style.display = "none";  
        } 
   
        // increase by 1, Global variable 
        slideIndex++;  
        if (slideIndex > slides.length)  
        { 
            slideIndex = 1; 
        } 
        slides[slideIndex - 1].style.display = "block"; 
        //dots[slideIndex - 1].className += " active"; 
  
        // Change image every 2 seconds 
        setTimeout(showSlides, 2000);  
    } 

//showSlides(); // call showslide method 
var stop = document.getElementById('stop');
    if(typeof window.addEventListener === 'function'){
        start.addEventListener('click', showSlides);
        stop.removeEventListener('click', removeSlides); 
    }
    else if(typeof window.attachEvent === 'function'){
        start.attachEvent('onclick', showSlides);
        stop.ditachEvent('onclick', removeSlides);     
    }

    function removeSlides(){
        clearTimeout(showSlides, 2000);  
    }


