
//create imge list of profile picture
var imglist = ['profile.jpg','profile2.jpg'];
var imgSrcPath = './assets/images/' 
//select image tag 
var imgpath = document.querySelectorAll('.profile img');
window.onload = function(){
    //mouse over on set event
imgpath[0].addEventListener('mouseover',changeImage,true);
imgpath[0].addEventListener('mouseout',previousImage,true);
//imgpath[0],imgpath[0].removeEventListener('mouseout',changeImage,true);

}
// //mouse over on set event
// imgpath[0].addEventListener('mouseover',changeImage,true);
// imgpath[0].addEventListener('mouseout',previousImage,true);
// //imgpath[0],imgpath[0].removeEventListener('mouseout',changeImage,true);

function changeImage() {
    imgpath[0].src = imgSrcPath+imglist[1];
   // imgpath[1].src = imgSrcPath+imglist[0];
}
    
//set previos image on mouseout
function previousImage() {
    imgpath[0].src = imgSrcPath+imglist[0];
   // imgpath[1].src = imgSrcPath+imglist[0];
}