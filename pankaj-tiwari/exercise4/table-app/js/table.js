// start function of adding table and show data in table
		
		function addTable() {
					var button = document.getElementsByTagName("button");

		// create a status variable for managing number of TH in table
		var status = false;
				
		//search content section id in main
		var main = document.getElementById("content");
			
		// start creating a table
		var table = document.createElement('table');
		main.appendChild(table); //apend table in content section
		table.setAttribute("style", "border-spacing:0;border-width:0;padding:0;max-width: 800px; width: 100%;text-align: center; margin: 0 auto;margin-top: 100px;");
		// end of creating a table
			
		//start creating a thead
		var tableHead = document.createElement('thead');
		tableHead.setAttribute("style", "background:#ccc;margin-bottom:20px;font-weight:bold;font-size:20px;");
		table.appendChild(tableHead);
		//end of creating thead
		
		//start of creating tbody 
		var tableBody = document.createElement('tbody');
		table.appendChild(tableBody);
		tableBody.setAttribute("style", "background:#cccccc82;")
		//end of creating tbody

			
		// start creating tr under tbody multiple times using loop
		for (var i = 0; i < mobiles.length; i++) { // here we used array length
			
		// random color code generator in tr
		function colorGenerator() {
				var letters = '0123456789ABCDEF';
				var color = '#';
				for (var i = 0; i < 6; i++) {
					color += letters[Math.floor(Math.random() * 16)];
				}
				return color;
		}
		//end of random color code generator

		// creating multiple tr with the help of loop
		var tr = document.createElement('tr');
		tableBody.appendChild(tr); // apend tr in tbody
			
		// use color geenrator for different color
		tr.setAttribute("style", `background:${colorGenerator()}`);

		// save values and keys of object with the use of index value
		var keys = Object.keys(mobiles[0]);
		var values = Object.values(mobiles[0]);
		
		// create multiple td under tr 
			
		for (var j = 0; j < values.length; j++) {
			
		// status default value is false which we set on top and here in condition it reverse due to ! operator so when status is true it enters in condition otherwise it only generate td in tr, with the help of this status we are using dynamic behavior of TH in thead section
			
		if (!status) {
			for (var k = 0; k < keys.length; k++) {
				var th = document.createElement('th');
				tableHead.appendChild(th);
				th.appendChild(document.createTextNode(keys[k]));
				th.setAttribute("style", "padding:10px;")
			}
			status = true;// exit loop due to it always be flase when entering in loop due ti ! operator so it will not access the loop again
		}
			
			var td = document.createElement('td');
			td.appendChild(document.createTextNode(mobiles[i][keys[j]]));//append textnode in td b y using i and j value of object
			tr.appendChild(td);
			td.setAttribute("style", "padding:6px; color:white;")
		}
	}
}

// 
