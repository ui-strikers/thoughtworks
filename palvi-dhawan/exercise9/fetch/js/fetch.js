var container = document.querySelector('.container');
// var table = document.createElement('table');
// var tbody = document.createElement('tbody');
// var table;
// console.log(createElem(table));
function createNode (nodename){
    return document.createElement(nodename);
}    

function appenElem (parentNode, ChildNode) {
     parentNode.appendChild(child);
}



var button = document.getElementById('showResult');
button.addEventListener('click', result);

function result () {
    fetch('http://localhost/fetch/server/cars.json')
        .then(function(res){
            return res = res.json()
        })
        .then(function(data){
            console.log(data)
            displayData(data)
        })
        .catch(function(err){
            container.textContent = '<h2>Error</h2>';
        })

    console.log("Async Request sent to server!!!!");	
}

function displayData (items) {
    var col = [];
    for (var i = 0; i < items.length; i++){
        for(var key in items[i]){
            if(col.indexOf(key) === -1){
                col.push(key);
                console.log(col)
            }
        }
    }
    var table = document.createElement('table');
    console.log(table);

    table.setAttribute('class','apiResult');
    tr = table.insertRow(-1);   
    
    for (var i = 0; i < col.length; i++){
        var th = document.createElement('th');
        th.setAttribute('class','dataHead');
        th.innerHTML = col[i];
        tr.appendChild(th);
        //console.log(tr);
        
    }
    for(var i = 0; i < items.length; i++){
        tr = table.insertRow(-1);
        tr.setAttribute('class','dataRow')
        for(var j=0; j < col.length; j++){
            var tableCell = tr.insertCell(-1);
            tableCell.innerHTML = items[i][col[j]];
            console.log(tableCell);
        }
    }
    console.log("Display Data function");
    container.appendChild(table);
    console.log(table);
}



