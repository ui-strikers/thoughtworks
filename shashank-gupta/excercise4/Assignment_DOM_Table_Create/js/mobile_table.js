function mobileRecord() {
    var check = document.querySelectorAll('table');
    if (check.length == 0) {
        //table start
        var table = document.createElement("table");
        table.setAttribute('style', 'box-shadow: 9px 11px 25px 5px grey;margin: 2em auto;width: 85%;background-color: #e4e4e4;border-radius: 15px;border-spacing: 0px;')

        //Table title start
        var thead = document.createElement("thead");

        var tableTitle = document.createElement("tr");
        var th = document.createElement("th");
        th.setAttribute('colspan', 6);
        th.setAttribute('style', 'font-size: 2.5em; line-height: 1.5em; color: brown;')
        th.appendChild(document.createTextNode("Mobile Details"));
        tableTitle.appendChild(th);
        thead.appendChild(tableTitle);
        table.appendChild(thead);
        //Table title end

        //table body start
        var tbody = document.createElement("tbody");

        //table heading start
        var trHeading = document.createElement("tr");
        trHeading.setAttribute('style', 'background-color: black; text-transform: uppercase;color: white;font-size: 1.3em; line-height: 2.7em;')

        var Make = document.createElement("th");
        Make.appendChild(document.createTextNode("Make"));

        var Model = document.createElement("th");
        Model.appendChild(document.createTextNode("Model"));

        var ReleaseYear = document.createElement("th");
        ReleaseYear.appendChild(document.createTextNode("Release Year"));

        var Price = document.createElement("th");
        Price.appendChild(document.createTextNode("Price"));

        var Color = document.createElement("th");
        Color.appendChild(document.createTextNode("Color"));

        var Ranking = document.createElement("th");
        Ranking.appendChild(document.createTextNode("Ranking"));

        trHeading.appendChild(Make);
        trHeading.appendChild(Model);
        trHeading.appendChild(ReleaseYear);
        trHeading.appendChild(Price);
        trHeading.appendChild(Color);
        trHeading.appendChild(Ranking);
        tbody.appendChild(trHeading);
        //table heading end

        //table content start

        for (var mobileItem of mobileData) {
            var trBody = document.createElement("tr");

            //random color genrator
            var red = Math.floor((Math.random() * 10)) + 'a';
            var green = Math.floor((Math.random() * 10)) + 'b';
            var blue = Math.floor((Math.random() * 10)) + 'c';

            trBody.setAttribute('style', 'text-align:center; background-color:#' + red + green + blue + ';');
            for (var item in mobileItem) {
                var trChild_Td = document.createElement("td");
                trChild_Td.setAttribute('style', 'padding: 0.6em;font-weight: 600;')
                trChild_Td.appendChild(document.createTextNode(mobileItem[item]));
                trBody.appendChild(trChild_Td);
                //table content end
            }
            tbody.appendChild(trBody);
            //table body closed
        }
        table.appendChild(tbody);
        //table closed
        document.body.appendChild(table);
    }
}

