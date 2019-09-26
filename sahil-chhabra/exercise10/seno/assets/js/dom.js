var TW =(function(TW){
    TW.seno ? null : TW.seno={};

    TW.seno.dom = {};
	
    TW.seno.dom.create = (node) => {
		return document.createElement(node);
	};
	
	TW.seno.dom.append = (parent,node) => {
		parent.appendChild(node);
	};

	TW.seno.dom.text = (node,text) => {
		let element = this.create(node);
		let textNode = document.createTextNode(text);
		this.append(element,textNode);
	};
	
	TW.seno.dom.createText = (node,text) => {
		return document.createTextNode(text);
	};


	TW.seno.dom.addClass = (node,className) => {
		node.setAttribute('class',className);
	};

	TW.seno.dom.find = (selector) => {
		return document.querySelectorAll(selector);	
	};

	TW.seno.dom.findByClass = (className) => {
		return document.getElementsByClassName(className);
	};

	TW.seno.dom.findById = (id) => {
		return document.getElementById(id);
    };
    return TW;
})(TW || {})