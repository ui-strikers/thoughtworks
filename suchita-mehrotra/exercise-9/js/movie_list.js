
function createElements(e){
	return document.createElement(e);
}

function append(parentNode,childNode) {
	parentNode.appendChild(childNode);
}

movieList.map(function(movies){
	var sectionNode = createElements('section');
	sectionNode.setAttribute('class','movielist');

	sectionNode.addEventListener('click',function(){
	//debugger;
	document.getElementsByClassName('rightSpan')[0].innerHTML=movies.title; 
    });

    

	sectionNode.style.position='relative';
	var spanNode=createElements('span');
	var br=createElements('br');
	var title = document.createTextNode(movies.title);;
	var text2 = document.createTextNode(' - ');
	var year = document.createTextNode(movies.year);
	var action = document.createTextNode(movies.genres);

	append(spanNode,title);
	append(spanNode,br);
	append(spanNode,year);
	append(spanNode,text2);
	append(spanNode,action);
	append(sectionNode,spanNode);
	spanNode.setAttribute('class','leftSpan');
	append(movie_list,sectionNode);
});


