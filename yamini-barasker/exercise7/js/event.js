window.onload = function () {
		container = document.querySelectorAll('.container')[0];	
		var img = document.querySelectorAll('img')[0];
		if(typeof window.addEventListener === 'function') {
			img.addEventListener('mouseover',addImg,true); 
			img.addEventListener('mouseout',removeImg,true); 
		} else if(typeof window.attachEvent === 'function') {
			img.attachEvent('mouseover',addImg,true);
		}
		console.log("All event handlers registered successfully!!");
	};

	function addImg(evt) {
		var img1 = document.querySelectorAll('img')[0];
		img1.setAttribute('src','imgs/img2.jpg'); 
		console.log("Image has been changed");
		
	} 

	function removeImg(evt){
		var img1 = document.querySelectorAll('img')[0];
		img1.setAttribute('src','imgs/canvasflip1.png'); 
		console.log("Image has been again changed");

	}
	