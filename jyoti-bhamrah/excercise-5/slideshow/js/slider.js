window.onload=function(){

	document.addEventListener('slideShowProgress',function(evt) {
		var progress0 = document.querySelectorAll('.progress-bar')[0];
		console.log(evt.detail);
		progress0.value = evt.detail.current * 10;
	});


	slide=document.querySelectorAll('.slides img')[0];
	start_btn=document.querySelectorAll('.start-btn')[0];
	stop_btn=document.querySelectorAll('.stop-btn')[0];
	currentSlide=1;

	if(typeof window.addEventListener=='function'){
		//call mouseover event on image
		start_btn.addEventListener('click',startSlider);

		//call mouseout event on image
		stop_btn.addEventListener('click',stopSlider);
	}
	else if(typeof window.detachEvent === 'function') {
		//call mouseover event on image
		start_btn.attachEvent('onclick',startSlider);

		//call mouseout event on image
		stop_btn.attachEvent('onclick',stopSlider);
	}
}
function startSlider(){
	debugger;
	slideInterval = setInterval(function(){
		slide.setAttribute('src',`images/slider${currentSlide}.jpg`);			
		var finishEvent = new CustomEvent('slideShowProgress',{detail:{current:currentSlide}});	
		document.dispatchEvent(finishEvent);	
		currentSlide++;
		if(currentSlide > 10){
			currentSlide=1;
		}
	},2000);
}

function stopSlider(){
	clearInterval(slideInterval);
	var stopEvent = new CustomEvent('slideShowStop');	
	document.dispatchEvent(stopEvent);
}



