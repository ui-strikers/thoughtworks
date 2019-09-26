	document.addEventListener('slideshowprogress',function(evt) {
		var progress0 = document.querySelectorAll('.progress-bar')[0];
		console.log(evt.detail);
		progress0.value = evt.detail.current * 10;
	});
	var image0 = document.querySelectorAll('.slide-image')[0];
	var buttonList = document.querySelectorAll('.btn');
	var btn0 = buttonList[0];
	var btn1 = buttonList[1];
	var counter = 1;
	btn0.addEventListener('click',function () {
		clock = window.setInterval(function() {
			image0.setAttribute('src',`images/slide-img-${counter++}.jpg`);		
			var finishEvent = new CustomEvent('slideshowprogress',{detail:{current:counter}});	
			document.dispatchEvent(finishEvent);
			if(counter > 10) {
				counter = 1;
			}
		},2000);
	});
	btn1.addEventListener('click',function () {
		window.clearInterval(clock);	
		var stopEvent = new CustomEvent('slideshowstop');	
		document.dispatchEvent(stopEvent);
	});