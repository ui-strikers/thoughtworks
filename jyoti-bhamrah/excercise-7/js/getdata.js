var dom = (function(dom){

	moviesSection = document.querySelectorAll('.list-of-movies')[0];	//Global variable

	// Create ELement method for reducing the code
	dom.createNode = (nodeName)=> {
		return document.createElement(nodeName);
	}	

	// Append ELement method
	dom.append = (parentNode,childNode) => {
		parentNode.appendChild(childNode);
	}	

	return dom;

})(dom || {}); //for not to pollute global namespace





