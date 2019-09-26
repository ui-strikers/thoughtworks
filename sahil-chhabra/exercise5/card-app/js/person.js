// Person module which contains common properties as person have

//here we are creating IIFE function with multiple level naming
var THOUGHTWORKS = ( function (THOUGHTWORKS){ // we pass return value in argument
	
	THOUGHTWORKS.Person = function(uid,name,phone,email){
		this.uid = uid;
		this.name = name;
		this.phone = phone;
		this.email = email;
	};    
	
	return THOUGHTWORKS; 
	// return a function will used to for modular programming.
	
})( THOUGHTWORKS || {}); 
// here we use deafault object beacuse of making module pattern pattern free or for loosely type behavior of module(component)














/* working of program

<! ------- STEPS ------ >
1. firstly we use IIFE for multiple reasons:
 1.1 for safing the global namespace pollution(iife is used for placing all library code inside of a local scope , beacuse it will not and not polluted the whole window(global) element that pollution is known as Global namespace Pollution)
 
 */
