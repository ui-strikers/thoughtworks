function createNode(nodeName) {
	return document.createElement(nodeName);
}	

function append(parentNode,childNode) {
	parentNode.appendChild(childNode);
}	
window.onload=function(){
	moviesPanel = document.querySelectorAll('.movie-list')[0];	
	displayData(movieList.sort()); 
}





