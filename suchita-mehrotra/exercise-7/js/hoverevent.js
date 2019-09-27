window.onload=function(){
	var img1 = document.querySelectorAll('#flower')[0];

	if(typeof window.addEventListener === 'function') {
		img1.addEventListener('mouseover',mouseOverImg,true); 
		img1.addEventListener('mouseenter',mouseEnterImg,true); 
		img1.addEventListener('mouseout',mouseOutImg,true);
	} else if(typeof window.attachEvent === 'function') {
		img1.attachEvent('onmouseover',mouseOverImg,true); 
		img1.attachEvent('onmouseenter',mouseEnterImg,true); 
		img1.attachEvent('onmouseout',mouseOutImg,true);
	}
};

function mouseOverImg(evt){
	var img_target = evt.target;
	img_target.setAttribute('src','images/f2.jpg');
	img_target.setAttribute('class','img');
}
function mouseEnterImg(evt){
	var img_target = evt.target;
	img_target.setAttribute('src','images/f2.jpg');
	img_target.setAttribute('class','img');
}
function mouseOutImg(evt){
	var img_target = evt.target;
	img_target.setAttribute('src','images/f1.jpg');
	img_target.setAttribute('class','img');	
}