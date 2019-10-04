var average;
var total;
   
function ratings(){
    
    var firstTime  = localStorage.getItem("isFirst");
    
    if(firstTime!="false")
       {  
        localStorage.setItem("count", 0)
        localStorage.setItem("total", 0);
        localStorage.setItem("isFirst", "false");

       }
}
function clickVeryPoor(){
     
    var value = localStorage.getItem("total");
    var count = localStorage.getItem("count");

    localStorage.setItem("total", parseInt(value)+1);
    localStorage.setItem("count", parseInt(count)+1);
   
    alert("Value" +value);
    alert("Count" +count);

    if(count == 4) {
        var total = parseInt(localStorage.getItem("total"))
        average = total/5;
         alert(average);
    }
    window.location = 'homepage.html';
}

function clickPoor(){
    var value = localStorage.getItem("total");
    var count = localStorage.getItem("count");
    localStorage.setItem("total", parseInt(value)+2);
    localStorage.setItem("count", parseInt(count)+1);
    
    alert("Value" +value);
    alert("Count" +count);
    
    if(count == 4) {
        var total = parseInt(localStorage.getItem("total"))
        average = total/5;
      alert(average);
    }
        window.location = 'homepage.html';
}

function clickAverage(){
    var value = localStorage.getItem("total");
    var count = localStorage.getItem("count");

    localStorage.setItem("total", parseInt(value)+3);
    localStorage.setItem("count", parseInt(count)+1);

    alert("Value" +value);
    alert("Count" +count);
    
    if(count == 4) {
        var total = parseInt(localStorage.getItem("total"))
        average = total/5;
      alert(average);
    }
        window.location = 'homepage.html';
}

function clickGood(){
    var value = localStorage.getItem("total");
    var count = localStorage.getItem("count");

    localStorage.setItem("total", parseInt(value)+4);
    localStorage.setItem("count", parseInt(count)+1);
    
    alert("Value" +value);
    alert("Count" +count);
    
    if(count == 4) {
        var total = parseInt(localStorage.getItem("total"))
        average = total/5;
  alert(average);
    }
        window.location = 'homepage.html';
}

function clickExcellent(){
    var value = localStorage.getItem("total");
    var count = localStorage.getItem("count");

    localStorage.setItem("total", parseInt(value)+5);
    localStorage.setItem("count", parseInt(count)+1);

    alert("Value" +value);
    alert("Count" +count);
    
    if(count == 4) {
        var total = parseInt(localStorage.getItem("total"))
        average = total/5;
         alert(average);
    }
        window.location = 'homepage.html';

}

function averageFeedback()
{
    document.getElementById('feedback-review').innerHTML = 'Average feedback from Pressure Cooker product based on feedbacks of 5 users is'
                     + average;
    
    
}