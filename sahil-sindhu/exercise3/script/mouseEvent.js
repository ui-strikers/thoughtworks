var img = document.querySelector('.cat-image')
img.addEventListener('mouseover',function(){
    img.setAttribute('src',"./images/cat-2.jpg")
})
img.addEventListener('mouseout',function(){
    img.setAttribute('src',"./images/cat-1.jpg")
})