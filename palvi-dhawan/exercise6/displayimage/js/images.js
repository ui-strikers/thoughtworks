var main = document.querySelector('main');
var header = document.createElement('header');
var h1 = document.createElement('h1');
var headtext = document.createTextNode('On hover Image See The Changes');

    h1.appendChild(headtext);
    header.appendChild(h1);
    main.appendChild(header) ;
    console.log(main);

        var article = document.createElement('article');
        var img = document.createElement('img');
        img.setAttribute('src','images/flower2.jpg');
        img.setAttribute('id','flower');
        var para = document.createElement('p');
        var paraText = document.createTextNode('An article should make sense on its own and it should be     possible to distribute it independently from the rest of the site.');

            para.appendChild(paraText);
            article.appendChild(img);
            article.appendChild(para);
            main.appendChild(article);
            console.log(main);
 

                var image = document.querySelector('#flower');
                if(typeof addEventListener === 'function'){
                    image.addEventListener('mouseover',changeImage); 
                    image.addEventListener('mouseout',originalImage);
                }
                else if(typeof attachEvent === 'function'){
                    image.attachEvent('onmouseover',changeImage); 
                    image.attachEvent('onmouseout',originalImage);
                }



                    function changeImage(event){
                        console.log("mouseover", event);
                        image.setAttribute("src","images/flower3.jpg")

                    }

                    function originalImage(event){
                        console.log("mouseout" , event);
                        image.setAttribute("src","images/flower2.jpg");

                    }
