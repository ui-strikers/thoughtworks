//Image hover effects using Event Handling
window.onload=function(){
	box=document.querySelectorAll('.box img')[0];
	if(typeof window.addEventListener=='function'){
		//call mouseover event on image
		box.addEventListener('mouseover',mouseOverImg);

		//call mouseout event on image
		box.addEventListener('mouseout',mouseOutImg);
	}
	else if(typeof window.detachEvent === 'function') {
		//call mouseover event on image
		box.attachEvent('onmouseover',mouseOverImg);

		//call mouseout event on image
		box.attachEvent('onmouseout',mouseOutImg);
	}
}

//Function declaration of mouse over image
function mouseOverImg(event){
	box.setAttribute('src','images/img2.jpg');
	console.log("Image Change to other image");
}

//Function declaration of mouse out image
function mouseOutImg(event){
	box.setAttribute('src','images/img1.jpg');
	console.log("Image Change back to previous image");
}