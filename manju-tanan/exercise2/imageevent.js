window.onload = function () {
    var fig = document.getElementById('image');
    // Create Image Element
    var image = document.createElement('img');
    //Insert Image In Image Attribute
    image.src = '../images/butterfly-1127666__340.jpg';
    console.log("image added via javascript", image);
    image.id = "imageNature";
    image.width = 500;
    image.height = 300;
    image.alt = 'Butter fly images';
    console.log("image added via javascript", image);
    fig.appendChild(image);
    console.log("image added via javascript", fig);


    if (typeof window.addEventListener === 'function') {
        fig.addEventListener('mouseover', imageChange, true); //true capture phase
        fig.addEventListener('mouseout', imageDefault, true);

    } else if (typeof window.attachEvent === 'function') {
        fig.attachEvent('onmouseover', imageChange, true); //true capture phase
        fig.attachEvent('onmouseout', imageDefault, true);

    }

    console.log("All event handlers registered successfully!!");
};

// Change Image on Mouse over
function imageChange() {
    console.log("image change");
    var imageHover = document.getElementById("imageNature");
    imageHover.src = "../images/photo-1500622944204-b135684e99fd.jpeg";
    imageHover.width = 500;
    imageHover.height = 300;
    console.log("image change", imageHover);

}

// Change Default Image on Mouse Out
function imageDefault() {
    console.log("image change");
    var imageHover = document.getElementById("imageNature");
    imageHover.src = "../images/butterfly-1127666__340.jpg";
    imageHover.width = 500;
    imageHover.height = 300;
    console.log("image change", imageHover);

}

