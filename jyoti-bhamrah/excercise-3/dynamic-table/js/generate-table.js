function createTable(){
	var node=document.body;
	table=document.createElement('table'); //Create Table 
	//Give styling to table 
	table.setAttribute('style','font-family:calibri;margin-top:1em;border-collapse:collapse');
	table.setAttribute('width','100%');
	table.setAttribute('border','1');
	table.setAttribute('cellpadding','7');
	table.setAttribute('cellspacing','0');
	node.appendChild(table);

	//Define no. of rows and columns need in table to generate
	rows=10;
	cols=6;

	tblHead();	
	tblBody();
}

function tblHead(){

	var thead=document.createElement('thead');//Creating thead of table
	table.appendChild(thead);//Append thead in table

	var theadRow=document.createElement('tr');//Creating tr in thead of table
	thead.appendChild(theadRow);//Append tr in thead of table

	var tableHeadings=['Make','Model','Release Year','Price','Color','Ranking']; //Array of heading values
	var tableHeadingColors=['#253c81','#16a085','#14628f','#0099cc','#009966','#253c81']; //Array of heading values

	for(var j=0;j<cols;j++){
		var th=document.createElement("th");
		th.setAttribute('style','background-color:'+tableHeadingColors[j]+';color:#fff');
		var thContent = document.createTextNode(tableHeadings[j]);
		theadRow.appendChild(th);
		if(theadRow.hasChildNodes()){
			th.appendChild(thContent);
		}
	}
}

function tblBody(){

	tableData={
		make:['Redmi','Motorola','One Plus','Nokia','Oppo','Vivo','Moto','Jio','Mi','Moto'],
		model:['Note 5','X1','10','C101','F103','F1 Pro','V5','A11','Volte','Note 7','AS'],
		release:['2014','2015','2019','2008','1996','2012','2010','2014','2013','2010'],
		price:['15999','14999','34999','2999','18999','24999','16999','3999','14999','14999'],
		color:['Gold','Silver','Aqua','Rose Gold','Silver','Gold','Black','White','Black','Black'],
		ranking:['4.1','2.2','3.5','1.6','4.6','3.1','2.2','3.5','1.6','4.6','3.1']
	}
	var colors=['#fcfcfc','#eee','#e6e5e3','#d4d3d2','#c9c8c7','#bdbcbb','#b8b7b6','#aba9a7','#9c9c9c','#8a8888'];

	var tbody=document.createElement('tbody'); //Creating tbody of table
	table.appendChild(tbody);//Append tbody of table

	for(var i=1;i<=rows;i++){		
		var tbodyRow=document.createElement('tr');//Creating tr in tbody of table
		tbodyRow.setAttribute('class','row' + i);
		tbody.appendChild(tbodyRow);//Append tr in tbody of table

		for(var j=0;j<cols;j++){
			var td=document.createElement("td");//Creating td in tr of tbody
			td.setAttribute('style','background-color:'+colors[i-1]);
			td.setAttribute('align','center');
			
			tbodyRow.appendChild(td);	

			if(j==0){
				var tdContent = document.createTextNode(tableData.make[i-1]);
			}
			else if(j==1){
				var tdContent = document.createTextNode(tableData.model[i-1]);
			}
			else if(j==2){
				var tdContent = document.createTextNode(tableData.release[i-1]);
			}
			else if(j==3){
				var tdContent = document.createTextNode(tableData.price[i-1]);
			}
			else if(j==4){
				var tdContent = document.createTextNode(tableData.color[i-1]);
			}
			else if(j==5){
				var tdContent = document.createTextNode(tableData.ranking[i-1]);
			}
			if(tbodyRow.hasChildNodes()){
				td.appendChild(tdContent);
			}
			
		}
	}
}