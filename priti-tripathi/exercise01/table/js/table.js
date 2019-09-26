function get_random_color() {
    return "#" + (Math.round(Math.random() * 0X255)).toString(16);
}

function generateTable() {
        var mobileData = [
            {
                "Make": "Samsung",
                "Model": "Sam2076",
                "Release_Year": "1093",
                "Price": "67000",
                "Color": "Grey",
                "Ranking": 7
            },
            {
                "Make": "Apple",
                "Model": "Apple208",
                "Release_Year": "2086",
                "Price": "73629",
                "Color": "Blue",
                "Ranking": 7
            },
            {
                "Make": "Sony",
                "Model": "Sony8630",
                "Release_Year": "1097",
                "Price": "33697",
                "Color": "Blue",
                "Ranking": 7
            },
            {
                "Make": "Nokia",
                "Model": "Nokia830",
                "Release_Year": "2013",
                "Price": "23929",
                "Color": "Red",
                "Ranking": 7
            },
            {
                "Make": "Google",
                "Model": "Google092",
                "Release_Year": "2029",
                "Price": "83000",
                "Color": "Black",
                "Ranking": 7
            }
        ]

        var col = [];
        for (var i = 0; i < mobileData.length; i++) {
            for (var key in mobileData[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        var table = document.createElement("table");


        var tr = table.insertRow(-1);                   

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      
            th.innerHTML = col[i];
            tr.appendChild(th);
            th.style.backgroundColor = "Grey";
        }

        for (var i = 0; i < mobileData.length; i++) {

            tr = table.insertRow(-1);
            tr.style.backgroundColor = get_random_color();

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = mobileData[i][col[j]];
            }
        }

        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

        table.setAttribute("border","1");

    }