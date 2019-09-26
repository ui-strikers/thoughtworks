
	function fetchData() {
	
		fetch('data/movieslist.json')
	   	   .then(function(res) {
			 return res.json();
              console.log('get data');
     		   }).then(function(data) {
			displayData(data);
     		   }).catch(function(err) {	
				console.log('Error')
		   });

		console.log("Async Request sent to server!!!!");		
	}
	fetchData();


	function createNode(nodeName) {
		return document.createElement(nodeName);
	}

	function append(parentNode,chileNode) {
		parentNode.appendChild(chileNode);

	}



	var container = document.querySelectorAll('.container')[0];
	var leftSidebar = document.querySelectorAll('.left-sidebar')[0];
	row = document.querySelectorAll('.row')[0];
	

   function displayData(movieslist) {
	   
	    movieslist.forEach(function(movies){
		    var column = document.createElement('div');
		    column.setAttribute('class','column');

		    console.log('inner div created');
		
	        var p = document.createElement('p'); 
		    var moviename = document.createTextNode(movies.title);
		    console.log(moviename);

		    var span = document.createElement('span');
		    var year = document.createTextNode(movies.year); 		    
		    console.log(year);
		    span.appendChild(year); 

		    console.log(p);
		    p.appendChild(moviename);
		    p.appendChild(span);      	
			column.appendChild(p);
			row.appendChild(column);
        
    });

}


