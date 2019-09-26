window.onload=function(){
	var btn1 = document.querySelectorAll('.btn')[0];
	var btn2 = document.querySelectorAll('.btn')[1];
	image0 = document.getElementsByTagName('img')[0];

//added for cross browser support
if(typeof window.addEventListener === 'function') {
			btn1.addEventListener('click',startslideShow,true); //true capture phase
			btn2.addEventListener('click',stopslideShow,true);
		} else if(typeof window.attachEvent === 'function') {
			btn1.attachEvent('onclick',startslideShow,true); //true capture phase
			btn2.attachEvent('onclick',stopslideShow,true); 
		}
	};
	function startslideShow(evt){
		var counter = 1;
		clock = window.setInterval(function() {
			image0.setAttribute('src',`images/f${counter++}.jpg`);		
			var finishEvent = new CustomEvent('slideshowprogress',{detail:{current:counter}});	
			document.dispatchEvent(finishEvent);
			if(counter > 10) {
				counter = 1;
			}
		},2000);
	}

	function stopslideShow(evt){

		clearInterval(clock);

	}