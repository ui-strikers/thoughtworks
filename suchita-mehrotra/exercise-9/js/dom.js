var dom = (function(dom) {

	dom.create = (node) => {
		return document.createElement(node);
	};

	dom.append = (parent,node) => {
		parent.appendChild(node);
	};
	
	dom.addClass = (node,className) => {
		node.setAttribute('class',className);
	};

	dom.find = (selector) => {
		return document.querySelectorAll(selector);	
	};

	dom.findByClass = (className) => {
		return document.getElementsByClassName(className);
	};
	return dom;	
})(dom || {})