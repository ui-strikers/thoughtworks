var dom=(function(dom){


})(dom || {}); //for not to pollute global namespace

window.onload=function(){
	moviesSection = document.querySelectorAll('.list-of-movies')[0];	//Global variable
	displayData(movieList.sort()); //Load function on page load
}

// Create ELement method for reducing the code
function createNode(nodeName) {
	return document.createElement(nodeName);
}	

// Append ELement method
function append(parentNode,childNode) {
	parentNode.appendChild(childNode);
}	






