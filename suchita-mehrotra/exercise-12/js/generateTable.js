function generateTable(){
	var body = document.body;
	var table = document.createElement('table');
	body.appendChild(table);
	table.setAttribute('border','2');
	table.setAttribute('width','100%');
	table.style.margin='40px auto';
	var thead =document.createElement('thead');	  
	table.appendChild(thead);
	var tr=document.createElement('tr');
	tr.style.color='white';
	thead.appendChild(tr);
	var column_name= ['Make','Model','Release Year','Price','Color','Ranking'];
	var color =['#85929E','#5D6D7E','#34495E','#4D5656','#2E4053','#212F3C'];
	for(var k=0;k<column_name.length;k++){
		var th=document.createElement('th');
		tr.appendChild(th);
		th.style.backgroundColor=color[k];
		var text = document.createTextNode(column_name[k]);
		th.appendChild(text);
	}
	tbody = document.createElement('tbody');
	table.appendChild(tbody);
	var mobiles = [
	{ make: "Japan", model:'Samsung S',release:'20 Aug 2014',price:20000,color:'black',ranking:3 },
	{ make: "US", model:'Apple XI',release:'6 Sept 2019',price:80000,color:'gold',ranking:1 },
	{ make: "India", model:'Moto G',release:'2 Aug 2016',price:24000,color:'silver',ranking:10 },
	{ make: "Japan", model:'Samsung A',release:'9 July 2019',price:24000,color:'black',ranking:5 },
	{ make: "Japan", model:'Samsung X',release:'8 Oct 2017',price:20000,color:'black',ranking:8 },
	{ make: "US", model:'Samsung S',release:'20 Aug 2019',price:20000,color:'silver',ranking:9 },
	{ make: "India", model:'Vivo 11',release:'04 Apr 2019',price:28000,color:'black',ranking:3 },
	{ make: "Japan", model:'Samsung J9',release:'14 Jan 2018',price:17000,color:'red',ranking:6 },
	{ make: "US", model:'Samsung A6',release:'8 Feb 2012',price:20000,color:'black',ranking:7 },
	{ make: "Japan", model:'One Plus 7 Pro',release:'22 January 2019',price:33000,color:'gray',ranking:2 }
	];

	var color =['#A9CCE3','#EAFAF1','#A9CCE3','#7FB3D5','#5499C7','#2980B9','#1F618D','#D4E6F1','#CCD1D1','#B2BABB'];

	for(var i=0;i<mobiles.length;i++){
		var tr=document.createElement('tr');
		tbody.appendChild(tr);
		tr.style.backgroundColor=color[i];
		tr.style.fontWeight='bold';
		for (var key in mobiles[i]) {
			var td = document.createElement('td');
			tr.appendChild(td); 
			td.setAttribute('align','center');
			var text = document.createTextNode(mobiles[i][key]);
			td.appendChild(text);

		}

	}

}