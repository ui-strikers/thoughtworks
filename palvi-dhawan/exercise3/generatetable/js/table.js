var container = document.querySelector('.container');
console.log(container);
var button = document.createElement('input');
button.setAttribute('id','generate');
button.setAttribute('type','button');
button.setAttribute('value','Generate Table');
console.log(button);
container.appendChild(button);

var generate = document.getElementById('generate');

generate.addEventListener('click',generateTable);

function generateTable () {
    	var items = [
            {make:'make1',model:'x1',release:'2009',price:'10000',color:'white',rank:'10'},
            {make:'make2',model:'x2',release:'2010',price:'12000',color:'red',rank:'9'},
            {make:'make3',model:'x3',release:'2011',price:'14000',color:'skyblue',rank:'8'},
            {make:'make4',model:'x4',release:'2012',price:'16000',color:'black',rank:'7'},
            {make:'make5',model:'x5',release:'2013',price:'18000',color:'gold',rank:'6'},
            {make:'make6',model:'x6',release:'2014',price:'20000',color:'rosegold',rank:'5'},
            {make:'make7',model:'x7',release:'2015',price:'25000',color:'grey',rank:'4'},
            {make:'make8',model:'x8',release:'2016',price:'30000',color:'silver',rank:'3'},
            {make:'make9',model:'x9',release:'2017',price:'40000',color:'green',rank:'2'},
            {make:'make10',model:'x10',release:'2018',price:'50000',color:'blue',rank:'1'}
					
                    ]
        
        var col=[];
        for (var i=0; i < items.length; i++){
            for(var key in items[i]){
                if(col.indexOf(key) === -1){
                    col.push(key);
                }
            }
        }  
        
        var table = document.createElement('table');
        table.setAttribute('class','dataTable');
        var tr = table.insertRow(-1);

        for (var i=0; i < col.length; i++){
            var th = document.createElement('th');
            th.setAttribute('class','tableHead');
            th.textContent = col[i];
            tr.appendChild(th);
            //console.log(tr);
        }

        for (var i=0; i<items.length; i++){
            
            tr = table.insertRow(-1);
            tr.style.background = `
            rgb(
                ${Math.floor(Math.random()*255)},
                ${Math.floor(Math.random()*255)},
                ${Math.floor(Math.random()*255)})
            `;
            for(var j=0; j < col.length; j++){
                var tabCell = tr.insertCell(-1);
                tabCell.textContent = items[i][col[j]];
            }
        }
        container.appendChild(table);
}
