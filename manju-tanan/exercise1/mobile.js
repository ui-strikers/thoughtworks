function generateTable(){
		//array containing mobile records
		var mobiles = [
			{
				make:"Samsung",
				Model:"Galaxy A50s",
				launchdate :"September 11, 2019 (Official)",
				weight: "161 grams",
				color:"Prism Crush White",
				ranking:"5 star"
			},
			{
	            make:"Xiaomi",
				Model:"Redmi K20",
				launchdate :"July 22, 2019 (Official)",
				weight: "191 grams",
				color:"Carbon Black",
				ranking:"3.5 star"    
			},
			{
				make:"Xiaomi2",
				Model:"Redmi K30",
				launchdate :"July 20, 2019 (Official)",
				weight: "131 grams",
				color:"Flame Red",
				ranking:"3.9 star"
			},
			{
	            make:"Xiaomi3",
				Model:"Redmi G30",
				launchdate :"June 20, 2019 (Official)",
				weight: "151 grams",
				color:"Glacier Blue",
				ranking:"4.9 star"
			},
			{
				make:"Xiaomi4",
				Model:"Redmi GF0",
				launchdate :"August 18, 2019 (Official)",
				weight: "101 grams",
				color:"Pearl White",
				ranking:"2.9 star"
	            
			},
			{
	            make:"Xiaomi5",
				Model:"Redmi KF0",
				launchdate :"December 18, 2019 (Official)",
				weight: "101 grams",
				color:"Pearl White",
				ranking:"2.9 star"
			},
			{
				make:"Xiaomi5",
				Model:"Redmi KF0",
				launchdate :"December 18, 2019 (Official)",
				weight: "101 grams",
				color:"Pearl White",
				ranking:"2.9 star"
			},
			{
			    make:"Xiaomi5",
				Model:"Redmi KF0",
				launchdate :"December 18, 2019 (Official)",
				weight: "101 grams",
				color:"Pearl White",
				ranking:"2.9 star"	
			},
			{
				make:"Xiaomi5",
				Model:"Redmi KF0",
				launchdate :"December 18, 2019 (Official)",
				weight: "101 grams",
				color:"Pearl White",
				ranking:"2.9 star"
			},
			{
				make:"Xiaomi5",
				Model:"Redmi KF0",
				launchdate :"December 18, 2019 (Official)",
				weight: "101 grams",
				color:"Pearl White",
				ranking:"2.9 star"
			},
			{
				make:"Xiaomi5",
				Model:"Redmi KF0",
				launchdate :"December 18, 2019 (Official)",
				weight: "101 grams",
				color:"Pearl White",
				ranking:"2.9 star"

			}
		]
		 var body = document.getElementsByTagName("body")[0];
		//create a html table
		var table = document.createElement("table");
		table.border="3";
		console.log(table);
		//var columns = Object.keys();
        var noOfColumns = Object.keys(mobiles[0]).length;

        //add the header Data
        var row = document.createElement("tr");
        row.style.backgroundColor = "#dddddd";
		
		for(var i=0;i<noOfColumns;i++){
			var mobileKeys = Object.keys(mobiles[0]);
			var tableHead = document.createElement("th");
		    var tableData=document.createTextNode(mobileKeys[i]);
			tableHead.appendChild(tableData);
			console.log(tableHead);
            row.appendChild(tableHead);
		}

		//add the header Data
		table.appendChild(row);
		body.appendChild(table);
		var mobileLen = mobiles.length;
        
		for(var i=0;i<mobileLen;i++){
			var row = document.createElement("tr");
			var r = Math.floor(Math.random()*100);
			var g = Math.floor(Math.random()*100);
			var b = Math.floor(Math.random()*100);
			row.style.backgroundColor="#"+r+g+b;
			for(var j in mobiles[i]){
				var cell = document.createElement("td");
				var cellText=document.createTextNode(mobiles[i][j]);
				cell.appendChild(cellText);
                row.appendChild(cell);
			}
			table.appendChild(row);
		}
	}