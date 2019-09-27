function generateTable() {
  var button = document.getElementsByTagName("button");
  var status = false;
  var main = document.getElementById("content");
  var table = document.createElement("table");
  main.appendChild(table);
  table.setAttribute(
    "style",
    "max-width: 80%; width: 100%;text-align: center; margin: 0 auto;margin-top: 30px;box-shadow: 10px 10px 10px 5px #aaaaaa;"
  );
  var tableHead = document.createElement("thead");
  tableHead.setAttribute(
    "style",
    "background:#000;color:#fff;padding: 0px;font-weight:bold;font-size:30px;"
  );
  table.appendChild(tableHead);

  var tableBody = document.createElement("tbody");
  table.appendChild(tableBody);
  tableBody.setAttribute("style", "background:#000;");

  for (var i = 0; i < mobilesData.length; i++) {
    var tr = document.createElement("tr");
    tableBody.appendChild(tr);

    tr.setAttribute("style", `background:#eee}`);

    var keys = Object.keys(mobilesData[0]);
    var values = Object.values(mobilesData[0]);

    for (var j = 0; j < values.length; j++) {
      if (!status) {
        for (var k = 0; k < keys.length; k++) {
          var th = document.createElement("th");
          tableHead.appendChild(th);
          th.appendChild(document.createTextNode(keys[k]));
          th.setAttribute("style", "padding:10px;");
        }
        status = true;
      }
      var td = document.createElement("td");
      td.appendChild(document.createTextNode(mobilesData[i][keys[j]])); //append textnode in td b y using i and j value of object
      tr.appendChild(td);
      td.setAttribute("style", "padding:16px; color:white;");
    }
  }
}
