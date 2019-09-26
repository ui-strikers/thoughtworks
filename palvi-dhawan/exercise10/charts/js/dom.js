var dom = (function(dom) {

	dom.create = (node) => {
		return document.createElement(node);
    };
    dom.find = (selector) => {
		return document.querySelector(selector);	
	};
    return dom;

})(dom || {});