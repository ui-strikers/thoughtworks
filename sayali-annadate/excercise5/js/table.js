function tableCreate() {
  var row = [ ["Make", "Model", "Year", "Price", "Color", "Rating"], 
            ["Vivo", "V9", "2015", "20,000", "Red", "5"],
            ["iPhone", "XS", "2019", "80,000", "Rose Gold", "1"],
            ["Samsung", "S10", "2013", "15,000", "Blue", "2"],
            ["Honor", "J10", "2012", "30,000", "Gray", "8"],
            ["Oppo", "WF5", "2015", "10,000", "White", "6"],
            ["Sony Ericson", "Music Xpress", "209", "20,000", "Orange", "3"],
            ["Nokia", "N8670", "2000", "20,000", "Black", "4"],
            ["Moto", "Flip", "2015", "20,000", "Red", "1"],
            ["OnePlus", "V9", "2015", "20,000", "Red", "1"],
            ["Vivo", "V9", "2015", "20,000", "Red", "1"] ];
    
  var body = document.getElementsByTagName('body')[0];     
  var table = document.createElement('table');
      
    
  table.style.width = '100%';
  table.cellPadding ="10";
  table.style.margin = '50px 0px';
  table.style.border = '1px solid #555';
  table.style.borderCollapse = 'collapse';
  table.setAttribute('border', '1');

  var tbdy = document.createElement('tbody');
  
  for (var i = 0; i < 10; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 6; j++) {
        var text = document.createTextNode(row[i][j]);
        var td = document.createElement('td');
        td.appendChild(text);
        tr.appendChild(td)
    }
    tbdy.appendChild(tr);
  }
  table.appendChild(tbdy);
  body.appendChild(table)
  
  document.getElementsByTagName("tr")[0].style.fontWeight ="bold";
  document.getElementsByTagName("tr")[0].style.fontSize ="1.2em";
  document.getElementsByTagName("tr")[0].style.backgroundColor ="#a2a2a2";
  document.getElementsByTagName("tr")[1].style.backgroundColor ="#ff4d4d";
  document.getElementsByTagName("tr")[2].style.backgroundColor ="#ffff6b";
  document.getElementsByTagName("tr")[3].style.backgroundColor ="#65ff65";
  document.getElementsByTagName("tr")[4].style.backgroundColor ="aquamarine";
  document.getElementsByTagName("tr")[5].style.backgroundColor ="#ea6bdb";
  document.getElementsByTagName("tr")[6].style.backgroundColor ="#dc975c";
  document.getElementsByTagName("tr")[7].style.backgroundColor ="#ff4d4d";
  document.getElementsByTagName("tr")[8].style.backgroundColor ="#ffff6b";
  document.getElementsByTagName("tr")[9].style.backgroundColor ="#65ff65";
  document.getElementsByTagName("tr")[10].style.backgroundColor ="yellow";
    
  
}  
