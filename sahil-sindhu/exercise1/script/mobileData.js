//button styling
document.querySelector('input').setAttribute("style","padding:10px;font-size:16px;color:white;background:grey;font-weight:600;margin:40px 40px 40px 0;")
document.querySelector('article').setAttribute('style',"width:600px;margin:0 auto;text-align:left")   

//function to initialise Mobile objects
function mobileObjects(){
    var obj1 = new TW.Mobile("samsung",098,2010,20000,3,true);
    var obj2 = new TW.Mobile("apple",098,2010,20000,14,false);
    var obj3 = new TW.Mobile("htc",098,2010,20000,45,true);
    var obj4 = new TW.Mobile("NOKIA",0908,2010,20000,1,false);
    var obj5 = new TW.Mobile("samsung",0928,2010,20000,32,true);
    var obj6 = new TW.Mobile("apple",198,2010,20000,43,false);
    var obj7 = new TW.Mobile("MOTO",090,2010,20000,31,true);
    var obj8 = new TW.Mobile("OPPO",098,2010,20000,42,false);
    var obj9 = new TW.Mobile("samsung",088,2010,20000,31,true);
    var obj10 = new TW.Mobile("apple",087,2010,20000,42,false);
    return data = [obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10];
}

//rendom color are generated for table row 
function colorGenerator() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
    
// generate table of mobileObjects
function generateMobile(){
    //check if table exists already
    if(!document.querySelector('table')){
        var data=mobileObjects();
        var coloumn,text,val,row;
        var table = document.createElement('table');
    
        for(var i=0; i<data.length; i++){
            //create table head
            if(!i){
                row = document.createElement('tr');
                for(var k=0; k<Object.keys(data[0]).length;k++){
                    coloumn = document.createElement('th');
                   
                    coloumn.style.padding = '5px';
                    text = document.createTextNode(Object.keys(data[0])[k])
                    coloumn.appendChild(text);
                    coloumn.style.padding = '20px 0 20px';
                    coloumn.style.textTransform = 'uppercase'
                    row.appendChild(coloumn);
                    
                    row.style.background = 'grey';
                    row.style.color = 'white';
                    row.style.borderBottom = '2px solid white';
                }
            }
            //create table rows
            else{
                row = document.createElement('tr');
                var singleInfo = Object.keys(data[i])
              
                for(var j=0; j<singleInfo.length; j++){
                    x= singleInfo[j]
                    y=data[i]
                    coloumn = document.createElement('td');
                    coloumn.style.padding = '15px 0 15px';
                    coloumn.style.textAlign = 'center';
                    text = document.createTextNode(y[x])
                    coloumn.appendChild(text);
                    row.appendChild(coloumn);
                    color = colorGenerator();
                    row.style.background = color;
                }
            }
           table.appendChild(row)
        }
        document.body.append(table);
    
      document.getElementsByTagName("table")[0].style.cssText = 'color:white;margin:0 auto;width:600px;font-size:15px;border:1px solid black;border-collapse:collapse;';
    
    }
    else{
        document.querySelector('table').remove();
    }
}






