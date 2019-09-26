var imagesPath = ['images/first.jpg', 'images/fourth.jpg', 'images/third.jpg'];

window.onload = function () {
	var buttonStart = document.querySelectorAll('#button-start')[0];
	//	var buttonStop = document.querySelectorAll('#button-stop')[1];

	if (typeof window.addEventListener === 'function') {
		buttonStart.addEventListener('click', buttonstart, true);
		//		buttonStop.addEventListener('click', buttonstart, true);
	} else if (typeof window.attachEvent === 'function') {
		buttonStart.addEventListener('click', buttonstart, true);
		//		buttonStop.addEventListener('click', buttonstart, true);
	}
};

var slidingImg = document.querySelectorAll('figure img')[0];
var totalImages = imagesPath.length;
var i = 0;
function buttonstart() {
	if (i > (totalImages - 1)) {
		i = 0;
	}
	slidingImg.src = imagesPath[i];
	i++;
	loopTimer = setTimeout(buttonstart, 4000);
}
buttonstart();