function onload() {
        var container = document.querySelectorAll(".container");

        var img = document.createElement('img');
        img.setAttribute('src', 'img/panda.jpg');
        console.log(img);

        container.appendChild(img);


            // container = document.querySelectorAll('.container')[0];

        if(typeof window.addEventListener === 'function') {
            img.addEventListener('mouseover', mouseOver, true);
            img.addEventListener('mouseout', mouseOut, true);
        } else if(typeof window.attachEvent === 'function') {
            img.attachEvent('mouseover', mouseOver, true);
            img.attachEvent('mouseout', mouseOut, true);
        }

            // originalImage();

        function mouseOver() {
            // var image = document.createElement('img');
            img.setAttribute('src', 'img/image1.jpg');
            img.setAttribute('title', 'This is panda image');
            img.setAttribute('alt', 'This is panda image');
            img.width = 200;
            img.height = 200;
            console.log('mouseover');

            // imgContainer.appendChild(image);
        }

        function mouseOut() {
            // var originalImage = document.createElement('img');
            img.setAttribute('src', 'img/panda.jpg');
            img.setAttribute('title', 'This is original panda image');
            img.setAttribute('alt', 'This is original panda image');
            img.width = 200;
            img.height = 200;
            console.log('mouseout event');

            // imgContainer.appendChild(originalImage);
        }

};